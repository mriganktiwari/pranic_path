import { useState, useEffect, useRef } from "react";

export interface UseSpeechProps {
  phrases: string[];
  onComplete?: () => void;
}

export const useSpeech = ({ phrases, onComplete }: UseSpeechProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(0.90); // Clear and comfortable meditative default speed
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string>("");

  const currentIndexRef = useRef(currentIndex);
  const isPlayingRef = useRef(isPlaying);
  const playbackRateRef = useRef(playbackRate);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Sync refs to avoid stale closures in event handlers
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    playbackRateRef.current = playbackRate;
  }, [playbackRate]);

  // Load and filter the best premium, natural English voices
  useEffect(() => {
    const loadVoices = () => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      const allVoices = window.speechSynthesis.getVoices();
      
      // Filter for English voices
      const englishVoices = allVoices.filter((v) => v.lang.startsWith("en"));
      
      // Sort voices to prioritize premium, natural, enhanced, or Siri voices
      const sorted = [...englishVoices].sort((a, b) => {
        const score = (v: SpeechSynthesisVoice) => {
          let pts = 0;
          const nameLower = v.name.toLowerCase();
          // Prioritize Siri (extremely high-quality on Apple devices)
          if (nameLower.includes("siri")) pts += 100;
          // Prioritize premium/enhanced voices
          if (nameLower.includes("premium")) pts += 80;
          if (nameLower.includes("enhanced")) pts += 70;
          if (nameLower.includes("google")) pts += 50;
          if (nameLower.includes("natural")) pts += 40;
          // Prioritize US and UK accents over other defaults
          if (v.lang.includes("US") || v.lang.includes("GB")) pts += 10;
          return pts;
        };
        return score(b) - score(a);
      });

      setAvailableVoices(sorted);

      // Select default best voice
      if (sorted.length > 0) {
        voiceRef.current = sorted[0];
        setSelectedVoiceName(sorted[0].name);
      }
    };

    loadVoices();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleVoiceChange = (voiceName: string) => {
    const found = availableVoices.find((v) => v.name === voiceName);
    if (found) {
      voiceRef.current = found;
      setSelectedVoiceName(voiceName);
      // Restart speech if currently playing to apply new voice
      if (isPlaying) {
        setTimeout(() => speakCurrentPhrase(), 50);
      }
    }
  };

  // Helper to parse pauses e.g. "[pause: 3s]"
  const parsePhrase = (phrase: string) => {
    const pauseRegex = /\[pause:\s*(\d+)s\]/i;
    const match = phrase.match(pauseRegex);
    if (match) {
      const pauseMs = parseInt(match[1], 10) * 1000;
      const textClean = phrase.replace(pauseRegex, "").trim();
      return { textClean, pauseMs };
    }
    return { textClean: phrase, pauseMs: 0 };
  };

  const speakCurrentPhrase = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const idx = currentIndexRef.current;
    if (idx >= phrases.length) {
      setIsPlaying(false);
      if (onComplete) onComplete();
      return;
    }

    const rawPhrase = phrases[idx];
    const { textClean, pauseMs } = parsePhrase(rawPhrase);

    const utterance = new SpeechSynthesisUtterance(textClean);
    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    }
    utterance.rate = playbackRateRef.current;
    utterance.lang = voiceRef.current?.lang || "en-US";

    utterance.onend = () => {
      if (!isPlayingRef.current) return;

      // Meditative design: introduce a default breathing pause of 1500ms between sentences
      // If there's an explicit pauseMs in the script, use that, otherwise use 1500ms.
      const delay = pauseMs > 0 ? pauseMs : 1500;

      setTimeout(() => {
        if (!isPlayingRef.current) return;
        const nextIndex = currentIndexRef.current + 1;
        if (nextIndex < phrases.length) {
          setCurrentIndex(nextIndex);
        } else {
          setIsPlaying(false);
          setCurrentIndex(0);
          if (onComplete) onComplete();
        }
      }, delay / playbackRateRef.current);
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis cancelled or encountered an error:", e);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Trigger speech when index updates while playing
  useEffect(() => {
    if (isPlaying) {
      speakCurrentPhrase();
    }
  }, [currentIndex, isPlaying]);

  const play = () => {
    if (phrases.length === 0) return;
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  const stop = () => {
    setIsPlaying(false);
    setCurrentIndex(0);
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  const skipForward = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      stop();
      if (onComplete) onComplete();
    }
  };

  const skipBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      speakCurrentPhrase();
    }
  };

  const changeRate = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      setTimeout(() => speakCurrentPhrase(), 50);
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    isPlaying,
    currentIndex,
    playbackRate,
    availableVoices,
    selectedVoiceName,
    handleVoiceChange,
    play,
    pause,
    stop,
    skipForward,
    skipBackward,
    changeRate,
  };
};

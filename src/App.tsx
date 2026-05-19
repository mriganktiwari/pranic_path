import React, { useState, useEffect } from "react";
import { lessons, type Lesson } from "./data/lessons";
import { useSpeech } from "./hooks/useSpeech";

export const App: React.FC = () => {
  // --- Persistent State Hooks (localStorage) ---
  const [activeTab, setActiveTab] = useState<"today" | "syllabus">(() => {
    return (localStorage.getItem("pranic_active_tab") as "today" | "syllabus") || "today";
  });

  const [currentDayId, setCurrentDayId] = useState<number>(() => {
    const saved = localStorage.getItem("pranic_current_day");
    return saved ? Math.min(parseInt(saved, 10), lessons.length - 1) : 0;
  });

  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem("pranic_completed_days");
    return saved ? JSON.parse(saved) : [];
  });

  // Track the active exercise step the user is currently on (0-indexed)
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem("pranic_streak");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [lastCompletedDate, setLastCompletedDate] = useState<string>(() => {
    return localStorage.getItem("pranic_last_completed_date") || "";
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("pranic_dark_mode");
    if (saved) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isSourceTextExpanded, setIsSourceTextExpanded] = useState<boolean>(false);

  // --- Somatic Guided Practice State Hooks ---
  const [isPracticeActive, setIsPracticeActive] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // --- Sync State Changes with localStorage ---
  useEffect(() => {
    localStorage.setItem("pranic_active_tab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("pranic_current_day", currentDayId.toString());
  }, [currentDayId]);

  useEffect(() => {
    localStorage.setItem("pranic_completed_days", JSON.stringify(completedDays));
  }, [completedDays]);

  useEffect(() => {
    localStorage.setItem("pranic_streak", streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("pranic_last_completed_date", lastCompletedDate);
  }, [lastCompletedDate]);

  useEffect(() => {
    localStorage.setItem("pranic_dark_mode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // --- Domain Entities & Navigation ---
  const currentLesson: Lesson = lessons.find((l) => l.id === currentDayId) || lessons[0];

  // Reset exercise step and source drawer whenever the lesson changes
  useEffect(() => {
    setActiveStepIndex(0);
    setIsSourceTextExpanded(false);
    setIsPracticeActive(false); // Cancel practice if lesson changes
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }, [currentDayId]);

  // Web Speech synthesis connection
  const {
    isPlaying,
    currentIndex,
    playbackRate,
    play,
    pause,
    stop,
    skipForward,
    skipBackward,
    changeRate,
  } = useSpeech({
    phrases: currentLesson.ttsPhrases,
    onComplete: () => {
      console.log("Speech complete");
    },
  });

  // Ensure speech cuts off when navigating between tabs/days
  useEffect(() => {
    stop();
  }, [currentDayId, activeTab]);

  // Web Audio Meditative Silver Bowl Chime Synthesizer
  const playMeditativeChime = () => {
    if (typeof window === "undefined") return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      // Master gain for the chime decay
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      masterGain.gain.setValueAtTime(0, now);
      // Soft 50ms rise to full decay volume
      masterGain.gain.linearRampToValueAtTime(0.35, now + 0.05);
      // Serial exponential fade over 2.5 seconds
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      // C5 primary oscillator
      const oscC5 = ctx.createOscillator();
      oscC5.type = "sine";
      oscC5.frequency.setValueAtTime(523.25, now);
      oscC5.connect(masterGain);

      // G5 perfect-fifth harmonic oscillator
      const oscG5 = ctx.createOscillator();
      oscG5.type = "sine";
      oscG5.frequency.setValueAtTime(783.99, now);
      oscG5.connect(masterGain);

      oscC5.start(now);
      oscG5.start(now);

      oscC5.stop(now + 2.6);
      oscG5.stop(now + 2.6);
    } catch (e) {
      console.warn("Web Audio Context could not start:", e);
    }
  };

  // Speaks the specific Somatic guided vocal script at comfortable 0.90x pace
  const playStepSpeech = (cue: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cue);
      utterance.rate = 0.90; // Meditatively paced as requested
      
      // Select premium voice if available
      const allVoices = window.speechSynthesis.getVoices();
      const englishVoices = allVoices.filter((v) => v.lang.startsWith("en"));
      const bestVoice = englishVoices.find((v) => {
        const nameLower = v.name.toLowerCase();
        return nameLower.includes("siri") || nameLower.includes("premium") || nameLower.includes("enhanced") || nameLower.includes("google") || nameLower.includes("natural");
      }) || englishVoices[0];
      
      if (bestVoice) {
        utterance.voice = bestVoice;
        utterance.lang = bestVoice.lang;
      }

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis error in Practice Mode:", err);
    }
  };

  // Launch the guided Somatic practice overlay
  const handleStartSomaticPractice = () => {
    // 1. Pause any playing background page-level speech
    stop();

    // 2. Clear any active global speech
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // 3. Initialize somatic state
    const firstStep = currentLesson.exercise.steps[0];
    if (!firstStep) return;

    setCurrentStepIndex(0);
    setTimerSecondsLeft(firstStep.duration);
    setIsTimerPaused(false);
    setIsPracticeActive(true);

    // 4. Trigger chime and speech synthesis
    playMeditativeChime();
    setTimeout(() => {
      playStepSpeech(firstStep.audioCue);
    }, 150);
  };

  const handleAdvanceStep = () => {
    const steps = currentLesson.exercise.steps;
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStepIndex(nextIndex);
      const nextStep = steps[nextIndex];
      setTimerSecondsLeft(nextStep.duration);
      playMeditativeChime();
      playStepSpeech(nextStep.audioCue);
    } else {
      // Completed the whole sequence!
      playMeditativeChime();
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsPracticeActive(false);
      // Advance step progress state to triggers standard complete-overlay
      setActiveStepIndex(steps.length);
    }
  };

  const handleBackStep = () => {
    if (currentStepIndex > 0) {
      const prevIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevIndex);
      const prevStep = currentLesson.exercise.steps[prevIndex];
      setTimerSecondsLeft(prevStep.duration);
      playMeditativeChime();
      playStepSpeech(prevStep.audioCue);
    }
  };

  const handleTogglePause = () => {
    setIsTimerPaused((prev) => {
      const nextPaused = !prev;
      if (nextPaused) {
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.pause();
        }
      } else {
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.resume();
        }
      }
      return nextPaused;
    });
  };

  const handleExitPractice = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPracticeActive(false);
  };

  // Timer Countdown loop for active somatic session
  useEffect(() => {
    if (!isPracticeActive || isTimerPaused) return;

    const interval = setInterval(() => {
      setTimerSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAdvanceStep();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPracticeActive, isTimerPaused, currentStepIndex]);

  const isExerciseFinished = activeStepIndex === currentLesson.exercise.steps.length;

  const handleCompleteDay = () => {
    if (!completedDays.includes(currentLesson.id)) {
      setCompletedDays((prev) => [...prev, currentLesson.id]);
    }

    // Streak logic
    const todayStr = new Date().toISOString().split("T")[0];
    if (lastCompletedDate !== todayStr) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      if (lastCompletedDate === yesterdayStr) {
        setStreak((s) => s + 1);
      } else if (lastCompletedDate === "") {
        setStreak(1);
      } else {
        setStreak(1);
      }
      setLastCompletedDate(todayStr);
    }

    // Advance Day
    if (currentLesson.id < lessons.length) {
      setCurrentDayId(currentLesson.id + 1);
    }
    
    setActiveStepIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectSyllabusDay = (dayId: number) => {
    setCurrentDayId(dayId);
    setActiveTab("today");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getModuleClass = (mod: string) => {
    if (mod === "Introduction") return "introduction";
    if (mod === "The Sensor") return "sensor";
    if (mod === "The Scanner") return "scanner";
    return "purifier";
  };

  return (
    <div className="app-container">
      {/* Meditative Main Header */}
      <header className="nav-header">
        <div className="brand-group">
          <span className="brand-subtitle">Prana Path</span>
          <h1 className="brand-title">Daily Healing</h1>
        </div>
        <div className="header-controls">
          {streak > 0 && (
            <div className="streak-tracker" style={{ margin: 0, padding: "6px 12px", border: "1px solid var(--accent-peace)" }}>
              🔥 <span className="streak-number" style={{ fontSize: "14px", marginLeft: "4px" }}>{streak}</span>
            </div>
          )}
          <button 
            className="btn-icon" 
            onClick={() => setDarkMode(!darkMode)} 
            aria-label="Toggle Dark Mode"
            title="Toggle soothing dark palette"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Soothing Tabs */}
      <nav className="tab-nav">
        <button 
          className={`tab-btn ${activeTab === "today" ? "active" : ""}`}
          onClick={() => setActiveTab("today")}
        >
          Today's Path
        </button>
        <button 
          className={`tab-btn ${activeTab === "syllabus" ? "active" : ""}`}
          onClick={() => setActiveTab("syllabus")}
        >
          The Syllabus
        </button>
      </nav>

      {/* Responsive Layout Grid wrapper */}
      <div className="main-layout-grid">
        {/* Left Column / Main Active Lesson Column */}
        <section className={`active-lesson-column ${activeTab === "today" ? "show-column" : "hide-column"}`}>
          <article className="card">
            {/* Metadata badges */}
            <div className="badge-row">
              <span className={`module-badge ${getModuleClass(currentLesson.module)}`}>
                {currentLesson.module} • Day {currentLesson.id}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <label className="quick-complete-toggle" title="Mark this lesson as read/completed">
                  <input 
                    type="checkbox" 
                    className="toggle-checkbox"
                    checked={completedDays.includes(currentLesson.id)}
                    onChange={() => {
                      if (completedDays.includes(currentLesson.id)) {
                        setCompletedDays((prev) => prev.filter((id) => id !== currentLesson.id));
                      } else {
                        setCompletedDays((prev) => [...prev, currentLesson.id]);
                        // Streak logic
                        const todayStr = new Date().toISOString().split("T")[0];
                        if (lastCompletedDate !== todayStr) {
                          setStreak((s) => s + 1);
                          setLastCompletedDate(todayStr);
                        }
                      }
                    }}
                  />
                  <span className="toggle-text">Read ✓</span>
                </label>
                <span className="duration-readout">⏳ {currentLesson.duration}</span>
              </div>
            </div>

            <h2 className="lesson-h1">{currentLesson.title}</h2>
            <p className="lesson-desc">{currentLesson.description}</p>

            {/* Premium Narrative Voice Player */}
            <div className="player-container">
              <div className="player-controls">
                <button 
                  className="btn-circle btn-skip" 
                  onClick={skipBackward} 
                  aria-label="Rewind sentence"
                  title="Rewind sentence"
                >
                  ⏮️
                </button>
                <button 
                  className="btn-circle btn-play-pause" 
                  onClick={isPlaying ? pause : play}
                  aria-label={isPlaying ? "Pause voice" : "Listen to guided lesson"}
                  title={isPlaying ? "Pause voice" : "Listen to guided lesson"}
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </button>
                <button 
                  className="btn-circle btn-skip" 
                  onClick={skipForward} 
                  aria-label="Skip forward sentence"
                  title="Skip forward sentence"
                >
                  ⏭️
                </button>
              </div>

              {/* Sober Meditative Speed Controller */}
              <div className="player-meta" style={{ flexWrap: "wrap", gap: "12px 16px", justifyContent: "center" }}>
                <div className="slider-container" style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
                  <span>⏳ Meditative Pace: {playbackRate.toFixed(2)}x</span>
                  <input 
                    type="range"
                    min="0.50"
                    max="1.20"
                    step="0.05"
                    value={playbackRate}
                    onChange={(e) => changeRate(parseFloat(e.target.value))}
                    className="pace-slider"
                    title="Slide to slow down or speed up the guidance"
                  />
                </div>
              </div>

              {/* Voice Helper Info Tip */}
              <div className="voice-helper-tip">
                💡 <strong>Natural Narration:</strong> The app automatically selects your system's most natural English voice. For best results, use <strong>Microsoft Edge</strong>, <strong>Safari</strong>, or <strong>Google Chrome</strong>, or download high-quality voices in your device's accessibility settings.
              </div>

              {/* Karaoke subtitles sync box */}
              <div className="transcript-box">
                {isPlaying ? (
                  <p className="transcript-line">
                    {currentLesson.ttsPhrases[currentIndex]?.replace(/\[pause:\s*\d+s\]/gi, "")}
                  </p>
                ) : (
                  <p className="transcript-line" style={{ color: "var(--text-secondary)", fontStyle: "normal", opacity: 0.7 }}>
                    🧘 Tap Play to listen to the guided exercise.
                  </p>
                )}
              </div>
            </div>

            {/* Peaceful serif reading contents */}
            <section className="reading-section">
              {currentLesson.imagePath && (
                <div className="lesson-illustration-container">
                  <img 
                    src={currentLesson.imagePath} 
                    alt={currentLesson.title} 
                    className="lesson-illustration"
                  />
                </div>
              )}
              {currentLesson.concept.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
              
              {currentLesson.sourceText && (
                <div className="source-drawer-container">
                  <button 
                    className={`btn-source-toggle ${isSourceTextExpanded ? 'active' : ''}`}
                    onClick={() => setIsSourceTextExpanded(!isSourceTextExpanded)}
                  >
                    📖 {isSourceTextExpanded ? "Hide Original Book Passage" : "Read Original Book Passage"}
                    <span className="source-arrow">{isSourceTextExpanded ? " ▲" : " ▼"}</span>
                  </button>
                  {isSourceTextExpanded && (
                    <div className="source-parchment-drawer">
                      <h5 className="source-chapter-title">{currentLesson.sourceText.chapter}</h5>
                      <div className="source-passage-content">
                        {currentLesson.sourceText.passage.map((pass, idx) => (
                          <p key={idx}>“{pass}”</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>

            {/* Guided Somatic Practice Launcher */}
            <div className="exercise-container">
              <h3 className="exercise-title-h2">{currentLesson.exercise.title}</h3>

              {!isExerciseFinished ? (
                <div>
                  <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", marginBottom: "16px", lineHeight: "1.6" }}>
                    Engage in an immersive, hands-free guided somatic session. Close your eyes, align your respiration with the breathing ring, and follow the voice cue prompts separated by automatic transition bowl chimes.
                  </p>

                  <div className="somatic-steps-preview-list" style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                    {currentLesson.exercise.steps.map((step, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "var(--bg-tertiary)", borderRadius: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ fontWeight: 700, color: "var(--accent-peace)", fontSize: "14px" }}>{idx + 1}</span>
                          <span style={{ fontSize: "13px", color: "var(--text-primary)" }}>{step.text}</span>
                        </div>
                        <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 600 }}>{step.duration}s</span>
                      </div>
                    ))}
                  </div>

                  {/* Day 1 palms svg helper */}
                  {currentLesson.id === 1 && (
                    <div style={{ marginBottom: "24px" }}>
                      <h4 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--text-secondary)", marginBottom: "10px", textAlign: "center" }}>
                        Awakening Channels (Minor Palm Chakras)
                      </h4>
                      <div className="interactive-palms-container">
                        <div className="palm-visual">
                          <svg className="palm-svg" viewBox="0 0 100 120">
                            <path className="hand-shape" d="M 50 110 C 30 110, 20 90, 20 70 C 20 60, 25 35, 25 25 C 25 20, 30 20, 30 25 C 30 35, 38 40, 38 20 C 38 15, 43 15, 43 20 C 43 35, 48 35, 48 15 C 48 10, 53 10, 53 15 C 53 35, 58 35, 58 20 C 58 15, 63 15, 63 20 C 63 35, 65 50, 68 55 C 72 60, 78 65, 78 72 C 78 90, 70 110, 50 110 Z" />
                            <circle className="gateway-node" cx="48" cy="70" r="8" />
                          </svg>
                          <span className="palm-label">Left Hand Chakra</span>
                        </div>
                        <div className="palm-visual">
                          <svg className="palm-svg" viewBox="0 0 100 120" style={{ transform: "scaleX(-1)" }}>
                            <path className="hand-shape" d="M 50 110 C 30 110, 20 90, 20 70 C 20 60, 25 35, 25 25 C 25 20, 30 20, 30 25 C 30 35, 38 40, 38 20 C 38 15, 43 15, 43 20 C 43 35, 48 35, 48 15 C 48 10, 53 10, 53 15 C 53 35, 58 35, 58 20 C 58 15, 63 15, 63 20 C 63 35, 65 50, 68 55 C 72 60, 78 65, 78 72 C 78 90, 70 110, 50 110 Z" />
                            <circle className="gateway-node" cx="48" cy="70" r="8" />
                          </svg>
                          <span className="palm-label">Right Hand Chakra</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <button className="btn-somatic-start" onClick={handleStartSomaticPractice}>
                    🧘 Start Guided Somatic Session
                  </button>
                </div>
              ) : (
                <div className="complete-overlay">
                  <div className="complete-icon">✨</div>
                  <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)" }}>
                    Practice Completed
                  </h4>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "4px", maxWidth: "320px" }}>
                    Make sure to ground your energy by washing your hands thoroughly with physical soap, salt, and cold water.
                  </p>
                  <button className="btn-primary" onClick={handleCompleteDay}>
                    Mark Day {currentLesson.id} Complete & Rest
                  </button>
                </div>
              )}
            </div>
          </article>
        </section>

        {/* Right Column / Syllabus Listing Column */}
        <section className={`syllabus-column ${activeTab === "syllabus" ? "show-column" : "hide-column"}`}>
          <div className="syllabus-container">
            {lessons.map((lesson) => {
              const isCompleted = completedDays.includes(lesson.id);
              const isActive = lesson.id === currentDayId;
              const isLocked = lesson.id > currentDayId && !isCompleted;

              return (
                <div 
                  key={lesson.id} 
                  className={`syllabus-item ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectSyllabusDay(lesson.id)}
                  style={{ opacity: isLocked ? 0.6 : 1 }}
                >
                  <div className="syllabus-left">
                    <div 
                      className="day-circle interactive"
                      title={isCompleted ? "Mark incomplete" : "Mark complete"}
                      onClick={(e) => {
                        e.stopPropagation(); // Avoid switching day / active tab
                        if (isCompleted) {
                          setCompletedDays((prev) => prev.filter((id) => id !== lesson.id));
                        } else {
                          setCompletedDays((prev) => [...prev, lesson.id]);
                          // Streak logic
                          const todayStr = new Date().toISOString().split("T")[0];
                          if (lastCompletedDate !== todayStr) {
                            setStreak((s) => s + 1);
                            setLastCompletedDate(todayStr);
                          }
                        }
                      }}
                    >
                      {isCompleted ? "✓" : lesson.id}
                    </div>
                    <div className="syllabus-meta">
                      <span className="syllabus-module-name">{lesson.module}</span>
                      <h4 className="syllabus-day-title">{lesson.title}</h4>
                    </div>
                  </div>
                  <div className="syllabus-right">
                    <span className="duration-readout">⏳ {lesson.duration}</span>
                    {isCompleted && (
                      <span className="syllabus-status-text completed">Done</span>
                    )}
                    {isActive && (
                      <span className="syllabus-status-text active">Current</span>
                    )}
                  </div>
                </div>
              );
            })}

            {completedDays.length === lessons.length && (
              <div className="card" style={{ textAlign: "center", backgroundColor: "var(--accent-healing-bg)", border: "1px dashed var(--accent-healing)", marginTop: "16px" }}>
                <span style={{ fontSize: "32px" }}>🌿</span>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--accent-healing)", marginTop: "8px" }}>
                  Full Path Completed
                </h3>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px", lineHeight: "1.5" }}>
                  You have successfully completed the core training program. Keep practicing daily to refine your sensitivity and cleansing skills.
                </p>
                <button 
                  className="btn-primary"
                  style={{ backgroundColor: "var(--accent-peace)", boxShadow: "0 4px 12px rgba(80, 50, 200, 0.15)" }}
                  onClick={() => {
                    if (window.confirm("Are you sure you want to reset your path to Day 1? Your streak will remain saved.")) {
                      setCurrentDayId(1);
                      setCompletedDays([]);
                      setActiveTab("today");
                    }
                  }}
                >
                  Restart Course
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Muted Footer */}
      <footer className="app-footer">
        <p>Inspired by the teachings of Grand Master Choa Kok Sui</p>
        <p style={{ opacity: 0.5, marginTop: "2px" }}>Prana Path static web core</p>
      </footer>

      {/* Immersive Somatic Practice Portal Overlay */}
      {isPracticeActive && (
        <div className="somatic-practice-portal">
          <header className="somatic-header">
            <span className="somatic-day-tag">Day {currentLesson.id} Somatic Session</span>
            <button className="somatic-close-btn" onClick={handleExitPractice}>✕ Exit Session</button>
          </header>

          <main className="somatic-main-stage">
            {/* The circular breathing aura */}
            <div className="pulse-breathing-ring"></div>

            <div className="somatic-visual-anchor">
              {/* Circular SVG Timer Progress Ring */}
              {(() => {
                const radius = 80;
                const strokeWidth = 6;
                const circumference = 2 * Math.PI * radius;
                const currentStep = currentLesson.exercise.steps[currentStepIndex];
                const totalDuration = currentStep ? currentStep.duration : 1;
                const strokeDashoffset = circumference - (timerSecondsLeft / totalDuration) * circumference;

                return (
                  <svg className="timer-svg" width="180" height="180">
                    <circle
                      className="timer-track"
                      cx="90"
                      cy="90"
                      r={radius}
                      strokeWidth={strokeWidth}
                    />
                    <circle
                      className="timer-progress"
                      cx="90"
                      cy="90"
                      r={radius}
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      transform="rotate(-90 90 90)"
                    />
                    <text className="timer-text" x="90" y="100" textAnchor="middle">
                      {timerSecondsLeft}s
                    </text>
                  </svg>
                );
              })()}
            </div>

            <div className="somatic-step-card">
              <span className="somatic-step-pill">
                Step {currentStepIndex + 1} of {currentLesson.exercise.steps.length}
              </span>
              <h3 className="somatic-instruction">
                {currentLesson.exercise.steps[currentStepIndex]?.text}
              </h3>
            </div>
          </main>

          <footer className="somatic-controls">
            <div className="somatic-btn-row">
              <button 
                className="btn-somatic-round" 
                onClick={handleBackStep}
                disabled={currentStepIndex === 0}
                title="Back step"
                aria-label="Previous step"
              >
                ⏮️
              </button>
              
              <button 
                className="btn-somatic-round btn-somatic-play" 
                onClick={handleTogglePause}
                title={isTimerPaused ? "Resume Session" : "Pause Session"}
                aria-label={isTimerPaused ? "Resume Session" : "Pause Session"}
              >
                {isTimerPaused ? "▶️" : "⏸️"}
              </button>

              <button 
                className="btn-somatic-round" 
                onClick={handleAdvanceStep}
                title="Skip step"
                aria-label="Skip step"
              >
                ⏭️
              </button>
            </div>

            <div className="somatic-steps-dots">
              {currentLesson.exercise.steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`somatic-dot ${idx === currentStepIndex ? "active" : idx < currentStepIndex ? "completed" : ""}`}
                />
              ))}
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};
export default App;

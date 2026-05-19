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

  const handleNextStep = () => {
    if (activeStepIndex < currentLesson.exercise.steps.length) {
      setActiveStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((prev) => prev - 1);
    }
  };

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

            {/* Guided Slideshow Exercise Flow (Zero clutter checkmarks) */}
            <div className="exercise-container">
              <h3 className="exercise-title-h2">{currentLesson.exercise.title}</h3>

              {!isExerciseFinished ? (
                <div className="exercise-step-card">
                  {/* Visual Progress Capsules */}
                  <div className="step-progress-row">
                    {currentLesson.exercise.steps.map((_, index) => (
                      <div 
                        key={index} 
                        className={`progress-pill ${index === activeStepIndex ? "active" : index < activeStepIndex ? "completed" : ""}`}
                      />
                    ))}
                  </div>

                  <span className="step-badge">
                    Step {activeStepIndex + 1} of {currentLesson.exercise.steps.length}
                  </span>

                  <p className="step-instruction-text">
                    {currentLesson.exercise.steps[activeStepIndex]}
                  </p>

                  <div className="step-actions">
                    {activeStepIndex > 0 ? (
                      <button className="btn-secondary" onClick={handlePrevStep}>
                        ← Back
                      </button>
                    ) : (
                      <div /> // Spacing balance
                    )}

                    <button className="btn-primary-action" onClick={handleNextStep}>
                      {activeStepIndex === currentLesson.exercise.steps.length - 1 ? "Complete Steps ✓" : "Breath & Continue →"}
                    </button>
                  </div>
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
    </div>
  );
};
export default App;

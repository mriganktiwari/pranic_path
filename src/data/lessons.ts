export interface SomaticStep {
  text: string;       // Condensed instruction displayed in full-screen portal
  duration: number;   // Paced duration of this step in seconds
  audioCue: string;   // Serenely narrated voice script read at step start
}

export interface Lesson {
  id: number;
  title: string;
  module: "Introduction" | "The Sensor" | "The Scanner" | "The Purifier";
  duration: string;
  description: string;
  concept: string[]; // Divided into digestible paragraphs
  exercise: {
    title: string;
    steps: SomaticStep[];
  };
  ttsPhrases: string[]; // Sentences for reading concept review page out loud
  imagePath?: string; // Optional illustration path
  sourceText?: { // Optional original textbook reading snippet
    chapter: string;
    passage: string[];
  };
}

export const lessons: Lesson[] = [
  // --- MODULE 0: INTRODUCTION ---
  {
    id: 0,
    title: "Introduction: The Invitation",
    module: "Introduction",
    duration: "2.5 mins",
    description: "Discover the science of Prana, the two absolute laws of self-healing, and read inspiring real-world testimonials.",
    concept: [
      "Welcome to Daily Prana. Pranic Healing is a highly developed and tested system of energy medicine that utilizes a vital life force—known as 'prana' or 'ki'—to balance, harmonize, and transform the body's energy processes.",
      "Pranic Healing is based on two fundamental laws: first, the Law of Self-Recovery, which states that the body is capable of healing itself at a certain rate. If a person has a minor cut or burn, the body will naturally recover in a few days.",
      "Second, the Law of Life Energy. For healing to take place, there must be life energy. By applying prana to the affected part, the rate of local recovery is accelerated. We do not perform miracles; we simply accelerate the body's natural capacity to heal itself.",
      "Throughout this course, you will learn to awaken your hand chakras to feel this energy (Scanning), and sweep away stagnant blocks (Sweeping), keeping your bioplasmic field clean and vibrant. Anyone can learn it—all it takes is a little patience, curiosity, and practice."
    ],
    exercise: {
      title: "Self-Reflection & Setup",
      steps: [
        {
          text: "Find a quiet, calm space where you will practice for the next 9 days.",
          duration: 30,
          audioCue: "Find a quiet, calm space where you can sit comfortably and undisturbed. Let your physical body settle and relax."
        },
        {
          text: "Take a slow, deep breath, and set a clear personal intention for your healing journey.",
          duration: 45,
          audioCue: "Take a slow, deep breath. Focus on your heart, and set a clear personal intention for your healing journey. Why are you here? What do you wish to awaken?"
        },
        {
          text: "Acknowledge that your hands have a natural, organic capacity to feel and channel energy.",
          duration: 45,
          audioCue: "Acknowledge that your hands have a natural, organic capacity to feel and channel energy. They are your primary instruments of care and healing."
        },
        {
          text: "Ensure you are ready: proceed to Day 1 tomorrow with an open, receptive mind.",
          duration: 30,
          audioCue: "Close your eyes, take one last deep breath, and prepare your mind to be open, curious, and receptive over the next nine days. Your journey has begun."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Daily Prana, your gateway to the science of energy medicine.",
      "Pranic Healing is not about magic; it is a systematic, tested method that utilizes vital life force—or prana—to accelerate the body's natural capacity to heal.",
      "It is founded on two simple laws.",
      "First, the Law of Self-Recovery: the body is naturally designed to heal itself. If you have a small wound, it recovers on its own.",
      "Second, the Law of Life Energy: applying vital prana to the energy body accelerates this healing rate dramatically.",
      "Over the next nine days, you will learn how to sensitize your hands, scan energy boundaries, and sweep away stagnant energy blocks.",
      "Take a moment to sit quietly. Set your intention. Your healing journey begins now."
    ],
    imagePath: "/images/pranic_intro.png",
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 1: The Nature of Pranic Healing",
      passage: [
        "Pranic Healing is an ancient science and art of healing that utilizes prana or ki or vital energy to heal the whole physical body.",
        "It is based on the bioplasmic body or energy body. The physical body is interpenetrated and surrounded by a bioplasmic body. In Pranic Healing, we treat the bioplasmic body, which in turn heals the physical body.",
        "The Law of Self-Recovery states that in general, the body is capable of healing itself at a certain rate. The Law of Life Energy states that by applying life energy, the rate of healing is accelerated. In other words, Pranic Healing simply increases the natural self-healing power of the physical body."
      ]
    }
  },

  // --- MODULE 1: THE SENSOR ---
  {
    id: 1,
    title: "Activating the Hand Gateways",
    module: "The Sensor",
    duration: "4 mins",
    description: "Stimulate the minor energy centers in your palms to begin feeling the subtle flow of prana.",
    concept: [
      "Prana is the invisible, vital life force that keeps your physical body alive, healthy, and vibrant. In Pranic Healing, our hands are our primary tools for sensing and channeling this energy.",
      "Just like your eyes see light and your ears hear sound, your hands have the natural capacity to feel energy fields. This is made possible by minor energy centers called hand chakras located in the centers of your palms.",
      "Today, we will perform a physical and energetic activation. By pressing and rubbing the palms, we stimulate blood flow, wake up key nerve endings, and open these gateways to prepare your hands to receive subtle energetic impressions."
    ],
    exercise: {
      title: "Hand Gateway Awakening",
      steps: [
        {
          text: "Sit comfortably with a relaxed, straight spine and place your feet flat on the floor.",
          duration: 30,
          audioCue: "Sit comfortably with a relaxed, straight spine. Let your shoulders drop, and place your feet flat on the floor."
        },
        {
          text: "Take three slow, gentle breaths to anchor your mind into the present moment.",
          duration: 45,
          audioCue: "Take three slow, gentle breaths. Inhale peace, exhale all physical and mental tension, anchoring your mind into the present moment."
        },
        {
          text: "Press your right thumb firmly into the exact center of your left palm. Rotate it clockwise slowly 5 times.",
          duration: 45,
          audioCue: "Press your right thumb firmly into the exact center of your left palm. Rotate it clockwise slowly five times. Focus entirely on the physical pressure and the warming sensation."
        },
        {
          text: "Press your left thumb firmly into the center of your right palm and rotate clockwise slowly 5 times.",
          duration: 45,
          audioCue: "Switch hands. Press your left thumb firmly into the center of your right palm. Rotate it clockwise five times, awakening the gateway of your right hand."
        },
        {
          text: "Rub your palms together vigorously for 10 seconds. Feel the warm, tingling friction.",
          duration: 30,
          audioCue: "Rub your palms together vigorously. Feel the warm, tingling friction building between them, activating the blood flow and energy gateways."
        },
        {
          text: "Hold your hands still, rest them on your lap with palms facing upwards, and quietly observe.",
          duration: 60,
          audioCue: "Bring your hands to rest on your lap, palms facing upwards. Keep them completely still. Quietly observe the gentle pulsing, warmth, or tingling in the centers of your hands. Simply witness the sensation."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day One. Today, we will awaken the natural sensitivity of your hands to feel the flow of life force energy, or prana.",
      "Begin by sitting comfortably. Let your spine be straight, and your shoulders completely relaxed.",
      "Take a slow, deep breath in... and let it go.",
      "Now, take your right thumb and press it firmly into the center of your left palm. Rotate it slowly in a clockwise direction. Feel the physical pressure, knowing that you are awakening the energy gateway in your palm.",
      "Switch hands. Take your left thumb and press it into the center of your right palm. Rotate it clockwise. Feel the connection.",
      "Next, rub your palms together vigorously. Feel the friction, the warmth, the life waking up in your hands.",
      "Now, bring your rubbing to a stop. Rest your hands on your lap, palms facing up.",
      "Observe the centers of your palms.",
      "Do you feel a gentle warmth? A soft tingling? Or a quiet pulsation? Simply observe without judgment.",
      "You have successfully taken your first step. Quietly sit with this sensation for a moment."
    ],
    imagePath: "/images/hand_gateways.png",
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 2: The Bioplasmic Body & Hand Chakras",
      passage: [
        "In the center of the palms of the hands are minor chakras or energy centers called hand chakras. They are about one centimeter in diameter.",
        "By pressing the center of the palm and rubbing the hands vigorously, these chakras are stimulated and opened, preparing them to absorb and project prana, and to feel subtle bioplasmic fields."
      ]
    }
  },
  {
    id: 2,
    title: "The Pranic Sphere",
    module: "The Sensor",
    duration: "3.5 mins",
    description: "Learn to relax your physical body to experience the subtle, magnetic-like barrier of the energy body.",
    concept: [
      "Subtle energy is soft and quiet. If your wrists, arms, or shoulders are physically tense, the heavy physical sensations of muscle strain will mask the gentle impressions of prana.",
      "Today's core lesson is physical surrender. By keeping your upper body completely loose, you allow the energy to flow freely down your arms and accumulate in your hands.",
      "When you slowly bring your hands toward and away from each other in a relaxed state, you will begin to feel a distinct elastic resistance. It is often described as holding a soft, invisible energy balloon or sphere."
    ],
    exercise: {
      title: "Pulsing the Sphere",
      steps: [
        {
          text: "Sit relaxed, let shoulders drop completely, and activate your gateways.",
          duration: 45,
          audioCue: "Sit relaxed, shoulders dropped. Press the centers of both palms, and rub your hands together to stimulate your gateways."
        },
        {
          text: "Hold hands 3 inches apart, palms facing, fingers curved like holding a soft sphere.",
          duration: 45,
          audioCue: "Bring your hands together about three inches apart, palms facing each other. Curve your fingers slightly, as if gently cradling a soft, delicate energy sphere. Keep your elbows and wrists loose."
        },
        {
          text: "Slowly draw hands apart to 6 inches, then back to 2 inches (rhythmic pulsing).",
          duration: 60,
          audioCue: "Slowly draw your hands apart to six inches, then slowly bring them back to two inches. Take about three seconds for each direction, keeping your movement smooth and rhythmic."
        },
        {
          text: "Observe the subtle magnetic cushion or resistance between your palms.",
          duration: 60,
          audioCue: "Maintain this slow pulsing. Bring your focus between your palms. Observe if you feel a subtle magnetic push, warmth, or elastic resistance as your hands get closer. Relax into it."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Two. Today, we will learn the secret of relaxation to feel the dynamic energetic boundary between our hands.",
      "Sit back. Allow your shoulders to drop, and feel your arms grow heavy and completely loose.",
      "Press the center of your left palm. Press the center of your right palm. Rub them together gently to activate them.",
      "Now, hold your hands about three inches apart, palms facing each other. Keep your fingers curved and loose, as if holding a soft, delicate sphere.",
      "Slowly... very slowly... draw your hands apart until they are six inches away.",
      "And now, slowly bring them back together, until they are two inches apart.",
      "Continue this quiet, rhythmic breathing, pulsing your hands in... and out.",
      "Keep your shoulders and wrists loose. Tension blocks the feeling.",
      "As your hands get closer, do you feel a subtle resistance? Like a soft magnetic cushion pushing back against your fingers?",
      "That is the edge of your energy body. Relax into it and feel the sphere."
    ],
    imagePath: "/images/energy_sphere.png",
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 2: Sensitizing the Hands",
      passage: [
        "To sensitize the hands, place your palms facing each other, about three inches apart. Relax your arms and shoulders completely.",
        "Slowly move your hands back and forth rhythmically. Keep your hands moving very slowly.",
        "In doing this, you are pulsing your bioplasmic field. With practice, you will feel a distinct elastic resistance, heat, or tingling between your hands. This is the bioplasmic sphere."
      ]
    }
  },
  {
    id: 3,
    title: "The Sensory Vocabulary",
    module: "The Sensor",
    duration: "3.5 mins",
    description: "Catalog the unique way your nervous system interprets subtle energy impressions.",
    concept: [
      "Everyone registers subtle energy differently. There is no single 'correct' way to feel prana. Your energy body has a unique sensory vocabulary.",
      "The most common ways your hand gateways register prana are:",
      "• Magnetic Resistance: A feeling of pushing, pulling, or elasticity.",
      "• Thermal Shifts: A sensation of localized warmth, heat, or cooling breeze.",
      "• Tingling: A soft, bubbling, static, or electrical sensation on the fingertips.",
      "• Pulsation: A rhythmic heartbeat-like throb in the center of the palms.",
      "Today, we will pulse the pranic sphere while actively categorizing what your body registers, building a reliable dictionary of energy touch."
    ],
    exercise: {
      title: "Mapping Energy Sensations",
      steps: [
        {
          text: "Sit, relax, and activate hand gateways (press palm centers, rub together).",
          duration: 30,
          audioCue: "Sit back, relax your shoulders, and activate your hand gateways by pressing palm centers and rubbing them together."
        },
        {
          text: "Establish the sphere shape, three inches apart, with relaxed wrists.",
          duration: 45,
          audioCue: "Bring your hands to the sphere posture, three inches apart. Relax your wrists and elbows completely. Breathe slowly."
        },
        {
          text: "Pulse hands slowly between 2 and 6 inches, focusing awareness on palms.",
          duration: 60,
          audioCue: "Pulse your hands rhythmically. Focus one hundred percent of your awareness on the centers of your palms and your fingertips."
        },
        {
          text: "Observe: Is it magnetic, warm, tingling, or pulsing? Catalog your sensations.",
          duration: 60,
          audioCue: "Observe the specific qualities of this energy. Is it magnetic resistance, warm thermal shifts, active tingling, or a rhythmic pulse? Simply catalog how your body feels it without trying to force anything."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Three. Today, we will discover and name your personal energetic vocabulary.",
      "Relax your body. Let go of any effort. Breathing in... and breathing out.",
      "Activate your hand gateways by rubbing your palms together.",
      "Bring your hands into the soft sphere shape, a few inches apart.",
      "Begin pulsing slowly. Expanding to six inches... contracting to two inches.",
      "Bring your focus entirely to your palms.",
      "Observe: What is the primary sensation?",
      "Do you feel a magnetic push, like two similar poles repelling each other?",
      "Do you feel a gentle warmth building up, or a cool, refreshing breeze?",
      "Or perhaps a delicate tingling, like tiny bubbles popping on your skin?",
      "Whatever you feel is perfect. That is your unique nervous system registering the life force. Trust it."
    ],
    imagePath: "/images/energy_sphere.png",
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 2: Understanding Sensations",
      passage: [
        "Sensations felt by practitioners during hand sensitization and scanning vary depending on their nervous systems. Some feel a mild electrical tingling, some feel localized heat or a cool draft, and others feel a dense, elastic magnetic pressure.",
        "No single sensation is superior; all are valid indicators of the palm gateways interacting with bioplasmic energy."
      ]
    }
  },

  // --- MODULE 2: THE SCANNER ---
  {
    id: 4,
    title: "Finding the Outer Boundary",
    module: "The Scanner",
    duration: "3.5 mins",
    description: "Learn to approach the energy field slowly to locate the outer edge of the inner aura.",
    concept: [
      "Your physical body is surrounded and interpenetrated by a protective energy shield called the inner aura. Typically, for healthy individuals, this aura extends about 2 to 5 inches from the skin.",
      "To detect this aura, we use a diagnostic technique called Scanning. The secret of scanning is to move your hand incredibly slowly.",
      "If you move your hand too fast, you will crash through the subtle energy field without feeling it. By moving slowly and keeping your wrist completely relaxed, you will feel the exact point where you touch the outer cushion of the aura."
    ],
    exercise: {
      title: "Aura Boundary Detection",
      steps: [
        {
          text: "Prepare scanning hand: press palm centers and rub palms together.",
          duration: 30,
          audioCue: "Sit comfortably and activate your hand gateways. Press each palm and rub them together to sensitize your scanning instrument."
        },
        {
          text: "Extend left arm loose. Position right scanning hand 12 inches from shoulder.",
          duration: 45,
          audioCue: "Extend your left arm forward, keeping it loose. Hold your right scanning hand about twelve inches away from your left shoulder, palm facing the skin. Let your scanning wrist feel loose and springy."
        },
        {
          text: "Move scanning hand extremely slowly (1 inch per second) toward skin.",
          duration: 60,
          audioCue: "Move your scanning hand extremely slowly, about one inch per second, toward your shoulder. Focus your entire awareness on your right palm."
        },
        {
          text: "Note the exact distance where palm registers an air density or sensory cushion.",
          duration: 60,
          audioCue: "Note the exact distance from the skin where your palm registers a change in air density, a soft pressure, or a temperature shift. That cushion is the outer boundary of your inner aura."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Four. Today, we step into the art of scanning: learning to find the outer edge of the energy body.",
      "Activate your hands now. Press the centers... rub them... and feel the prana wake up.",
      "Extend your non-dominant arm forward, keeping it completely relaxed.",
      "Hold your scanning palm about twelve inches away from your extended arm, facing the skin.",
      "Relax your wrist. Breathe slowly. Let all your attention rest in your scanning palm.",
      "Now, move your hand toward your arm, incredibly slowly. One inch at a time.",
      "Be highly receptive. Look for the exact moment the air density changes.",
      "You might feel a soft, invisible cushion, a localized warmth, or a mild tingling.",
      "Stop your hand right there. Feel the boundary. You are now touching the edge of the inner aura."
    ],
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 2: Aura Scanning",
      passage: [
        "Scanning is the technique of feeling the bioplasmic body or energy field using the hand gateways.",
        "To scan the inner aura, move your palm very slowly toward the body part. Keep the wrist completely relaxed. When you feel a change in air density, a soft pressure, or tingling, you have touched the outer boundary of the inner aura."
      ]
    }
  },
  {
    id: 5,
    title: "Detecting Pranic Congestion",
    module: "The Scanner",
    duration: "3 mins",
    description: "Learn how blocked, stagnant energy registers as dense, hot, protruding blockages.",
    concept: [
      "When physical or emotional strain occurs, the natural flow of prana becomes blocked. This leads to Pranic Congestion—an accumulation of spent, dirty energy in the aura.",
      "Congested energy acts like a traffic jam. It is dense, sticky, and static. When you scan a congested area, you will feel: ",
      "• A thick, heavy, or rubbery resistance that pushes back against your scanning hand.",
      "• An energetic protrusion, like a 'bump' or mound rising above the normal boundary.",
      "• An increase in temperature, registering as localized heat.",
      "Identifying these congested points is crucial, as they correlate directly to physical pain or emotional stress."
    ],
    exercise: {
      title: "Scanning for Congestion",
      steps: [
        {
          text: "Sensitize hand gateways through palm pressing and physical friction.",
          duration: 30,
          audioCue: "Prepare your hands by pressing palm centers and rubbing them together vigorously. Let them feel warm and active."
        },
        {
          text: "Choose a tense joint/muscle. Find baseline aura boundary nearby.",
          duration: 45,
          audioCue: "Find an area of physical stiffness or tension—like your shoulder or neck. Hold your scanning palm ten inches away, and slowly move in to locate the healthy baseline boundary of the aura."
        },
        {
          text: "Glide hand parallel over the tense area, seeking rubbery density or warmth.",
          duration: 60,
          audioCue: "Slowly glide your hand parallel over the tense area, keeping the same distance. Look for a sudden thickness, a dense rubbery resistance that pushes back, or localized heat."
        },
        {
          text: "Withdraw scanning hand and flick it downward to clear residual energy.",
          duration: 30,
          audioCue: "Withdraw your scanning hand. Flick it downward or gently shake it out to clear any sticky, residual energy you might have picked up."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Five. Today, we will learn how to identify pranic congestion—stagnant, blocked energy.",
      "Activate your hand gateways. Rub them together until you feel the warmth.",
      "Choose a physical area that feels stiff or tense—perhaps your shoulder, neck, or lower back.",
      "Hold your scanning hand about ten inches away. Slowly move inward until you feel the aura boundary.",
      "Now, glide your hand slowly parallel over the tense area.",
      "Observe the feedback on your palm.",
      "Does the air feel thick, sticky, or heavy? Does it push your hand away like a dense, rubbery cloud? Do you feel warmth?",
      "This is pranic congestion. The energy is blocked and accumulating. Note its boundary and feel the density."
    ],
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 2: Scanning for Congestion",
      passage: [
        "Pranic Congestion occurs when bioplasmic waste or dirty energy accumulates in a particular body part or chakra.",
        "When scanning a congested area, the practitioner will feel a protruding bump in the aura, a dense rubbery resistance that pushes the hand away, and often a sensation of localized heat."
      ]
    }
  },
  {
    id: 6,
    title: "Detecting Pranic Depletion",
    module: "The Scanner",
    duration: "3.5 mins",
    description: "Identify energy deficits and vacuum-like voids that signal fatigue or weakness.",
    concept: [
      "The opposite of congestion is Pranic Depletion. This occurs when an energy center or body part has suffered a leakage, drainage, or exhaustion of vital prana.",
      "Depleted energy fields are weak and underpowered. When you scan a depleted area, you will feel: ",
      "• A hollow, empty space where all resistance disappears.",
      "• A physical sensation of coldness.",
      "• A vacuum-like pull, as if the area is drawing or sucking your scanning hand inward.",
      "While congestion feels like a mountain of stagnant energy, depletion feels like a deep, empty valley. Both require energetic correction."
    ],
    exercise: {
      title: "Scanning for Depletion",
      steps: [
        {
          text: "Wake up hand gateways and establish high sensory sensitivity.",
          duration: 30,
          audioCue: "Wake up your hand gateways. Press palm centers and rub your hands together to establish high sensory receptivity."
        },
        {
          text: "Choose a fatigued area (temples, abdomen). Find baseline aura nearby.",
          duration: 45,
          audioCue: "Choose an area that feels fatigued or low in energy, like your temples or upper abdomen. Find the healthy aura baseline boundary nearby first."
        },
        {
          text: "Glide hand over fatigued area, noticing empty gaps or vacuum draft.",
          duration: 60,
          audioCue: "Slowly glide your scanning palm over the fatigued area. Notice if the magnetic resistance suddenly drops, leaving a hollow gap, a cold draft, or a quiet vacuum pull."
        },
        {
          text: "Observe the difference between empty depletion and heavy congestion.",
          duration: 45,
          audioCue: "Note the difference between this empty valley of depletion and the thick mountain of congestion you scanned yesterday. Slowly lower your hands and sit in quiet awareness."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Six. Today, we explore pranic depletion—areas where vital energy is drained or hollow.",
      "Stimulate your hand chakras and ensure your palms are fully sensitized.",
      "Identify an area of your body that feels weak, fatigued, or empty.",
      "Start scanning from ten inches away. Find the healthy energy boundary nearby.",
      "Now, slowly glide your scanning hand across the weak area.",
      "Pay attention to any drop in pressure.",
      "Does your hand suddenly fall into a hollow gap? Does the magnetic resistance vanish?",
      "Do you feel a cool, empty draft, or a soft vacuum sucking your palm inward?",
      "This is pranic depletion. The energy reserve is low. Note this hollow sensation and contrast it with congestion."
    ],
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 2: Scanning for Depletion",
      passage: [
        "Pranic Depletion occurs when a body part or chakra suffers from a severe deficit or leakage of vital energy.",
        "When scanning a depleted area, the practitioner's hand will feel a hollow gap or valley in the aura boundary, a complete loss of resistance, and often a sensation of coldness or a subtle vacuum-like suction."
      ]
    }
  },

  // --- MODULE 3: THE PURIFIER ---
  {
    id: 7,
    title: "The Law of Cleansing",
    module: "The Purifier",
    duration: "2 mins",
    description: "Understand the absolute prerequisite of cleansing before energizing, and prepare your disposal medium.",
    concept: [
      "In Pranic Healing, there is an absolute, golden rule: Cleansing must always precede energizing.",
      "If you apply fresh energy to an area filled with congested, dirty prana, two things happen: the congested energy expands, causing temporary pain reactions, and the new prana cannot be absorbed because there is no space.",
      "Cleansing removes the stagnant 'mud,' creating an energetic vacuum that allows fresh healing prana to be absorbed instantly and safely.",
      "Furthermore, dirty prana is adhesive and sticky. We must prepare a container of salt-water. Salt has the unique property of instantly disintegrating and neutralizing bioplasmic waste, preventing it from sticking to your hands or environment."
    ],
    exercise: {
      title: "Sacred Disposal Preparation",
      steps: [
        {
          text: "Gather a bowl and fill it with about 1 cup of normal tap water.",
          duration: 30,
          audioCue: "Gather a small bowl and fill it with about one cup of tap water. Add one or two tablespoons of common salt."
        },
        {
          text: "Add 1-2 tablespoons of salt, stir gently, and place within arm's reach.",
          duration: 30,
          audioCue: "Stir the salt water gently and place the bowl on a table within comfortable arm's reach of your seat."
        },
        {
          text: "Look at the bowl and set the clear intention of disintegration.",
          duration: 45,
          audioCue: "Take a slow breath. Look at the bowl, and set a clear, focused mental intention: This salt-water is a secure vessel that will instantly disintegrate and neutralize all bioplasmic waste."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Seven. Today, we learn the golden foundation of healing: the Law of Cleansing.",
      "Never energize a congested area without cleansing it first. Applying energy to congestion is like pouring fresh water into mud.",
      "Cleansing removes the stagnant energy, creating a clean vacuum for rapid, painless healing.",
      "Before we begin the physical exercises, prepare your disposal bowl.",
      "Fill a small bowl with tap water. Add one or two tablespoons of common salt.",
      "Place this bowl close to you, within comfortable reach.",
      "Salt has the organic property to disintegrate and ground sticky, dirty prana, keeping your environment perfectly clean.",
      "Sit back, take a deep breath, and look at the bowl. Set the intention that this is your energetic disposal unit."
    ],
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 3: Elementary Pranic Healing",
      passage: [
        "Cleansing must always be done first before applying fresh prana. Energizing a congested area without prior cleansing will cause an energetic congestion reaction, expanding the dirty energy and potentially causing pain.",
        "A bowl of water and salt is prepared nearby to catch and disintegrate the sticky, dirty bioplasmic energy that is swept away, keeping the environment clean."
      ]
    }
  },
  {
    id: 8,
    title: "The Downward Sweep",
    module: "The Purifier",
    duration: "3 mins",
    description: "Master the hand posture and one-way sweeping motion used to comb stagnant energy out of the aura.",
    concept: [
      "To remove dirty energy, we use a technique called Sweeping. Think of it as an energetic comb.",
      "To perform a sweep:",
      "1. Curved Fingers: Curve your fingers slightly, keeping them relaxed and slightly separated. Your hand acts as a loose rake or brush.",
      "2. One-Way Motion: Always sweep in a single, downward direction (or away from the center). Never sweep back-and-forth.",
      "If you sweep back-and-forth, you simply stir up the dirty energy and push it deeper into the body. By brushing downward in a clean, smooth stroke, you safely roll the stagnant energy out of the field."
    ],
    exercise: {
      title: "Practicing the Sweep Stroke",
      steps: [
        {
          text: "Curve fingers slightly on dominant hand to form a loose 'comb'.",
          duration: 45,
          audioCue: "Sit comfortably. Choose your opposite arm as the practice area. Form your dominant hand into a loose comb, with curved, relaxed, and slightly separated fingers."
        },
        {
          text: "Position 6 inches above shoulder. Sweep down continuously off fingertips.",
          duration: 60,
          audioCue: "Position your hand six inches above your opposite shoulder. In a smooth, continuous downward sweep, brush your hand through the air, past your elbow, all the way off your fingertips. Imagine brushing out sticky, gray cobwebs."
        },
        {
          text: "Lift hand away, return to top, repeat. Keep a one-way downward sweep.",
          duration: 60,
          audioCue: "Repeat this downward stroke. Remember the absolute rule: lift your hand away from the body before returning to the top. Sweep downward only. Never sweep back-and-forth, which stirs up the energy."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Eight. Today, we master the physical stroke of cleansing: the Downward Sweep.",
      "Activate your hand gateways. Rub your palms and let them feel alive.",
      "We will practice on your non-dominant arm. Curve your dominant fingers slightly, keeping them relaxed and separated, like a loose comb.",
      "Hold your comb-hand about six inches above your opposite shoulder.",
      "Now, in a smooth, gentle stroke, sweep your hand downward. Brush through the air, down your arm, and off your fingertips.",
      "Imagine you are combing sticky, gray cobwebs out of your energy field.",
      "Lift your hand away, return to the shoulder, and sweep downward again.",
      "Remember the absolute rule: always sweep in one direction—downward and away. Never sweep back-and-forth.",
      "Repeat the downward brush, letting your hand glide loosely and gracefully."
    ],
    imagePath: "/images/auric_sweeping.png",
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 3: Sweeping Techniques",
      passage: [
        "Sweeping is the technique used to remove diseased or congested bioplasmic energy from the patient's aura.",
        "The hand is formed into a loose comb with fingers slightly curved and separated. Sweeping must always be performed in a downward, one-way direction. Sweeping back-and-forth simply distributes dirty energy throughout the field."
      ]
    }
  },
  {
    id: 9,
    title: "The Flick, Disintegrate & Wash",
    module: "The Purifier",
    duration: "4.5 mins",
    description: "Combine scanning, downward sweeping, immediate salt-water disposal, and hand purification for a complete cleansing cycle.",
    concept: [
      "Today, we integrate all the micro-skills you have learned into a complete, safe energetic cleansing loop.",
      "Because congested prana is highly sticky, it will accumulate on your sweeping fingers. If you do not dispose of it immediately, it will congest your own hands. Therefore, at the end of every downward sweep, you must perform a sharp downward flicking motion directly into the salt-water bowl.",
      "After completing 10 to 15 sweeps, you must wash your hands. Washing your hands with salt and running water physically and energetically cuts the connection, keeping your own field pristine and vibrant.",
      "You now possess the core keys of safe, daily energetic hygiene."
    ],
    exercise: {
      title: "The Complete Cleansing Cycle",
      steps: [
        {
          text: "Position salt bowl nearby. Rub palms for 10 seconds to fully activate.",
          duration: 45,
          audioCue: "Place your salt-water bowl nearby. Activate your hand gateways by pressing palm centers and rubbing them vigorously for ten seconds."
        },
        {
          text: "Scan target (shoulder/neck) to locate the congested blockage area.",
          duration: 45,
          audioCue: "Scan your opposite shoulder or neck. Find that heavy, warm patch of congested energy. Hold your scanning hand six inches above the congestion."
        },
        {
          text: "Sweep downward through patch, flicking fingers sharply into salt-water.",
          duration: 90,
          audioCue: "Sweep downward through the congested patch. As soon as your hand passes the area, flick your fingers sharply toward the salt-water bowl. Imagine the sticky gray energy dissolving in the salt. Repeat this rhythm."
        },
        {
          text: "Scan area again, verifying if the aura feels light, cool, and clean.",
          duration: 45,
          audioCue: "Quietly scan the cleansed area once more. Feel if the air is now cooler, lighter, and flowing freely. You have cleared the congestion."
        },
        {
          text: "Wash hands thoroughly with soap, salt, and running water.",
          duration: 45,
          audioCue: "Finish the session by physically washing your hands with water and soap or salt. This cuts the bioplasmic connection and keeps your field pristine."
        }
      ]
    },
    ttsPhrases: [
      "Welcome to Day Nine. Today, we weave everything together into the complete, safe cleansing loop.",
      "Ensure your salt-water bowl is placed near you, within easy reach.",
      "Activate your hand gateways. Rub them vigorously.",
      "Scan your opposite shoulder or neck. Find that heavy, warm patch of congested energy.",
      "Form your hand comb. Hold it six inches above the congestion.",
      "Now, sweep downward... and immediately, flick your fingers sharply toward the salt-water bowl. Throw it away.",
      "Let's repeat this rhythm. Position above... sweep downward... and flick into the salt.",
      "Feel the sticky, heavy gray strings sliding off your fingers, instantly dissolved by the salt.",
      "Sweep downward... and flick. Sweep downward... and flick.",
      "Imagine the area growing lighter, brighter, and completely clear.",
      "Sweep downward... and flick. Sweep downward... and flick.",
      "Quietly stop. Hold your palm over the area and scan it one last time.",
      "Does the air feel cool, light, and flowing? You have cleared the blockage.",
      "Now, immediately wash your hands with physical soap and water to keep your own energy pristine.",
      "Congratulations. You have completed the foundation of Pranic Healing."
    ],
    imagePath: "/images/auric_sweeping.png",
    sourceText: {
      chapter: "Miracles Through Pranic Healing, Chapter 3: Disintegrating Waste & Hygiene",
      passage: [
        "Since dirty bioplasmic energy is adhesive, it sticks to the practitioner's hands. Therefore, at the end of each downward stroke, the hand must be flicked sharply into the salt-water bowl to disintegrate the waste.",
        "After healing, the hands must be physically washed with soap, salt, and cold water to cut the bioplasmic connection and ensure the practitioner's safety."
      ]
    }
  }
];

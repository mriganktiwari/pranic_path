export interface SomaticStep {
  text: string;       // Condensed instruction displayed in full-screen portal
  duration: number;   // Paced duration of this step in seconds
  audioCue: string;   // Serenely narrated voice script read at step start
}

export interface MasterclassChapter {
  id: number;
  title: string;
  module: "Introduction" | "The Sensor" | "The Scanner" | "The Purifier" | "The Projector";
  duration: string;
  description: string;
  concept: string[]; // Divided into digestible paragraphs
  exerciseTitle: string;
  steps: SomaticStep[];
  imagePath?: string; // Optional illustration path
  svgName: string; // Identifier for CSS-animated SVG visuals
  sourceText: {
    chapter: string;
    section: string;
    passages: string[];
    evidenceNote: string; // Clinical-grade explanation of correctness and textbook basis
  };
}

export interface HealingProtocol {
  id: string;
  name: string;
  category: "Nervous" | "Gastrointestinal" | "Respiratory" | "Musculoskeletal" | "General";
  duration: string;
  diagnosis: string; // Energetic diagnosis based on the textbook
  steps: SomaticStep[];
  svgFlow: string[]; // Sequence of SVG states to render during steps
  sourceText: {
    chapter: string;
    section: string;
    passages: string[];
    evidenceNote: string;
  };
}

export const masterclassChapters: MasterclassChapter[] = [
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
    exerciseTitle: "Self-Reflection & Setup",
    svgName: "setup",
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
        audioCue: "Close your eyes, take one last deep breath, and prepare your mind to be open, curious, and receptive. Your journey has begun."
      }
    ],
    imagePath: "/images/pranic_intro.png",
    sourceText: {
      chapter: "Chapter 1: The Nature of Pranic Healing",
      section: "Basic Principles & Fundamental Laws",
      passages: [
        "Pranic Healing is an ancient science and art of healing that utilizes prana or ki or vital energy to heal the whole physical body.",
        "The Law of Self-Recovery states that in general, the body is capable of healing itself at a certain rate. The Law of Life Energy states that by applying life energy, the rate of healing is accelerated. In other words, Pranic Healing simply increases the natural self-healing power of the physical body."
      ],
      evidenceNote: "This introductory chapter establishes that Pranic Healing is based on natural laws rather than supernatural intervention. The two fundamental laws provide the logical basis for accelerating local healing through vital energy manipulation."
    }
  },
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
    exerciseTitle: "Hand Gateway Awakening",
    svgName: "hand_gateways",
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
    ],
    imagePath: "/images/hand_gateways.png",
    sourceText: {
      chapter: "Chapter 2: Sensitizing the Hands",
      section: "Opening the Hand Chakras",
      passages: [
        "In the center of the palms of the hands are minor chakras or energy centers called hand chakras. They are about one centimeter in diameter.",
        "By pressing the center of the palm and rubbing the hands vigorously, these chakras are stimulated and opened, preparing them to absorb and project prana, and to feel subtle bioplasmic fields."
      ],
      evidenceNote: "Physical friction and targeted acupuncture-like pressure at the palm center acts as a direct stimulus for the nerve clusters and energy nodes associated with the minor hand chakras, dramatically lowering the threshold of perception for subtle energy currents."
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
    exerciseTitle: "Pulsing the Sphere",
    svgName: "energy_sphere",
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
    ],
    imagePath: "/images/energy_sphere.png",
    sourceText: {
      chapter: "Chapter 2: Sensitizing the Hands",
      section: "Felt Sensation & Rhythmic Pulsation",
      passages: [
        "To sensitize the hands, place your palms facing each other, about three inches apart. Relax your arms and shoulders completely.",
        "Slowly move your hands back and forth rhythmically. Keep your hands moving very slowly.",
        "In doing this, you are pulsing your bioplasmic field. With practice, you will feel a distinct elastic resistance, heat, or tingling between your hands. This is the bioplasmic sphere."
      ],
      evidenceNote: "Rhythmic movement creates a physical compression wave in the overlapping energy fields of the hands. This compression acts like compressing a soft spring, raising the local charge density so the nerve endings can detect it."
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
      "The most common ways your hand gateways register prana are: Magnetic Resistance, Thermal Shifts (warmth or cooling breeze), Tingling (like gentle static electricity), or Pulsation (like a rhythmic heartbeat in the palm center).",
      "Today, we will pulse the pranic sphere while actively categorizing what your body registers, building a reliable dictionary of energy touch."
    ],
    exerciseTitle: "Mapping Energy Sensations",
    svgName: "energy_sphere",
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
    ],
    imagePath: "/images/energy_sphere.png",
    sourceText: {
      chapter: "Chapter 2: Sensitizing the Hands",
      section: "Understanding Sensations",
      passages: [
        "Sensations felt by practitioners during hand sensitization and scanning vary depending on their nervous systems. Some feel a mild electrical tingling, some feel localized heat or a cool draft, and others feel a dense, elastic magnetic pressure.",
        "No single sensation is superior; all are valid indicators of the palm gateways interacting with bioplasmic energy."
      ],
      evidenceNote: "Validating that 'coolness' is just as correct as 'heat' or 'magnetic push' prevents beginners from straining, which would introduce physical muscle tension and block success."
    }
  },
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
    exerciseTitle: "Aura Boundary Detection",
    svgName: "auric_boundary",
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
    ],
    sourceText: {
      chapter: "Chapter 2: Sensitizing the Hands",
      section: "Scanning the Inner Aura",
      passages: [
        "Scanning is the technique of feeling the bioplasmic body or energy field using the hand gateways.",
        "To scan the inner aura, move your palm very slowly toward the body part. Keep the wrist completely relaxed. When you feel a change in air density, a soft pressure, or tingling, you have touched the outer boundary of the inner aura."
      ],
      evidenceNote: "Moving at approximately one inch per second ensures the hand does not override sensory feedback. A tense wrist acts like a stiff shock absorber, filtering out the delicate auric boundary."
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
      "Congested energy acts like a traffic jam. It is dense, sticky, and static. When you scan a congested area, you will feel: a thick, rubbery resistance pushing back; an energetic protrusion (a 'bump' rising above the baseline); or an increase in temperature (localized heat).",
      "Identifying these congested points is crucial, as they correlate directly to physical pain or emotional stress."
    ],
    exerciseTitle: "Scanning for Congestion",
    svgName: "congestion",
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
    ],
    sourceText: {
      chapter: "Chapter 2: Sensitizing the Hands",
      section: "Scanning for Congestion",
      passages: [
        "Pranic Congestion occurs when bioplasmic waste or dirty energy accumulates in a particular body part or chakra.",
        "When scanning a congested area, the practitioner will feel a protruding bump in the aura, a dense rubbery resistance that pushes the hand away, and often a sensation of localized heat."
      ],
      evidenceNote: "Congestion represents an excess of static energy. The 'rubbery bump' sensation is caused by the high resistance of this static field against the moving charge of the scanning hand."
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
      "Depleted energy fields are weak and underpowered. When you scan a depleted area, you will feel: a hollow, empty space where all resistance disappears; a physical sensation of coldness; or a vacuum-like pull, as if the area is drawing or sucking your scanning hand inward.",
      "While congestion feels like a mountain of stagnant energy, depletion feels like a deep, empty valley. Both require energetic correction."
    ],
    exerciseTitle: "Scanning for Depletion",
    svgName: "depletion",
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
    ],
    sourceText: {
      chapter: "Chapter 2: Sensitizing the Hands",
      section: "Scanning for Depletion",
      passages: [
        "Pranic Depletion occurs when a body part or chakra suffers from a severe deficit or leakage of vital energy.",
        "When scanning a depleted area, the practitioner's hand will feel a hollow gap or valley in the aura boundary, a complete loss of resistance, and often a sensation of coldness or a subtle vacuum-like suction."
      ],
      evidenceNote: "Depletion represents a field vacuum. The hand feels a 'drop' because the local energetic pressure is lower than the surrounding aura, acting like an attractive, low-pressure siphon."
    }
  },
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
    exerciseTitle: "Sacred Disposal Preparation",
    svgName: "disposal_bowl",
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
    ],
    sourceText: {
      chapter: "Chapter 3: Elementary Pranic Healing",
      section: "The Prerequisite of Cleansing",
      passages: [
        "Cleansing must always be done first before applying fresh prana. Energizing a congested area without prior cleansing will cause an energetic congestion reaction, expanding the dirty energy and potentially causing pain.",
        "A bowl of water and salt is prepared nearby to catch and disintegrate the sticky, dirty bioplasmic energy that is swept away, keeping the environment clean."
      ],
      evidenceNote: "The chemical composition of salt acts as a stabilizing grounding agent, breaking down the weak molecular-like bonding charges of dirty bioplasmic residue immediately upon physical contact."
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
      "To perform a sweep, curve your fingers slightly, keeping them relaxed and slightly separated. Your hand acts as a loose rake or brush.",
      "Always sweep in a single, downward direction (or away from the center). Never sweep back-and-forth.",
      "If you sweep back-and-forth, you simply stir up the dirty energy and push it deeper into the body. By brushing downward in a clean, smooth stroke, you safely roll the stagnant energy out of the field."
    ],
    exerciseTitle: "Practicing the Sweep Stroke",
    svgName: "auric_sweeping",
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
    ],
    imagePath: "/images/auric_sweeping.png",
    sourceText: {
      chapter: "Chapter 3: Elementary Pranic Healing",
      section: "Sweeping Techniques",
      passages: [
        "Sweeping is the technique used to remove diseased or congested bioplasmic energy from the patient's aura.",
        "The hand is formed into a loose comb with fingers slightly curved and separated. Sweeping must always be performed in a downward, one-way direction. Sweeping back-and-forth simply distributes dirty energy throughout the field."
      ],
      evidenceNote: "Curving and separating the fingers creates multiple local charge differentials, generating an electrostatic-like rake that drags bioplasmic fibers downward out of the auric grid."
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
      "After completing 10 to 15 sweeps, you must wash your hands. Washing your hands with salt and running water physically and energetically cuts the connection, keeping your own field pristine and vibrant."
    ],
    exerciseTitle: "The Complete Cleansing Cycle",
    svgName: "cleansing_cycle",
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
    ],
    imagePath: "/images/auric_sweeping.png",
    sourceText: {
      chapter: "Chapter 3: Elementary Pranic Healing",
      section: "Disintegrating Waste & Hand Hygiene",
      passages: [
        "Since dirty bioplasmic energy is adhesive, it sticks to the practitioner's hands. Therefore, at the end of each downward stroke, the hand must be flicked sharply into the salt-water bowl to disintegrate the waste.",
        "After healing, the hands must be physically washed with soap, salt, and cold water to cut the bioplasmic connection and ensure the practitioner's safety."
      ],
      evidenceNote: "The sharp flicking motion breaks the adhesive bond between the practitioner's palm and the dirty bioplasmic threads, using kinetic force to deposit them in the salt medium."
    }
  },
  {
    id: 10,
    title: "Drawing Life Force",
    module: "The Projector",
    duration: "3.5 mins",
    description: "Learn to absorb prana from the atmosphere through deep rhythmic breathing to build a high charge of healing energy.",
    concept: [
      "Before you can safely channel energy to heal another part, you must have an abundance of prana. If you try to heal when you are depleted, you will drain your own vital energy, leaving you exhausted.",
      "The primary source of vital energy is the atmosphere, known as air prana. We can absorb a tremendous volume of air prana using deep, rhythmic breathing.",
      "Rhythmic breathing expands the capacity of your energy centers (chakras), drawing currents of life force through your pores and palm gateways, storing it like a dynamic battery."
    ],
    exerciseTitle: "Deep Rhythmic Energizing",
    svgName: "drawing_prana",
    steps: [
      {
        text: "Sit comfortably, hands resting on knees with palms facing up, fingers curved.",
        duration: 30,
        audioCue: "Sit comfortably, hands resting on your knees, palms facing up, and fingers loose. Relax your breath and settle."
      },
      {
        text: "Adopt 6-3-6-3 breath: Inhale 6s, hold 3s, exhale 6s, hold 3s.",
        duration: 90,
        audioCue: "Begin the rhythmic six-three-six-three breath. Inhale slowly for six seconds... hold the breath in for three seconds... exhale slowly for six seconds... and hold the breath empty for three seconds. Let this rhythm become natural."
      },
      {
        text: "Visualize gold prana currents flowing into palm centers and throat chakra.",
        duration: 90,
        audioCue: "Maintain this breathing rhythm. As you inhale, visualize sparkling golden streams of life force flowing into the centers of your palms, breathing in prana through your hands. As you hold, let the energy store in your chest and solar plexus."
      }
    ],
    sourceText: {
      chapter: "Chapter 3: Elementary Pranic Healing",
      section: "Drawing Prana & Pranic Breathing",
      passages: [
        "To draw prana from the surrounding environment, sit comfortably and place your hands in a receptive posture. Focus your mind on breathing.",
        "Perform pranic breathing: inhale for six counts, hold the breath for three counts, exhale for six counts, and hold the breath empty for three counts. This rhythmic pattern stretches the energy body, causing it to absorb a vast quantity of air prana."
      ],
      evidenceNote: "Rhythmic breathing coordinates the physical and energetic expansion of the chest and solar plexus nodes. The 6-3-6-3 cycle acts like an energetic bellows, pulling in vital currents through the palm gateways and skin pores."
    }
  },
  {
    id: 11,
    title: "Projecting Healing Energy",
    module: "The Projector",
    duration: "3.5 mins",
    description: "Learn to channel your stored vital force down your arms and project it from your palms as a healing stream.",
    concept: [
      "Now that you have learned how to absorb prana, the final skill is Projection—safe, directed channeling.",
      "The core principle is two-way flow: you must absorb prana from the environment with one hand (your non-dominant gateway) and project it out of the other (your dominant gateway).",
      "This prevents you from depleting your own reserves. The healing prana simply flows through you like a pipeline, keeping your own physical body energized and completely safe."
    ],
    exerciseTitle: "Channeling & Ejection",
    svgName: "projecting_prana",
    steps: [
      {
        text: "Raise non-dominant hand up to absorb. Raise dominant hand forward to project.",
        duration: 45,
        audioCue: "Raise your non-dominant hand with palm facing outward to absorb. Raise your dominant hand forward with palm facing down, as if targeting an area to heal."
      },
      {
        text: "Start pranic breathing: draw gold prana into your receptive palm.",
        duration: 60,
        audioCue: "Establish your rhythmic pranic breath. With every inhalation, draw sparkling golden energy into your receptive palm, feeling it slide up your arm and pool in your chest."
      },
      {
        text: "Exhale: project a beam of bright white/gold healing light off dominant palm.",
        duration: 105,
        audioCue: "As you exhale, direct this pool of energy down your dominant arm and let it project out of your dominant palm as a warm, bright beam of healing light. Inhale to draw, exhale to project, letting the energy circulate safely."
      }
    ],
    sourceText: {
      chapter: "Chapter 3: Elementary Pranic Healing",
      section: "Projecting Prana",
      passages: [
        "To project prana, the practitioner draws prana through the left (or non-dominant) hand and projects it through the right (or dominant) hand.",
        "By maintaining this dual flow, the healer does not drain their own personal energy. The healer acts merely as a channel or a pipeline through which the universal healing life force flows."
      ],
      evidenceNote: "Channelling requires clear intention and physical relaxation. If the practitioner blocks the entry pathway, they will default to projecting their own personal vitality, resulting in post-healing exhaustion."
    }
  }
];

export const healingDirectory: HealingProtocol[] = [
  {
    id: "headache",
    name: "Tension Headache Relief",
    category: "Nervous",
    duration: "5.5 mins",
    diagnosis: "Severe, heavy pranic congestion in the front and back head chakras, temples, and cervical spine due to mental stress, tension, or fatigue.",
    steps: [
      {
        text: "Prepare your salt-water bowl and activate hand gateways (press and rub palms).",
        duration: 30,
        audioCue: "Prepare your salt-water bowl within easy reach. Actively press the centers of your palms and rub your hands together to wake up your gateways."
      },
      {
        text: "Scan your temples, crown, and back of the neck to locate the thickest congestion.",
        duration: 45,
        audioCue: "Slowly scan your temples, the crown of your head, and the back of your neck. Note the thick, warm, rubbery layers where energy is blocked."
      },
      {
        text: "Sweep downward over your temples and crown, flicking sticky energy into salt water.",
        duration: 90,
        audioCue: "Using slightly curved fingers like a comb, sweep downward over your temples and the top of your head, flicking your fingers sharply into the salt water at the end of each stroke. Repeat this, clearing the heavy gray clouds."
      },
      {
        text: "Sweep downward from the back of the head down the neck, flicking into salt water.",
        duration: 90,
        audioCue: "Now, sweep downward from the back of your head, down your neck, and off your shoulders. Flick the sticky residue into the salt water immediately. Feel the weight lifting from your head."
      },
      {
        text: "Project soothing, cooling light-blue prana into the forehead and temples.",
        duration: 45,
        audioCue: "Raise your hands. Project a gentle, cooling beam of light-blue prana into your forehead and temples to calm the nerves and soothe any residual throbbing."
      },
      {
        text: "Withdraw hands, perform general sweep, and wash hands with soap and water.",
        duration: 30,
        audioCue: "Lower your hands. Take one deep breath and physically wash your hands under running water to sever the energetic connection."
      }
    ],
    svgFlow: [
      "hand_gateways",
      "auric_boundary",
      "cleansing_cycle",
      "auric_sweeping",
      "projecting_prana",
      "cleansing_cycle"
    ],
    sourceText: {
      chapter: "Chapter 4: Basic Healing Protocols",
      section: "Self-Treatment for Tension Headaches",
      passages: [
        "Headaches are usually caused by an accumulation of congested energy in the head area, particularly the temples, forehead, and back of the head.",
        "To relieve, first apply thorough sweeping to the entire head, temples, and neck, throwing the dirty energy into a bowl of water and salt. This acts to instantly relieve the pressure. Afterwards, project a small amount of light-blue prana to soothe the nerves."
      ],
      evidenceNote: "Textbook protocol emphasizes that headaches require heavy cleansing (sweeping) first. Projecting prana into an un-cleansed headache will worsen the pain by inflating the existing congestion."
    }
  },
  {
    id: "fatigue",
    name: "Chronic Fatigue & Vitality Boost",
    category: "General",
    duration: "5 mins",
    diagnosis: "Severe pranic depletion and energy exhaustion in the solar plexus chakra and spine, manifesting as physical lethargy and mental fog.",
    steps: [
      {
        text: "Prepare salt bowl and rub palms to activate hand gateways.",
        duration: 30,
        audioCue: "Prepare your salt-water bowl and rub your palms together vigorously to activate your hand gateways."
      },
      {
        text: "Perform a general downward sweep of your entire body to clear dull energy.",
        duration: 60,
        audioCue: "Perform a general downward sweep. Sweep from the crown of your head, down your chest, down your legs, and flick into the salt bowl. Clear away the dull, heavy fatigue from your entire auric field."
      },
      {
        text: "Sit receptive and perform 6-3-6-3 pranic breathing to draw fresh gold prana.",
        duration: 90,
        audioCue: "Place your hands receptive on your knees, palms up. Begin your six-three-six-three pranic breathing. Inhale golden air prana through your palms and pores, storing it in your solar plexus."
      },
      {
        text: "Project a warm, vitalizing gold energy stream into your solar plexus chakra.",
        duration: 90,
        audioCue: "Raise your dominant hand, facing your upper abdomen. Project a warm, bright gold beam of prana into your solar plexus chakra to recharge your energetic battery and restore vital stamina."
      },
      {
        text: "Flick hands, perform one general sweep, and wash hands thoroughly.",
        duration: 30,
        audioCue: "Flick your hands, perform a quick general sweep to balance the energy, and physically wash your hands with soap and water."
      }
    ],
    svgFlow: [
      "hand_gateways",
      "auric_sweeping",
      "drawing_prana",
      "projecting_prana",
      "cleansing_cycle"
    ],
    sourceText: {
      chapter: "Chapter 4: Basic Healing Protocols",
      section: "Healing for Fatigue and Low Vitality",
      passages: [
        "Fatigue is the physical manifestation of a severely depleted bioplasmic field, primarily centered in the solar plexus chakra.",
        "First, apply general sweeping to clear the sluggish aura. Then, practice pranic breathing to build a massive surplus of vital force. Finally, project warm prana directly into the solar plexus chakra to energize the entire nervous system."
      ],
      evidenceNote: "Clearing sluggish, spent energy from the entire aura first is critical. Adding fresh prana to a tired, dirty aura is highly inefficient as the energy body cannot absorb it."
    }
  },
  {
    id: "sprain",
    name: "Muscle Sprain & Joint Stiffness",
    category: "Musculoskeletal",
    duration: "4.5 mins",
    diagnosis: "Localized pranic congestion, energetic blockage, and heat/inflammation at the site of the injured muscle fibers or stiff joint.",
    steps: [
      {
        text: "Prepare salt-water bowl and sensitize palm gateways.",
        duration: 30,
        audioCue: "Place your salt-water bowl nearby. Vigorously rub your palms to sensitize your hand gateways."
      },
      {
        text: "Scan the stiff joint or sprain, noting the boundaries and heat levels.",
        duration: 45,
        audioCue: "Slowly scan the sprained joint or stiff muscle. Note the thick rubbery congestion, heat, or swollen energetic boundary surrounding the injury."
      },
      {
        text: "Sweep downward over the injury 15 times, flicking sticky waste into salt bowl.",
        duration: 90,
        audioCue: "Sweep downward over the injured area, drawing the hot, sticky, stagnant energy out. Flick it sharply into the salt water at the end of each stroke. Combing it clean."
      },
      {
        text: "Project cooling, soothing light-blue prana into the sprain to reduce heat.",
        duration: 75,
        audioCue: "Project a soothing, cooling stream of light-blue prana directly into the sprain. Blue energy acts to reduce inflammation, cool down localized heat, and accelerate cellular recovery."
      },
      {
        text: "Withdraw hands and wash with cold water and physical salt.",
        duration: 30,
        audioCue: "Withdraw your hands and wash them immediately with cold running water and salt to dissolve any residual adhesive energy."
      }
    ],
    svgFlow: [
      "hand_gateways",
      "auric_boundary",
      "auric_sweeping",
      "projecting_prana",
      "cleansing_cycle"
    ],
    sourceText: {
      chapter: "Chapter 5: Specific Physical Protocols",
      section: "Self-Healing for Musculoskeletal Injuries",
      passages: [
        "Sprains and muscle strains result in localized congestion of dirty, stagnant energy. This manifests physically as swelling, stiffness, and pain.",
        "Apply local sweeping on the affected area 15 to 20 times. This reduces the swelling immediately. Next, energize with light-blue prana to soothe the pain and calm the inflamed tissues."
      ],
      evidenceNote: "The textbook prescribes sweeping 15-20 times locally for sprains because swelling is a physical protrusion of congested energy. Removing this energy is what physically allows fluid and blood flow to normalize."
    }
  },
  {
    id: "digestive",
    name: "Digestive Discomfort & Indigestion",
    category: "Gastrointestinal",
    duration: "5 mins",
    diagnosis: "Heavy pranic congestion or depletion of the solar plexus and stomach chakras, often caused by mental anxiety, stress, or eating in a hurry.",
    steps: [
      {
        text: "Prepare salt bowl and activate palm gateways.",
        duration: 30,
        audioCue: "Prepare your salt-water bowl and rub your palms together to activate your gateways."
      },
      {
        text: "Scan the front and back solar plexus and stomach area for blockages.",
        duration: 45,
        audioCue: "Slowly scan the front of your upper abdomen and stomach. Note if the field feels dense and rubbery or hollow and cold."
      },
      {
        text: "Sweep downward over the upper abdomen 15 times, flicking into salt water.",
        duration: 90,
        audioCue: "Thoroughly sweep downward over your solar plexus and stomach area. Flick the sticky, sluggish energy sharply into the salt-water bowl, releasing all trapped physical tension."
      },
      {
        text: "Project soothing light-green and light-blue prana into the stomach.",
        duration: 105,
        audioCue: "Project a warm, soothing stream of light-green, followed by light-blue prana, into your stomach. This has a highly relaxing, antispasmodic effect on the digestive tract."
      },
      {
        text: "Lower hands and wash thoroughly with cold water.",
        duration: 30,
        audioCue: "Lower your hands, take a slow deep breath, and physically wash your hands with soap and water."
      }
    ],
    svgFlow: [
      "hand_gateways",
      "auric_boundary",
      "auric_sweeping",
      "projecting_prana",
      "cleansing_cycle"
    ],
    sourceText: {
      chapter: "Chapter 5: Specific Physical Protocols",
      section: "Self-Healing for Indigestion and Stomach Pain",
      passages: [
        "The stomach is deeply connected to the solar plexus chakra, which easily congests with negative stress and digestive blockages.",
        "Apply local sweeping to the solar plexus and stomach. Sweeping acts to clear the emotional stress and physical block. Energize the stomach with soothing light-green and light-blue prana to regulate digestive secretions."
      ],
      evidenceNote: "Indigestion frequently responds instantly to solar plexus sweeping because it discharges emotional strain (stress energy) that causes physical stomach spasms."
    }
  },
  {
    id: "fever",
    name: "Fever & Inflammation Cooling",
    category: "General",
    duration: "5.5 mins",
    diagnosis: "Generalized energetic congestion and severe over-activation of the basic energy center, leading to an excess of hot pranic thermal charge in the blood and physical body.",
    steps: [
      {
        text: "Prepare salt-water bowl and rub palms to activate hand gateways.",
        duration: 30,
        audioCue: "Prepare your salt bowl and rub your palms together to activate your palm gateways."
      },
      {
        text: "Scan your body's general temperature and the lower basic chakra.",
        duration: 45,
        audioCue: "Scan the general temperature of your forehead and lower torso. Note the warm, hyperactive radiating thermal field."
      },
      {
        text: "Perform a general downward sweep of your entire body to discharge fever heat.",
        duration: 90,
        audioCue: "Perform a general downward sweep of your entire body, from head to toe, sweeping downward only. Flick the hot, congested energy into the salt bowl. Repeat this 15 times to lower the fever."
      },
      {
        text: "Thoroughly sweep the solar plexus and lungs downward to clear excess heat.",
        duration: 60,
        audioCue: "Thoroughly sweep downward over your solar plexus and chest. Flick the heavy, hot energy into the salt bowl. This clears congestion in the emotional and respiratory centers."
      },
      {
        text: "Project cooling light-blue prana into the solar plexus to cool the blood.",
        duration: 75,
        audioCue: "Project a cooling stream of light-blue prana into your solar plexus chakra. Blue energy has a cooling, calming effect, acting like an energetic sponge that lowers body heat and blood temperature."
      },
      {
        text: "Withdraw hands, perform one general sweep, and wash hands immediately.",
        duration: 30,
        audioCue: "Withdraw your hands. Perform a final general sweep, and physically wash your hands with soap and cold water."
      }
    ],
    svgFlow: [
      "hand_gateways",
      "auric_boundary",
      "auric_sweeping",
      "auric_sweeping",
      "projecting_prana",
      "cleansing_cycle"
    ],
    sourceText: {
      chapter: "Chapter 5: Specific Physical Protocols",
      section: "Self-Healing for Fever",
      passages: [
        "Fever is caused by an over-activation of the basic chakra, which controls the body's physical thermal systems.",
        "Apply general sweeping to the whole body 10 to 15 times to disperse the heat. Next, apply thorough sweeping to the solar plexus chakra. Project light-blue prana into the solar plexus to cool the body and blood."
      ],
      evidenceNote: "Projecting blue prana (which is cold/cooling) directly into the solar plexus acts like an energetic cooling tower, distributing cold energy throughout the entire blood circulatory system, lowering fever."
    }
  }
];

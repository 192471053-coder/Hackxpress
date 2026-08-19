const eventDateLabel = "September 30th";

/**
 * HACKXPRESS - Central Editable Content & Configuration Architecture
 * Organizers can edit dates, fees, prize amounts, registration URLs, team details,
 * and FAQs here without touching any visual or animation logic.
 */

export const hackxpressConfig = {
  contactEmail: "hackxpress.simats@gmail.com",

  eventMeta: {
    title: "HACKXPRESS",
    subtitle: "TAMIL NADU'S FIRST TRAIN HACKATHON",
    tagline: "WHERE INNOVATION MEETS THE JOURNEY",
    route: "EGMORE, CHENNAI → PONDICHERRY",
    subTagline: "ONE TRAIN • ONE JOURNEY • ENDLESS IDEAS",
    // EDITABLE FIELDS BELOW:
    eventDate: "2026-09-30T00:00:00+05:30",
    eventDateLabel,
    registrationFee: "[ADD FEE]",
    registrationUrl: "https://forms.gle/93meyStqPx67kUvc8",
    teamSize: "[ADD FINAL TEAM SIZE]",
    priorExperienceRequired: "[YES/NO]",
  },

  details: [
    { label: "Event", value: "HACKXPRESS" },
    { label: "Format", value: "Train Hackathon" },
    { label: "Start Location", value: "Egmore, Chennai" },
    { label: "Destination", value: "Pondicherry" },
    { label: "Venue", value: "Moving Train" },
    { label: "Participation", value: "Individual / Team" },
    { label: "Date", value: eventDateLabel, editable: true },
    { label: "Registration Fee", value: "[ADD FEE]", editable: true },
  ],

  experience: {
    heading: "NOT YOUR ORDINARY HACKATHON",
    description: "HACKXPRESS takes innovation out of conventional venues and puts it on the move. Travel from Egmore to Pondicherry while collaborating, building, experimenting and pitching innovative solutions.",
    cards: [
      {
        title: "HACK ON THE MOVE",
        description: "Build your solution while travelling aboard a train.",
        icon: "Train",
        contextPhrase: "BUILD WHILE TRAVELLING"
      },
      {
        title: "REAL-WORLD INNOVATION",
        description: "Solve meaningful problems using technology and creativity.",
        icon: "Cpu",
        contextPhrase: "SOLVE REAL PROBLEMS"
      },
      {
        title: "COLLABORATE",
        description: "Meet students, developers, designers and innovators.",
        icon: "Users",
        contextPhrase: "MEET & COLLABORATE"
      },
      {
        title: "JOURNEY TO PONDICHERRY",
        description: "A hackathon experience unlike anything you've experienced before.",
        icon: "Compass",
        contextPhrase: "COMPLETE YOUR JOURNEY"
      }
    ]
  },

  concept: {
    heading: "ONE TRAIN. ONE JOURNEY. ONE CHALLENGE.",
    tagline: "THE JOURNEY IS YOUR WORKSPACE.",
    routeStations: [
      { code: "EGM", name: "EGMORE", description: "Journey Commences at Chennai Egmore Station" },
      { code: "IDE", name: "IDEATE", description: "Brainstorming and Concept Validation on Rails" },
      { code: "BLD", name: "BUILD", description: "Rapid Prototyping in High-Speed Motion" },
      { code: "COL", name: "COLLABORATE", description: "Cross-Domain Synergy & Peer Reviews" },
      { code: "INV", name: "INNOVATE", description: "Refining Mechanics & Pitch Polish" },
      { code: "PTC", name: "PITCH", description: "Live Jury Evaluation in Transit" },
      { code: "PDY", name: "PONDICHERRY", description: "Final Destination & Award Ceremony" }
    ]
  },

  domains: {
    heading: "WHAT WILL YOU HACK?",
    list: [
      {
        id: "ai-ml",
        name: "Artificial Intelligence & Machine Learning",
        symbol: "🚀",
        context: "Explore intelligent systems, machine learning models and AI-powered solutions for real-world challenges.",
        possibleAreas: [
          "intelligent systems",
          "machine learning models",
          "AI-powered solutions"
        ],
        closingIdea: "EXPLORE INTELLIGENT SOLUTIONS →"
      },
      {
        id: "iot",
        name: "Internet of Things (IoT)",
        symbol: "🛡️",
        context: "Explore connected devices, sensors and real-time systems that interact with the physical world.",
        possibleAreas: [
          "connected devices",
          "sensors",
          "real-time systems"
        ],
        closingIdea: "CONNECT THE PHYSICAL WORLD →"
      },
      {
        id: "web-app",
        name: "Web & App Development",
        symbol: "♿",
        context: "Build useful web and mobile experiences that solve practical problems through modern application development.",
        possibleAreas: [
          "web experiences",
          "mobile applications",
          "practical solutions"
        ],
        closingIdea: "BUILD USEFUL EXPERIENCES →"
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        symbol: "♻️",
        context: "Explore technologies and strategies for protecting systems, networks, applications and data.",
        possibleAreas: [
          "system protection",
          "network security",
          "data protection"
        ],
        closingIdea: "PROTECT CONNECTED SYSTEMS →"
      },
      {
        id: "data-science",
        name: "Data Science & Analytics",
        symbol: "⚡",
        context: "Turn data into useful insights through analytics, visualization, statistical methods and predictive approaches.",
        possibleAreas: [
          "analytics",
          "visualization",
          "predictive approaches"
        ],
        closingIdea: "TURN DATA INTO INSIGHT →"
      },
      {
        id: "cloud",
        name: "Cloud Computing",
        symbol: "📡",
        context: "Explore scalable applications, cloud infrastructure, distributed systems and cloud-powered solutions.",
        possibleAreas: [
          "scalable applications",
          "cloud infrastructure",
          "distributed systems"
        ],
        closingIdea: "SCALE YOUR SOLUTION →"
      },
      {
        id: "robotics",
        name: "Robotics & Automation",
        symbol: "🤖",
        context: "Build intelligent automated systems that combine software, hardware, sensing and control.",
        possibleAreas: [
          "intelligent systems",
          "sensing and control",
          "automated hardware"
        ],
        closingIdea: "AUTOMATE WITH INTELLIGENCE →"
      },
      {
        id: "embedded",
        name: "Embedded Systems",
        symbol: "✨",
        context: "Develop technology-driven solutions using embedded hardware, microcontrollers and intelligent devices.",
        possibleAreas: [
          "embedded hardware",
          "microcontrollers",
          "intelligent devices"
        ],
        closingIdea: "BUILD INTELLIGENT DEVICES →"
      },
      {
        id: "computer-vision",
        name: "Computer Vision",
        symbol: "👁️",
        context: "Explore systems that understand and interpret images, video and visual information.",
        possibleAreas: [
          "image understanding",
          "video analysis",
          "visual information"
        ],
        closingIdea: "SEE PROBLEMS DIFFERENTLY →"
      },
      {
        id: "smart-mobility",
        name: "Smart Transportation & Mobility",
        symbol: "🚆",
        context: "Develop smarter ways to improve transportation, mobility, routing and movement of people and resources.",
        possibleAreas: [
          "transportation",
          "mobility",
          "routing and movement"
        ],
        closingIdea: "MOVE PEOPLE AND RESOURCES SMARTER →"
      },
      {
        id: "railway-safety",
        name: "Railway Safety & Security",
        symbol: "🛡️",
        context: "Explore technology that can improve railway safety, monitoring, security and incident awareness.",
        possibleAreas: [
          "railway safety",
          "monitoring",
          "incident awareness"
        ],
        closingIdea: "MAKE RAILWAYS SAFER →"
      },
      {
        id: "predictive-maintenance",
        name: "Predictive Maintenance",
        symbol: "🔧",
        context: "Use technology, sensors and data-driven approaches to identify potential equipment or system problems before failure.",
        possibleAreas: [
          "sensors",
          "data-driven monitoring",
          "early problem detection"
        ],
        closingIdea: "ANTICIPATE SYSTEM PROBLEMS →"
      },
      {
        id: "passenger-experience",
        name: "Passenger Experience & Accessibility",
        symbol: "♿",
        context: "Create inclusive and intelligent solutions that make travel more convenient, accessible and user-friendly.",
        possibleAreas: [
          "inclusive solutions",
          "accessible travel",
          "user-friendly experiences"
        ],
        closingIdea: "DESIGN BETTER TRAVEL EXPERIENCES →"
      },
      {
        id: "sustainable-tech",
        name: "Sustainable Technology",
        symbol: "♻️",
        context: "Explore technology that reduces environmental impact and supports efficient and sustainable systems.",
        possibleAreas: [
          "environmental impact",
          "efficient systems",
          "sustainable technology"
        ],
        closingIdea: "BUILD FOR A SUSTAINABLE FUTURE →"
      },
      {
        id: "energy-power",
        name: "Energy & Power Management",
        symbol: "⚡",
        context: "Develop smarter ways to monitor, optimize and manage energy and power consumption.",
        possibleAreas: [
          "energy monitoring",
          "power optimization",
          "consumption management"
        ],
        closingIdea: "MANAGE POWER MORE SMARTLY →"
      }
    ]
  },

  branding: {
    organizerName: "SIMATS Engineering",
    organizerLogo: "/assets/simats-engineering-logo.png"
  },

  phases: {
    heading: "EVENT PHASES",
    list: [
      {
        number: "01",
        title: "REGISTRATION",
        desc: "Register individually or as a team through the official Google Form."
      },
      {
        number: "02",
        title: "BOARDING",
        desc: "Report at Egmore, Chennai and get ready for the journey."
      },
      {
        number: "03",
        title: "CHALLENGE REVEAL",
        desc: "Problem statements and hackathon instructions are announced."
      },
      {
        number: "04",
        title: "THE HACK",
        desc: "Ideas become prototypes as the train travels towards Pondicherry."
      },
      {
        number: "05",
        title: "FINAL PITCH",
        desc: "Present your solution to the jury."
      },
      {
        number: "06",
        title: "GRAND FINALE",
        desc: "Reach Pondicherry with your idea, your team and your achievement."
      }
    ]
  },

  prizes: {
    heading: "BUILD. PITCH. WIN.",
    mainPrizes: [
      {
        rank: "1ST PRIZE",
        amount: "₹10,000",
        perks: ["Trophy", "Certificate"],
        highlight: true
      },
      {
        rank: "2ND PRIZE",
        amount: "₹5,000",
        perks: ["Certificate"],
        highlight: false
      },
      {
        rank: "3RD PRIZE",
        amount: "₹2,000",
        perks: ["Certificate"],
        highlight: false
      }
    ],
    specialAwards: []
  },

  jury: {
    heading: "EXPERT JURY",
    announcementMessage: "JURY ANNOUNCEMENT COMING SOON",
    confirmedJury: []
  },

  team: {
    heading: "ORGANIZING TEAM",
    facultyConvenors: [
      { name: "Dr. V. K. Gnanavel", title: "Professor" },
      { name: "Dr. K. Vijayabhaskar", title: "Professor" },
      { name: "Dr. C. Sivasankar", title: "Professor" }
    ],
    studentConvenor: {
      name: "Logeshwari S",
      phone: "8148318819"
    }
  },

  rules: {
    heading: "RULES & GUIDELINES",
    items: [
      { title: "Eligibility", text: "Open to students, developers, designers, innovators, and technology enthusiasts who register before the deadline." },
      { title: "Team Size", text: "Participants may apply individually or in teams as specified in the official registration guidelines." },
      { title: "Registration", text: "All registrations must be submitted through the official Google Form link. Seats are limited due to train capacity." },
      { title: "Project Originality", text: "All code and designs must be created during the hackathon journey. Pre-existing projects will be disqualified." },
      { title: "Technology Usage", text: "Teams are free to use any frameworks, open-source APIs, cloud tools, or AI models." },
      { title: "Submission Rules", text: "Final code repositories, presentation decks, and demo videos must be submitted before train arrival." },
      { title: "Pitching Rules", text: "Each team will present a live demo to the jury panel within the allotted pitch duration." },
      { title: "Judging Criteria", text: "Evaluated on Innovation, Technical Execution, Feasibility, Impact, and Presentation." },
      { title: "Train Safety", text: "Strict adherence to railway authority regulations and safety protocols is required at all times." },
      { title: "Code of Conduct", text: "Professionalism, respectful collaboration, and fair play are mandatory." },
      { title: "Disqualification", text: "Violation of safety guidelines, plagiarism, or unapproved behavior will result in instant disqualification." }
    ]
  },

  safety: {
    heading: "TRAVEL & SAFETY INSTRUCTIONS",
    instructions: [
      "Follow railway instructions.",
      "Carry valid ID.",
      "Stay with your team.",
      "Do not enter restricted areas.",
      "Take responsibility for personal belongings.",
      "Keep emergency contact information available.",
      "Follow instructions from the organizing team."
    ]
  },

  faq: {
    heading: "FREQUENTLY ASKED QUESTIONS",
    items: [
      {
        q: "Who can participate?",
        a: "Students, developers, designers, innovators and technology enthusiasts, subject to the eligibility criteria."
      },
      {
        q: "Where does HACKXPRESS start?",
        a: "Egmore, Chennai."
      },
      {
        q: "Where does the journey end?",
        a: "Pondicherry."
      },
      {
        q: "Where will the hackathon take place?",
        a: "Aboard the train during the journey."
      },
      {
        q: "What is the team size?",
        a: "[ADD FINAL TEAM SIZE]"
      },
      {
        q: "Is prior hackathon experience required?",
        a: "[YES/NO]"
      },
      {
        q: "What should I bring?",
        a: "Laptop, charger, college ID and project requirements."
      },
      {
        q: "How do I register?",
        a: "Click REGISTER NOW and complete the official Google Form."
      }
    ]
  },

  finalCta: {
    heading: "THE TRAIN IS READY.",
    subheading: "ARE YOU READY TO HACK?",
    routeText: "EGMORE → PONDICHERRY",
    tagline: "YOUR IDEA. YOUR TEAM. YOUR JOURNEY."
  },

  footer: {
    copyright: "© 2026 HACKXPRESS. All Rights Reserved.",
    navLinks: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#experience" },
      { name: "Concept", href: "#concept" },
      { name: "Challenges", href: "#challenges" },
      { name: "Timeline", href: "#phases" },
      { name: "Prizes", href: "#prizes" },
      { name: "Jury", href: "#jury" },
      { name: "FAQ", href: "#faq" },
      { name: "Rules", href: "#rules" }
    ]
  }
};

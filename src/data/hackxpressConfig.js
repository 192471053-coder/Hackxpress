/**
 * HACKXPRESS - Central Editable Content & Configuration Architecture
 * Organizers can edit dates, fees, prize amounts, registration URLs, team details,
 * and FAQs here without touching any visual or animation logic.
 */

export const hackxpressConfig = {
  eventMeta: {
    title: "HACKXPRESS",
    subtitle: "TAMIL NADU'S FIRST TRAIN HACKATHON",
    tagline: "WHERE INNOVATION MEETS THE JOURNEY",
    route: "EGMORE, CHENNAI → PONDICHERRY",
    subTagline: "ONE TRAIN • ONE JOURNEY • ENDLESS IDEAS",
    // EDITABLE FIELDS BELOW:
    eventDate: "[ADD DATE]", // Set ISO string or human date e.g. "October 24, 2026" for countdown
    registrationFee: "[ADD FEE]",
    registrationUrl: "https://forms.google.com", // Official Google Form URL placeholder
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
    { label: "Date", value: "[ADD DATE]", editable: true },
    { label: "Registration Fee", value: "[ADD FEE]", editable: true },
  ],

  experience: {
    heading: "NOT YOUR ORDINARY HACKATHON",
    description: "HACKXPRESS takes innovation out of conventional venues and puts it on the move. Travel from Egmore to Pondicherry while collaborating, building, experimenting and pitching innovative solutions.",
    cards: [
      {
        title: "HACK ON THE MOVE",
        description: "Build your solution while travelling aboard a train.",
        icon: "Train"
      },
      {
        title: "REAL-WORLD INNOVATION",
        description: "Solve meaningful problems using technology and creativity.",
        icon: "Cpu"
      },
      {
        title: "COLLABORATE",
        description: "Meet students, developers, designers and innovators.",
        icon: "Users"
      },
      {
        title: "JOURNEY TO PONDICHERRY",
        description: "A hackathon experience unlike anything you've experienced before.",
        icon: "Compass"
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
        id: "trans",
        name: "Smart Transportation",
        symbol: "🚀",
        context: "Explore technology that can make railway and public transportation smarter, faster and more efficient.",
        possibleAreas: [
          "intelligent route optimization",
          "predictive transportation systems",
          "real-time movement tracking",
          "smart scheduling",
          "traffic and mobility optimization",
          "AI-powered transportation management"
        ],
        closingIdea: "Think smarter mobility. Build better journeys."
      },
      {
        id: "safe",
        name: "Passenger Safety",
        symbol: "🛡️",
        context: "Explore solutions that improve passenger safety and help identify, prevent or respond to risks during railway travel.",
        possibleAreas: [
          "emergency detection",
          "intelligent monitoring",
          "incident alerts",
          "crowd safety",
          "risk prediction",
          "AI-assisted safety systems"
        ],
        closingIdea: "Make every journey safer."
      },
      {
        id: "access",
        name: "Accessibility",
        symbol: "♿",
        context: "Explore technology that makes railway travel more inclusive and accessible for people with different abilities and needs.",
        possibleAreas: [
          "accessibility assistance",
          "navigation support",
          "inclusive interfaces",
          "real-time assistance",
          "accessibility information",
          "assistive technologies"
        ],
        closingIdea: "Design journeys that work for everyone."
      },
      {
        id: "waste",
        name: "Waste Management",
        symbol: "♻️",
        context: "Explore smarter ways to monitor, reduce, collect and manage waste during railway journeys.",
        possibleAreas: [
          "smart waste monitoring",
          "waste classification",
          "collection optimization",
          "recycling systems",
          "waste prediction",
          "resource-efficient solutions"
        ],
        closingIdea: "Turn better waste management into a better journey."
      },
      {
        id: "energy",
        name: "Energy & Efficiency",
        symbol: "⚡",
        context: "Explore solutions that help railway systems use energy and resources more efficiently.",
        possibleAreas: [
          "energy monitoring",
          "intelligent power management",
          "predictive optimization",
          "resource conservation",
          "efficient railway operations",
          "AI-powered energy management"
        ],
        closingIdea: "Use less. Optimize more."
      },
      {
        id: "connect",
        name: "Connectivity",
        symbol: "📡",
        context: "Explore ways technology can improve communication, connectivity and information flow during railway journeys.",
        possibleAreas: [
          "passenger connectivity",
          "real-time information systems",
          "communication infrastructure",
          "intelligent networking",
          "location-based services",
          "connected railway systems"
        ],
        closingIdea: "Connect people, systems and journeys."
      },
      {
        id: "ai",
        name: "AI & Automation",
        symbol: "🤖",
        context: "Explore how artificial intelligence and automation can transform railway operations and passenger experiences.",
        possibleAreas: [
          "predictive AI",
          "intelligent assistants",
          "automated monitoring",
          "computer vision",
          "machine learning",
          "autonomous decision support"
        ],
        closingIdea: "Teach the journey to think smarter."
      },
      {
        id: "exp",
        name: "Passenger Experience",
        symbol: "✨",
        context: "Explore technology that makes railway journeys more convenient, engaging, personalized and enjoyable.",
        possibleAreas: [
          "personalized travel experiences",
          "intelligent assistance",
          "passenger information",
          "entertainment",
          "journey personalization",
          "smart onboard services"
        ],
        closingIdea: "Turn travel time into experience time."
      }
    ]
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
        rank: "GRAND WINNER",
        amount: "[PRIZE AMOUNT]",
        perks: ["Trophy", "Certificate"],
        highlight: true
      },
      {
        rank: "RUNNER-UP",
        amount: "[PRIZE AMOUNT]",
        perks: ["Certificate"],
        highlight: false
      },
      {
        rank: "SECOND RUNNER-UP",
        amount: "[PRIZE AMOUNT]",
        perks: ["Certificate"],
        highlight: false
      }
    ],
    specialAwards: [
      "Best Innovation",
      "Best AI Solution",
      "Best Transportation Solution",
      "Most Creative Idea",
      "Best UI/UX"
    ]
  },

  jury: {
    heading: "EXPERT JURY",
    announcementMessage: "JURY ANNOUNCEMENT COMING SOON",
    confirmedJury: []
  },

  sponsors: {
    heading: "SPONSORS & PARTNERS",
    categories: [
      { name: "Title Sponsor", items: [{ name: "Sponsor Partner", logo: null }] },
      { name: "Technology Partner", items: [{ name: "Tech Partner", logo: null }] },
      { name: "Education Partner", items: [{ name: "Edu Partner", logo: null }] },
      { name: "Travel/Logistics Partner", items: [{ name: "Logistics Partner", logo: null }] },
      { name: "Media Partner", items: [{ name: "Media Partner", logo: null }] },
      { name: "Community Partner", items: [{ name: "Community Partner", logo: null }] }
    ]
  },

  team: {
    heading: "ORGANIZING TEAM",
    members: [
      { role: "Event Convenor", name: "[CONVENOR NAME]", social: { linkedin: "#", twitter: "#" } },
      { role: "Technical Head", name: "[TECH HEAD NAME]", social: { linkedin: "#", twitter: "#" } },
      { role: "Operations Head", name: "[OPERATIONS HEAD]", social: { linkedin: "#", twitter: "#" } },
      { role: "Marketing Head", name: "[MARKETING HEAD]", social: { linkedin: "#", twitter: "#" } },
      { role: "Logistics Head", name: "[LOGISTICS HEAD]", social: { linkedin: "#", twitter: "#" } },
      { role: "Design & Media", name: "[DESIGN LEAD]", social: { linkedin: "#", twitter: "#" } }
    ]
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
      { name: "Sponsors", href: "#sponsors" },
      { name: "FAQ", href: "#faq" },
      { name: "Rules", href: "#rules" }
    ]
  }
};

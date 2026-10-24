export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem?: string;
  solution?: string;
  technology: string[];
  category: string[];
  impact?: string;
  recognition?: string;
  links: {
    github?: string;
    website?: string;
    googlePlay?: string;
    devpost?: string;
    external?: string;
  };
  image?: string;
  featured: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    id: "ecomont",
    title: "EcoMont",
    subtitle: "Technology for measurable environmental action.",
    description:
      "EcoMont is a civic-tech platform designed to connect citizens, institutions and environmental data through digital tools, IoT infrastructure and measurable sustainability actions.",
    problem:
      "Environmental participation is fragmented, data is scattered, citizen engagement lacks measurement, and connections between citizens and institutions are weak.",
    solution:
      "A comprehensive civic-tech platform that bridges citizens, institutions, and environmental data through integrated digital tools and IoT infrastructure.",
    technology: [
      "Flutter",
      "Dart",
      "IoT",
      "AI",
      "Civic Technology",
      "Environmental Monitoring",
      "Smart Cities",
    ],
    category: ["Civic Tech", "IoT", "AI", "Mobile", "Smart Cities"],
    impact:
      "Selected into Project Earth, presented at Royal Institution (Pitch for the Planet), national government support, development toward pilot deployment in Montenegro.",
    recognition: "Project Earth · Royal Institution · Youth Innovation",
    links: {
      github: "https://github.com/andrijadjurovic/ecomont",
      website: "https://projectearth.global/student-ambassador/andrija-djurovic/",
    },
    featured: true,
    year: "2025–present",
  },
  {
    id: "cetinet",
    title: "CetiNET",
    subtitle: "A youth-built Smart City platform connected to real infrastructure.",
    description:
      "A Smart City platform developed in connection with the Youth4Smart Cetinje initiative, connecting citizens to live IoT infrastructure and real-time environmental data.",
    technology: [
      "Flutter",
      "REST APIs",
      "IoT",
      "LoRaWAN",
      "Environmental Monitoring",
      "Smart Waste Management",
    ],
    category: ["Smart Cities", "IoT", "Mobile"],
    recognition: "WSIS Champion Project 2026 — E-Environment",
    links: {
      github: "https://github.com/andrijadjurovic/cetinet",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.cetinet.app",
    },
    featured: true,
    year: "2025–present",
  },
  {
    id: "embero",
    title: "Embero",
    subtitle: "AI-assisted wildfire detection and response.",
    description:
      "Developed through the USAII Global AI Hackathon 2026. An integrated system combining IoT sensors, drone networks, computer vision, and edge AI for wildfire detection and spread prediction.",
    technology: [
      "IoT Sensors",
      "Drone Networks",
      "Computer Vision",
      "AI",
      "LoRaWAN",
      "Edge AI",
      "Satellite Communications",
    ],
    category: ["AI", "IoT", "Research"],
    recognition:
      "#1 High School AI Readiness Qualifier · Global Top 10 Finalist",
    links: {
      github: "https://github.com/andrijadjurovic/embero",
      devpost: "https://devpost.com/software/embero",
    },
    featured: true,
    year: "2026",
  },
  {
    id: "neurotrack",
    title: "NeuroTrack",
    subtitle: "Digital health software designed around longitudinal patient data.",
    description:
      "A research/project prototype developed during the Prona Winter School of Science, designed for symptom tracking, medication management, and clinician-facing analytics.",
    technology: [
      "Flutter",
      "Firebase",
      "Digital Health",
      "Data Analytics",
    ],
    category: ["Research", "Mobile", "Digital Health"],
    links: {
      github: "https://github.com/andrijadjurovic/neurotrack",
    },
    featured: false,
    year: "2026",
  },
  {
    id: "ets-me",
    title: "ETS.me",
    subtitle: "Student-led digital infrastructure for ETŠ 'Vaso Aligrudić'.",
    description:
      "Official school mobile application featuring admissions guides, school news, schedule integration, push notifications, and an AI-powered student FAQ chatbot. Developed by a 5-student team.",
    technology: ["Flutter", "Firebase", "Push Notifications", "Chatbot"],
    category: ["Mobile", "Education"],
    links: {
      github: "https://github.com/andrijadjurovic/ets-me",
    },
    featured: false,
    year: "2025–2026",
  },
  {
    id: "digitalna-riznica",
    title: "Srbi u Crnoj Gori — Digitalna riznica",
    subtitle: "Digital preservation of cultural heritage, history and tradition.",
    description:
      "A digital preservation project focused on cultural heritage, history, tradition, language/script, and archival material—bridging technology with cultural legacy.",
    technology: ["Web Development", "Digital Preservation", "CMS"],
    category: ["Digital Heritage", "Cultural"],
    links: {},
    featured: false,
    year: "2025–present",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

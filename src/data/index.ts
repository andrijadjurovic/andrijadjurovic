export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "Software Development",
    skills: ["Flutter", "Dart", "Kotlin", "JavaScript", "Python", "C", "C++", "HTML", "CSS"],
  },
  {
    name: "Mobile Development",
    skills: ["Flutter", "Android", "iOS/Cross-platform", "REST API Integration"],
  },
  {
    name: "IoT & Embedded Systems",
    skills: [
      "Arduino",
      "IoT",
      "LoRaWAN",
      "Sensors",
      "Microcontrollers",
      "Smart City Systems",
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: ["Applied AI", "Computer Vision", "Edge AI", "AI-assisted Systems"],
  },
  {
    name: "3D & Engineering",
    skills: [
      "CAD",
      "Siemens Solid Edge",
      "3D Modeling",
      "3D Printing",
      "FDM",
      "SLA",
      "SLS",
      "Additive Manufacturing",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Android Studio", "VS Code", "Xcode", "Firebase"],
  },
];

export const researchInterests = [
  "Smart Cities",
  "IoT",
  "Environmental Monitoring",
  "Applied AI",
  "Digital Health",
  "Civic Technology",
  "Edge Computing",
  "Digital Infrastructure",
  "Additive Manufacturing",
];

export interface InternationalConnection {
  organization: string;
  involvement: string;
}

export const internationalConnections: InternationalConnection[] = [
  {
    organization: "Project Earth",
    involvement:
      "Student Ambassador and founder of EcoMont, selected for Project Earth and its Pitch for the Planet programme. Presented the environmental civic-tech platform at the Royal Institution in London and secured €7,000 in public grant funding for its development.",
  },
  {
    organization: "The Royal Institution",
    involvement:
      "Presented EcoMont at the Royal Institution's Pitch for the Planet before an international audience including Lord Martin Rees and Sir Richard Catlow. Sir Richard Catlow is exploring how the model could be adapted for university settings through academic networks.",
  },
  {
    organization: "UN / ITU",
    involvement:
      "CetiNET was recognized as a WSIS Champion Project 2026 in the e-Environment category. Invited to speak at Session 372 of the WSIS Forum in Geneva about youth-led digital transformation, civic-tech and environmental innovation.",
  },
  {
    organization: "BBC",
    involvement:
      "Mentored by Spencer Kelly of BBC Click, who has supported EcoMont and its international visibility. Kelly also provided a recommendation in support of the initiative.",
  },
  {
    organization: "Innovation Zero",
    involvement:
      "Developing EcoMont's environmental-impact campaign model for businesses and exploring opportunities to connect the project with Innovation Zero's impact-focused funding and innovation community.",
  },
  {
    organization: "Mayor of London",
    involvement:
      "Recommended by the Mayor's Office to pursue collaboration with the Greater London Authority, with potential engagement around London Climate Action Week.",
  },
  {
    organization: "University of Toronto / epiSTEMe Hub",
    involvement:
      "Worked with Dr Ivan Martinović, a University of Toronto-affiliated researcher and epiSTEMe Hub mentor, across PRONA workshops and the NeuroTrack research project. The Hub also recognized early contributions supporting Montenegro's science and technology hub.",
  },
  {
    organization: "UC Santa Cruz",
    involvement:
      "Exploring a potential 2027 opportunity through the university's CREST Student-Initiated Projects programme and a planned Project Earth event with UC Santa Cruz.",
  },
  {
    organization: "Imperial College London",
    involvement:
      "Exploring academic and research opportunities related to EcoMont through international science and innovation networks.",
  },
  {
    organization: "CERN",
    involvement:
      "Completed the CERN–Solvay Education Programme, including particle-physics modules and knowledge evaluation. Separately, exploratory conversations have connected EcoMont with CERN's Health, Safety and Environment community and CERN Festival network.",
  },
];

export const siteConfig = {
  url: "https://andrijadjurovic.vercel.app",
  name: "Andrija Đurović",
  nameAlternate: "Andrija Djurovic",
  title: "Student Developer & Young Innovator",
  description:
    "Founder of EcoMont and Project Earth Student Ambassador building civic-tech, IoT, smart-city and AI solutions with public impact in Montenegro and beyond.",
  location: "Podgorica, Montenegro",
  tagline:
    "I build technology that turns innovation into public impact across civic technology, AI, IoT and sustainability.",
  email: "djurovicandrija21@gmail.com",
  github: "https://github.com/andrijadjurovic",
  linkedin: "https://www.linkedin.com/in/andrijadjurovic/",
  projectEarth:
    "https://projectearth.global/student-ambassador/andrija-djurovic/",
  year: new Date().getFullYear(),
};

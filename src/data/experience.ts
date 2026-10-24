export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period: string;
  description?: string;
  type: "program" | "internship" | "education" | "competition";
}

export const experience: ExperienceItem[] = [
  {
    id: "school",
    title: "ETŠ 'Vaso Aligrudić'",
    organization: "ETŠ 'Vaso Aligrudić'",
    role: "Web & Mobile Development Student",
    period: "2024–2028",
    description:
      "Pursuing secondary education in web and mobile development, with coursework in programming, application design, software engineering fundamentals, and project-based digital technology.",
    type: "education",
  },
  {
    id: "podgorica-internship-2025",
    title: "Capital City of Podgorica",
    organization: "IT Department",
    role: "IT Department Intern",
    period: "July 2025",
    description:
      "Supported municipal IT operations through database and network maintenance, server configuration, Linux environment setup, and security protocol implementation.",
    type: "internship",
  },
  {
    id: "cern-solvay",
    title: "CERN-Solvay Education Programme",
    organization: "CERN",
    role: "Physics & Technology Education",
    period: "August 2025",
    description:
      "Completed modules in particle physics and knowledge evaluation, strengthening scientific understanding and research skills through the CERN-Solvay education programme.",
    type: "program",
  },
  {
    id: "prona-summer-2025",
    title: "Prona Summer School of Science",
    organization: "Prona",
    role: "Summer Research Program",
    period: "August 2025",
    description:
      "Built an Arduino-based aircraft prototype with a 3D-printed structure, aluminum base, and five motors, exploring embedded systems, practical engineering, and flight design.",
    type: "program",
  },
  {
    id: "3d-engineering-2025",
    title: "AI-Assisted Modeling and Additive Manufacturing",
    organization: "Tehnopolis · EU CODES Project",
    role: "Selected Participant",
    period: "November 2025",
    description:
      "Selected as one of 10 participants nationwide for intensive training in industrial design, AI-assisted prototyping, and additive manufacturing. Worked through the product-development process from AI-supported digital concepts to physical 3D-printed prototypes.",
    type: "program",
  },
  {
    id: "prona-winter",
    title: "Prona Winter School of Science",
    organization: "Prona",
    role: "Electronics & Computing / Digital Health",
    period: "January–March 2026",
    description:
      "Developed and defended NeuroTrack, a digital-health platform for migraine management featuring medication reminders, symptom tracking, and clinician-facing analytics. The research project was completed with academic mentors and presented at the programme's final defense.",
    type: "program",
  },
  {
    id: "iot-robotics",
    title: "IoT & Robotics Intensive Program",
    organization: "PRONA / IoTiseja",
    role: "Selected Participant",
    period: "March 2–6, 2026",
    description:
      "Selected for an intensive practical programme developed with researchers from Inria. Gained hands-on experience programming microcontrollers, exploring IoT radio technologies, and operating small robotic systems with real devices.",
    type: "program",
  },
  {
    id: "ets-special-recognition-2026",
    title: "Special Award for Exceptional Institutional Contribution & Top 13 Student",
    organization: "ETŠ 'Vaso Aligrudić'",
    role: "Institutional Recognition",
    period: "June 2026",
    description:
      "Unanimously received the school's highest institutional distinction for contributions to technological innovation and representing Montenegro internationally, independently of the standard grading system. Selected among the school's 13 outstanding students for its 80th anniversary and the 20th anniversary of Montenegro's renewed independence. Featured as a leading student representative in the official school film and presented environmental innovations at a ceremony attended by the Minister of Education and the Mayor of Podgorica.",
    type: "competition",
  },
  {
    id: "usaii-embero-hackathon",
    title: "USAII Global AI Hackathon 2026 — Team Embero",
    organization: "USAII",
    role: "Co-founder & AI Systems Architect",
    period: "June–July 2026",
    description:
      "Placed first among 320 participants in the High School AI Readiness qualifying test with a score of 100/100. Co-developed Embero, a wildfire early-detection and response platform combining IoT stations, autonomous drones, computer vision, and AI-based spread prediction. Designed an early-warning approach using temperature, humidity, smoke, CO₂, and thermal imagery, and researched LoRaWAN, edge AI, satellite communications, and solar power for remote areas. Developed a national deployment model comparing coverage costs with annual wildfire losses. Evaluators praised the submission as 'ceiling-level' and highlighted its responsible-AI and human-oversight approach. Advanced to the global Top 10 after AI and industry-panel evaluation; hackathon ID: 783360216.",
    type: "competition",
  },
  {
    id: "3d-engineering-2026",
    title: "Specialist in Advanced 3D Engineering and Additive Manufacturing",
    organization: "Tehnopolis · TechLab",
    role: "3D Design & Manufacturing",
    period: "July 2026",
    description:
      "Developed professional 3D CAD skills in Siemens Solid Edge, including ordered and synchronous modeling, parametric configuration, technical documentation, and STL preparation. Practiced FDM, SLA, and SLS printing and post-processing, and prepared builds in Cura and PreForm.",
    type: "program",
  },
  {
    id: "podgorica-internship-2026",
    title: "Capital City of Podgorica",
    organization: "IT Department",
    role: "IT Department Intern",
    period: "July 2026",
    description:
      "Supported municipal IT operations with cloud and server infrastructure, network optimization, and localized system reviews.",
    type: "internship",
  },
  {
    id: "council-of-europe-policy",
    title: "Council of Europe Landscape Convention",
    organization: "Council of Europe",
    role: "Youth Public Policy Contributor",
    period: "July 2026–present",
    description:
      "Invited by the Convention Secretariat to contribute to a youth-led strategy on civic-tech infrastructure and AI for the 2027 programme of activities. The proposal is planned for consideration and distribution at the Conference of the Parties in Strasbourg in December 2026.",
    type: "program",
  },
  {
    id: "prona-summer-2026",
    title: "Prona Summer School of Science",
    organization: "Prona",
    role: "Summer Research Program",
    period: "August 2026",
    description:
      "Returned to the science school to present a scalable civic-tech architecture focused on edge computing, environmental monitoring, and regional models for environmental data.",
    type: "program",
  },
  {
    id: "masterplan-policy-school",
    title: "MASTERplan Youth Policy School & Aktiviraj PG",
    organization: "MASTERplan / Aktiviraj PG",
    role: "Youth Policy School Participant",
    period: "September 2026",
    description:
      "Selected for the MASTERplan Youth Policy School and Aktiviraj PG initiative. Preparing EcoMont as an environmental-policy proposal for Podgorica, with the aim of exploring formal cooperation with the Capital City and integrating the initiative into local environmental planning.",
    type: "program",
  },
  {
    id: "moacg-youth-parliament",
    title: "Youth Network for Activism of Montenegro (MOACG)",
    organization: "MOACG / Assembly of the Capital City of Podgorica",
    role: "Youth Advocate & Official Member; Youth Parliament Delegate (one-year term)",
    period: "October 2026–present",
    description:
      "Selected to represent young people in the Youth Parliament of the Assembly of the Capital City of Podgorica for a one-year term, contributing recommendations across nine youth-policy areas. Presented EcoMont during discussions on youth participation in sustainable development and raised the prospect of piloting digital tools for civic engagement. Engaged city representatives, including Assembly President Srđan Perić, to connect EcoMont with local environmental priorities and bring the initiative into the Assembly's process.",
    type: "program",
  },
  {
    id: "youth4smart",
    title: "Youth4Smart Cetinje",
    organization: "Youth4Smart Initiative",
    role: "Smart City / IoT Developer",
    period: "2025–present",
    description:
      "Selected among 20 students to develop a smart-city waste-management system using more than 10 IoT sensors and a public LoRaWAN network. Contributed to CetiNET, which connects residents and municipal services with live sensor data.",
    type: "program",
  },
  {
    id: "project-earth-founder",
    title: "Project Earth",
    organization: "Project Earth",
    role: "Founder / Lead Innovator — EcoMont",
    period: "2025–present",
    description:
      "Founded EcoMont, a civic-tech environmental platform combining IoT sensor networks, citizen engagement, and edge-AI data validation to support measurable environmental action. The initiative has secured public funding and progressed toward pilot deployment.",
    type: "program",
  },
  {
    id: "project-earth-ambassador",
    title: "Project Earth",
    organization: "Project Earth",
    role: "Student Ambassador",
    period: "2026–present",
    description:
      "Representing Project Earth through youth outreach and international engagement, helping raise visibility for youth-led climate innovation and environmental education.",
    type: "program",
  },
];

export interface Award {
  id: string;
  title: string;
  organization: string;
  category?: string;
  year?: string;
  description?: string;
}

export const awards: Award[] = [
  {
    id: "wsis-champion-2026",
    title: "WSIS Champion Project 2026",
    organization: "United Nations / International Telecommunication Union",
    category: "E-Environment",
    year: "2026",
  },
  {
    id: "smart-city-challenge",
    title: "Smart City Challenge 2025/26",
    organization: "National Competition",
    category: "National Runner-Up — 2nd Place",
    year: "2026",
  },
  {
    id: "usaii-hackathon",
    title: "USAII Global AI Hackathon 2026",
    organization: "USAII",
    category: "Global Top 10 Finalist",
    year: "2026",
  },
  {
    id: "olympiad-knowledge",
    title: "Olympiad of Knowledge",
    organization: "National",
    category: "Mathematics — Top 11 nationally",
    year: "2024–2025",
  },
  {
    id: "math-kangaroo",
    title: "Math Kangaroo",
    organization: "International Mathematics Competition",
    category: "Top 13 in Montenegro",
    year: "2024–2025",
  },
  {
    id: "logate-scholarships",
    title: "Logate Institute Scholarships",
    organization: "Logate Institute",
    category: "C++, Advanced C++, JavaScript",
    year: "2024–2025",
  },
  {
    id: "top-13-students",
    title: "Top 13 Students",
    organization: "ETŠ 'Vaso Aligrudić'",
    category: "Academic Excellence",
    year: "2026",
  },
  {
    id: "special-prize",
    title: "Special Prize for Exceptional Contribution",
    organization: "ETŠ 'Vaso Aligrudić'",
    category: "Unanimously awarded institutional distinction; selected among the school's Top 13 students",
    year: "2026",
  },
];

export interface MediaAppearance {
  id: string;
  title: string;
  organization: string;
  topic: string;
  date?: string;
  link?: string;
  status: "published" | "coming-soon";
}

export const mediaAppearances: MediaAppearance[] = [
  {
    id: "inovakcija-podcast",
    title: "InovAkcija — od ideje do inovacije",
    organization: "MASTER — Mreža za evropske politike",
    topic: "Young Innovators & Civic Technology",
    status: "coming-soon",
  },
  {
    id: "rtcg-feature",
    title: "RTCG Feature",
    organization: "Radio Televizija Crne Gore",
    topic: "Young Innovators in Montenegro",
    status: "published",
  },
  {
    id: "e-televizija",
    title: "E Televizija",
    organization: "E Televizija Montenegro",
    topic: "Technology & Youth Innovation",
    status: "published",
  },
];

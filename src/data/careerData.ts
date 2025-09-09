export interface CareerItem {
  title: string;
  organization: string;
  description: string;
  date: string;
}

// Resume-aligned career timeline data
export const careerData: CareerItem[] = [
  {
    title: "LLM ChatBot Developer",
    organization: "TU Delft",
    description: "migrating legacy rasa framework to an llm-based architecture improving adaptability & response quality.",
    date: "2025-present"
  },
  {
    title: "Teaching Assistant (CS4800)",
    organization: "TU Delft",
    description: "designing sustainable ict systems: create assignments & exam material focused on sustainability outcomes.",
    date: "2025-present"
  },
  {
    title: "Green DiLT Student Assistant",
    organization: "TU Delft",
    description: "co-authored emissions-per-course analysis supporting greener curriculum decisions.",
    date: "2025"
  },
  {
    title: "Research Assistant",
    organization: "TU Delft",
    description: "llm ranking pipeline for deriving ground-truth style judgments over song lyrics datasets.",
    date: "2024-2025"
  },
  {
    title: "LLM Application Developer",
    organization: "TU Delft",
    description: "retrieval app enabling civil engineering students to query updated course material (rag pattern).",
    date: "2024-2025"
  },
  {
    title: "Software Engineer (Inclusive STEM)",
    organization: "TU Delft",
    description: "portal features for inclusive teaching & accessibility resource sharing.",
    date: "2024-2025"
  },
  {
    title: "ChatBot Designer",
    organization: "Child Helpline Project",
    description: "training chatbot improving scenario branching & nlp classification; related publication co-author.",
    date: "2023-2024"
  },
  {
    title: "Teaching Assistant (Org/Logic/OOP)",
    organization: "TU Delft",
    description: "supported labs, grading & student guidance across foundational cs courses.",
    date: "2023"
  },
  {
    title: "Spigot Plugin Developer",
    organization: "Self-employed",
    description: "developed & published custom minecraft server plugins in java (open-source & user feedback driven).",
    date: "2018-2023"
  },
  {
    title: "Summer Camp Counselor",
    organization: "NGO HeadEst",
    description: "confidence-building & personal development facilitation for ~30 young adults in tallinn.",
    date: "2022"
  }
];

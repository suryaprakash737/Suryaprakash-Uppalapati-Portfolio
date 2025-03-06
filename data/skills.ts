// data/skills.ts
// Technical Skills Data
export interface Skill {
  name: string;
  level: string;
  color: string;
}

export const programmingSkills: Skill[] = [
  { name: "Python", level: "90%", color: "bg-green-500" },
  { name: "C++", level: "75%", color: "bg-blue-400" },
  { name: "SQL", level: "85%", color: "bg-yellow-500" },
];

export const tools: Skill[] = [
  { name: "Jupyter Notebook", level: "90%", color: "bg-blue-500" },
  { name: "AWS Sagemaker", level: "80%", color: "bg-red-500" },
  { name: "VS Code", level: "70%", color: "bg-gray-500" },
];

// Certifications Data
export interface Certification {
  title: string;
  provider: string;
  link: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    title: "Supervised Machine Learning",
    provider: "DeepLearning.AI",
    link: "https://www.coursera.org/account/accomplishments/verify/2IUSEAXSMMYQ",
    image: "/images/logos/deeplearninglogo.jpeg",
  },
  {
    title: "Introducing Generative AI",
    provider: "Udacity",
    link: "https://www.udacity.com/certificate/e/159f2a22-769c-11ef-bbaf-531a1a6740b4",
    image: "/images/logos/udacitylogo.jpeg",
  },
  {
    title: "AWS Academy Machine Learning Foundations",
    provider: "AWS Academy",
    link: "https://www.credly.com/badges/c314fb64-d2be-4aa9-8e77-fa5e9069afce?source=linked_in_profile",
    image: "/images/logos/awslogo.jpeg",
  },
  {
    title: "AWS Academy Cloud Foundations",
    provider: "AWS Academy",
    link: "https://www.credly.com/badges/ae25ff37-eb6e-4410-b6a6-bbf7a46f6714/linked_in_profile",
    image: "/images/logos/awslogo.jpeg",
  },
  {
    title: "PCAP Programming Essentials in Python",
    provider: "Python Institute",
    link: "https://www.pythoninstitute.org/certification/pcap/",
    image: "/images/logos/ciscologo.jpeg",
  }
];
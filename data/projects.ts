// data/projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    category: 'ai' | 'ml' | 'data-analysis' | string;
    image: string;
    link: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Dynamic Object Detection System",
      description: "Real-time object detection using YOLO. Improved accuracy by 40%.",
      category: "ai",
      image: "/images/projects/project1.png",
      link: "https://github.com/suryaprakash737/ObjectDetectionUsingYOLO",
    },
    {
      id: 2,
      title: "Meta Llama 2 Fine-Tuning",
      description: "Fine-tuned Llama 2 for specific domain tasks, improving response accuracy by 30%.",
      category: "ml",
      image: "/images/projects/project2.png",
      link: "https://github.com/suryaprakash737/DomainSpecificLanguageModel",
    },
    {
      id: 3,
      title: "Visualizing COVID-19 Data",
      description: "Developed a Power BI dashboard to analyze global pandemic data.",
      category: "data-analysis",
      image: "/images/projects/project3.png",
      link: "covid-project.html",
    },
  ];
  
  export const projectCategories = ["all", "ai", "ml", "data-analysis"];
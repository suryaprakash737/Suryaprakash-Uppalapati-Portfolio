// Place this in data/use-cases/index.ts

export interface UseCase {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage: string;
  tags: string[];
  technologies: string[];
  businessProblem: string;
  methodology: {
    title: string;
    details: string[];
  }[];
  results: string[];
}

export const useCases: UseCase[] = [
  // Your original use cases
  {
    id: 1,
    title: "Dynamic Object Detection System",
    excerpt: "Real-time object detection using YOLO with 40% improved accuracy.",
    date: "2023-08-15",
    slug: "dynamic-object-detection-system",
    coverImage: "/images/projects/project1.png",
    tags: ["Computer Vision", "Object Detection", "Deep Learning"],
    technologies: ["Python", "YOLO", "TensorFlow", "OpenCV"],
    businessProblem: "Security systems often struggle with accurate object detection, especially in variable lighting conditions and with partially obscured objects.",
    methodology: [
      {
        title: "Data Collection",
        details: [
          "Gathered diverse dataset of security footage",
          "Annotated objects across various lighting conditions"
        ]
      },
      {
        title: "Model Selection",
        details: [
          "Evaluated different object detection architectures",
          "Selected YOLO for its balance of speed and accuracy"
        ]
      },
      {
        title: "Model Training",
        details: [
          "Fine-tuned YOLO on custom security dataset",
          "Implemented data augmentation to improve robustness"
        ]
      },
      {
        title: "Optimization",
        details: [
          "Optimized for real-time performance",
          "Implemented custom post-processing to reduce false positives"
        ]
      }
    ],
    results: [
      "Improved detection accuracy by 40%",
      "Achieved real-time performance at 30 FPS",
      "Significantly reduced false positives in challenging conditions",
      "Enhanced detection of partially obscured objects"
    ]
  },
  {
    id: 2,
    title: "Meta Llama 2 Fine-Tuning",
    excerpt: "Fine-tuned Llama 2 for specific domain tasks, improving response accuracy by 30%.",
    date: "2023-09-05",
    slug: "meta-llama-2-fine-tuning",
    coverImage: "/images/projects/project2.png",
    tags: ["NLP", "LLM", "Fine-tuning"],
    technologies: ["Python", "PyTorch", "Hugging Face", "PEFT"],
    businessProblem: "Large language models perform well on general tasks but struggle with domain-specific knowledge and terminology without specialized training.",
    methodology: [
      {
        title: "Data Collection",
        details: [
          "Curated domain-specific dataset",
          "Developed prompt-response pairs for fine-tuning"
        ]
      },
      {
        title: "Model Preparation",
        details: [
          "Set up Llama 2 7B model environment",
          "Implemented Parameter-Efficient Fine-Tuning (PEFT) techniques"
        ]
      },
      {
        title: "Fine-Tuning Process",
        details: [
          "Applied LoRA (Low-Rank Adaptation) for efficient training",
          "Optimized hyperparameters for domain adaptation"
        ]
      },
      {
        title: "Evaluation",
        details: [
          "Developed domain-specific evaluation metrics",
          "Conducted comparative analysis with base model"
        ]
      }
    ],
    results: [
      "Improved response accuracy by 30% on domain-specific queries",
      "Maintained general capabilities while enhancing specialized knowledge",
      "Reduced hallucinations in technical responses",
      "Optimized for deployment with minimal computational resources"
    ]
  },
  
  {
    id: 3, // Adjust ID as needed based on your existing use cases
    title: "Customer Churn Prediction Model",
    excerpt: "Developing a predictive model to identify customers at risk of churning, enabling proactive retention strategies.",
    date: "2023-10-15",
    slug: "customer-churn-prediction",
    coverImage: "/images/projects/churn_prediction_dashboard.png", // Update with your actual image path
    tags: ["Machine Learning", "Predictive Analytics", "Customer Retention"],
    technologies: ["Python", "Scikit-learn", "Pandas", "SMOTE", "Matplotlib", "Seaborn"],
    businessProblem: "A telecommunications company was experiencing a 15% annual customer churn rate, resulting in approximately $3.2M in lost revenue. The company had collected extensive customer data but lacked the ability to proactively identify at-risk customers before they canceled. Traditional retention efforts were reactive and inefficient, with only a 12% success rate for winback campaigns.",
    methodology: [
      {
        title: "Data Collection & Integration",
        details: [
          "Sourced customer demographics, service subscriptions, account information, and billing data",
          "Integrated data from multiple systems to create a comprehensive view of 7,000+ customers",
          "Created a unified dataset for analysis containing all relevant customer attributes"
        ]
      },
      {
        title: "Data Preparation & Exploration",
        details: [
          "Converted categorical variables to appropriate data types",
          "Handled missing values in TotalCharges using median imputation",
          "Created visualizations to understand the 27% churn rate distribution",
          "Analyzed the relationship between tenure and churn, revealing newer customers were more likely to churn"
        ]
      },
      {
        title: "Feature Engineering",
        details: [
          "Converted categorical variables to dummy variables",
          "Created customer value metrics and spending trend indicators",
          "Applied feature scaling to improve model performance",
          "Identified key correlations: month-to-month contracts, fiber optic internet, and electronic check payments were strongly associated with churn"
        ]
      },
      {
        title: "Model Development",
        details: [
          "Implemented and compared multiple classification algorithms: Logistic Regression and Random Forest",
          "Applied SMOTE to address class imbalance (73% non-churners vs. 27% churners)",
          "Evaluated models using accuracy, precision, recall, F1 score, and AUC",
          "Identified Random Forest as best performer with 83% accuracy, 80% precision, 75% recall, and 0.86 AUC"
        ]
      },
      {
        title: "Business Implementation",
        details: [
          "Developed risk scoring system categorizing customers into risk segments",
          "Created dashboards for stakeholders to visualize churn risk distribution",
          "Designed targeted retention strategies for each risk category",
          "Implemented monitoring system to track model performance and intervention effectiveness"
        ]
      }
    ],
    results: [
      "83% accuracy in predicting customer churn 60 days in advance",
      "Identified key churn predictors: contract type, tenure, monthly charges, and fiber optic internet service",
      "Enabled 40% success rate for proactive retention efforts with high-risk customers",
      "$240,000 in monthly revenue saved through targeted interventions",
      "12% reduction in overall churn rate",
      "$1.8M projected annual impact after accounting for retention program costs"
    ]
  },
  {
    id: 4,
    title: "Digital Customer Journey Analytics Dashboard",
    excerpt: "Creating a comprehensive analytics dashboard to visualize the customer journey across multiple touchpoints, providing actionable insights.",
    date: "2023-11-10",
    slug: "customer-journey-analytics",
    coverImage: "/images/projects/project4.png",
    tags: ["Data Visualization", "Customer Analytics", "Dashboard Development"],
    technologies: ["Tableau", "SQL", "Python", "Google Analytics", "Power BI"],
    businessProblem: "Lack of visibility into the complete customer journey across digital touchpoints was preventing optimization of the customer experience and limiting effective collaboration between teams.",
    methodology: [
      {
        title: "Stakeholder Requirements Gathering",
        details: [
          "Conducted interviews with marketing, sales, and customer experience teams",
          "Identified key metrics and KPIs for different persona roles",
          "Established data access and integration requirements"
        ]
      },
      {
        title: "Data Integration & Threading",
        details: [
          "Connected data across website analytics, CRM, support systems, and product usage",
          "Created unified customer ID mapping across systems",
          "Established data normalization protocols for consistent reporting"
        ]
      },
      {
        title: "Dashboard Development",
        details: [
          "Designed intuitive visualization interface with role-based views",
          "Implemented filtering capabilities for different segments and time periods",
          "Created drill-down functionality for detailed analysis"
        ]
      },
      {
        title: "Journey Analysis",
        details: [
          "Mapped conversion funnels across acquisition channels",
          "Identified drop-off points and bottlenecks in the customer journey",
          "Analyzed time-to-conversion across different customer segments"
        ]
      },
      {
        title: "Insights Generation",
        details: [
          "Established statistical baselines for journey metrics",
          "Identified correlation between journey touchpoints and conversion",
          "Developed automated anomaly detection for journey disruptions"
        ]
      }
    ],
    results: [
      "Created unified view of customer journey across 7 previously siloed systems",
      "Identified 3 major drop-off points in the digital customer experience",
      "Provided persona-specific insights for marketing, sales, and support teams",
      "Improved journey conversion rate by 15% through targeted optimizations"
    ]
  },
  {
    id: 5,
    title: "Product Recommendation Engine Optimization",
    excerpt: "Analyzing and improving product recommendation effectiveness for an e-commerce platform to enhance relevance and conversion rates.",
    date: "2023-12-05",
    slug: "product-recommendation-engine",
    coverImage: "/images/projects/project5.png",
    tags: ["Recommendation Systems", "E-commerce", "Machine Learning"],
    technologies: ["Python", "PyTorch", "AWS", "SQL", "A/B Testing"],
    businessProblem: "Existing product recommendations were not maximizing conversion potential, with users often not engaging with suggested items due to relevance issues and poor personalization.",
    methodology: [
      {
        title: "User Behavior Analysis",
        details: [
          "Analyzed browsing and purchase patterns across user segments",
          "Evaluated click-through rates on existing recommendations",
          "Identified gaps between user interests and recommended products"
        ]
      },
      {
        title: "Recommendation Evaluation",
        details: [
          "Assessed current recommendation algorithm performance",
          "Analyzed recommendation relevance across product categories",
          "Measured conversion impact of recommendations by placement and type"
        ]
      },
      {
        title: "Algorithm Improvement",
        details: [
          "Implemented collaborative filtering techniques based on user similarity",
          "Developed content-based recommendation components for new users",
          "Created hybrid approach combining multiple recommendation strategies"
        ]
      },
      {
        title: "Testing Framework",
        details: [
          "Designed A/B testing methodology to validate improvements",
          "Established key metrics for measuring recommendation quality",
          "Created feedback loops for continuous optimization"
        ]
      },
      {
        title: "Performance Measurement",
        details: [
          "Built dashboard for tracking recommendation engagement",
          "Analyzed impact on conversion rates and average order value",
          "Measured improvement in discovery of long-tail products"
        ]
      }
    ],
    results: [
      "Improved recommendation click-through rates by 22%",
      "Increased conversion from recommendations by 8.5%",
      "Reduced time from product view to purchase by 17%",
      "Enhanced discovery of niche products, increasing catalog coverage"
    ]
  }
];
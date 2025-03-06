"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCases, UseCase } from "@/data/use-cases";

export default function UseCaseDetail() {
  const params = useParams();
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  
  useEffect(() => {
    if (params?.slug) {
      const foundCase = useCases.find(c => c.slug === params.slug);
      if (foundCase) {
        setUseCase(foundCase);
      }
    }
  }, [params?.slug]);

  if (!useCase) {
    return (
      <div className="max-w-full pt-24 min-h-screen bg-gray-900">
        <div className="max-w-4xl mx-auto p-8 text-white text-center">
          <h1 className="text-2xl">Case study not found</h1>
          <Link 
            href="/use-cases"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  // Special handling for customer churn case study to include additional images
  const isChurnCase = useCase.slug === 'customer-churn-prediction';

  return (
    <main className="max-w-full pt-24 min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 text-white">
        {/* Header with image banner */}
        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <Image 
            src={useCase.coverImage} 
            alt={useCase.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-4xl font-bold">{useCase.title}</h1>
            <div className="flex items-center mt-2">
              <span className="text-gray-300">{useCase.date}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h2 className="text-xl text-purple-400">Skills Demonstrated</h2>
              <div className="flex flex-wrap gap-2 mt-1">
                {useCase.tags.map(tag => (
                  <span key={tag} className="text-sm bg-indigo-900 text-indigo-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Business Problem</h2>
            <p className="text-gray-300">{useCase.businessProblem}</p>
          </section>

          {/* Special section for churn prediction case with visualizations */}
          {isChurnCase && (
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Key Insights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Churn Distribution</h3>
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/images/projects/churn_distribution.png" 
                      alt="Churn Distribution" 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Churn by Tenure</h3>
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/images/projects/churn_by_tenure.png" 
                      alt="Churn by Tenure" 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Feature Correlation with Churn</h3>
                <div className="relative h-80 w-full">
                  <Image 
                    src="/images/projects/top_churn_correlations.png" 
                    alt="Top Features Correlated with Churn" 
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-gray-300">Top features correlated with customer churn, showing that spending trends, fiber optic internet, and electronic payments are strongly associated with churn behavior.</p>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Methodology</h2>
            <div className="space-y-6">
              {useCase.methodology.map((method, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                    {index + 1}. {method.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {method.details.map((detail, i) => (
                      <li key={i} className="text-gray-300">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* More visualizations for churn prediction case */}
          {isChurnCase && (
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Model Evaluation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Model Performance Comparison</h3>
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/images/projects/model_comparison.png" 
                      alt="Model Performance Comparison" 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">ROC Curves</h3>
                  <div className="relative h-60 w-full">
                    <Image 
                      src="/images/projects/roc_curves.png" 
                      alt="ROC Curves" 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Risk Category Analysis</h3>
                <div className="relative h-60 w-full">
                  <Image 
                    src="/images/projects/risk_category_analysis.png" 
                    alt="Risk Category Analysis" 
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 text-gray-300">Analysis of churn rates by risk category, showing that the model successfully identified high-risk customers with significantly higher churn rates.</p>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {useCase.technologies.map(tech => (
                <span key={tech} className="text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Results & Business Impact</h2>
            <ul className="list-disc list-inside space-y-2">
              {useCase.results.map((result, index) => (
                <li key={index} className="text-gray-300">
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {/* Additional section for churn case */}
          {isChurnCase && (
            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">Challenges Overcome</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Addressed data quality issues through careful preprocessing and handling of missing values</li>
                <li>Used SMOTE to create a balanced training dataset and address the class imbalance issue</li>
                <li>Optimized model parameters to find the right balance between precision and recall</li>
                <li>Started with 200+ potential features and identified the 15 most impactful ones</li>
              </ul>
            </section>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link 
            href="/use-cases"
            className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    </main>
  );
}
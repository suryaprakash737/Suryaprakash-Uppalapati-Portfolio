"use client";
import { useState } from "react";

export default function MLModelsDemo() {
  const [prediction, setPrediction] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handlePrediction = async () => {
    if (!file) {
      alert("Please upload a CSV file first.");
      return;
    }

    setLoading(true);
    setPrediction(""); // Clear previous prediction

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/predictions/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setPrediction(data.result);
      } else {
        alert(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      alert("Failed to connect to the server. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-full pt-24 min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Machine Learning Model Showcase</h2>
        <p className="mb-4">Upload a dataset and get predictions from our AI model.</p>

        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block mx-auto mb-4 text-gray-300"
        />

        {/* Display selected file name */}
        {file && <p className="text-sm text-gray-400">Selected File: {file.name}</p>}

        <button
          onClick={handlePrediction}
          className={`bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg 
                     ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 transition"}`}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Run Model Prediction"}
        </button>

        {prediction && <p className="text-xl mt-4 font-semibold">Prediction: {prediction}</p>}
      </div>
    </main>
  );
}

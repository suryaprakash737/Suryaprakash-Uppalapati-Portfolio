"use client";
import { useState } from "react";

export default function LiveMLDemo() {
  const [prediction, setPrediction] = useState("");
  const [file, setFile] = useState<File | null>(null);

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

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/predict", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setPrediction(data.result);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Live AI Model Demo</h2>
      <p className="mb-4">Upload a dataset and get predictions from our AI model.</p>

      <input type="file" accept=".csv" onChange={handleFileChange} className="block mx-auto mb-4 text-gray-300" />

      <button
        onClick={handlePrediction}
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
      >
        Run Model Prediction
      </button>

      {prediction && <p className="text-xl mt-4 font-semibold">Prediction: {prediction}</p>}
    </div>
  );
}

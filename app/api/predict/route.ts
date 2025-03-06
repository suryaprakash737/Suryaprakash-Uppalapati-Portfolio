import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

// Handle file upload and prediction
export async function POST(request: Request) {
  try {
    // Parse the form data
    const formData = await request.formData();
    const file = formData.get("file");

    // Validate file presence and type
    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "Please upload a valid CSV file." }, { status: 400 });
    }
    if (!file.type.includes("csv")) {
      return NextResponse.json({ error: "Only CSV files are allowed." }, { status: 400 });
    }

    // Convert file to a buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const dataset = buffer.toString(); // Convert buffer to CSV string

    // Call the ML prediction function
    const prediction = await getPrediction(dataset);

    return NextResponse.json({ result: prediction });
  } catch (error) {
    return NextResponse.json({ error: "Prediction failed. Try again later." }, { status: 500 });
  }
}

// This function will handle the prediction logic
async function getPrediction(csvData: string): Promise<string> {
  // Implement actual ML logic here
  return "Predicted Category: Setosa"; // Placeholder response
}

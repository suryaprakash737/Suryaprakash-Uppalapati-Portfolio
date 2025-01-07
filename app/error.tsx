"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Portfolio encountered an error:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold">Something went wrong! 🚨</h2>
      <p className="text-gray-400 mt-2">We encountered an unexpected error.</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-800 transition"
      >
        Refresh Page
      </button>
    </div>
  );
}

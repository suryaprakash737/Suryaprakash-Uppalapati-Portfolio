import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Ensure correct import
import Chatbot from "./components/Chatbot"; // Import chatbot

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suryaprakash Uppalapati - Portfolio",
  description: "Machine Learning Engineer | AI Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {/* Include Navbar only once */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Chatbot Component */}
        <Chatbot />

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-gray-400 text-center py-4">
          <p>© {new Date().getFullYear()} Suryaprakash Uppalapati. All rights reserved.</p>
          <p className="text-sm">Licensed under George Mason University.</p>
        </footer>
      </body>
    </html>
  );
}

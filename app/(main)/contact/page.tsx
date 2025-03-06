"use client";
import { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(`Error: ${result.error}`);
    }

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="max-w-5xl mx-auto p-8 text-white">
      {/* Header */}
      <section id = "contact" className="text-center bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg">Feel free to reach out for collaborations, job opportunities, or just a chat!</p>
      </section>

      {/* Contact Form */}
      <section className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 rounded-md text-white font-semibold ${
              submitted ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-800"
            }`}
            disabled={submitted}
          >
            {submitted ? "Message Sent! ✅" : "Send Message"}
          </button>
        </form>
        {status && <p className="mt-4 text-green-300">{status}</p>}
      </section>

      {/* Social Links */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
        <div className="flex justify-center space-x-6 text-3xl">
          <Link href="https://www.linkedin.com/in/suryaprakash55" target="_blank" className="text-blue-400 hover:text-blue-600 transition">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/suryaprakash737" target="_blank" className="text-gray-400 hover:text-gray-600 transition">
            <FaGithub />
          </Link>
          <a href="mailto:suppala6@gmu.edu" className="text-red-400 hover:text-red-600 transition">
            <FaEnvelope />
          </a>
          <Link href="/resume.pdf" target="_blank" className="text-green-400 hover:text-green-600 transition">
            <FaFilePdf />
          </Link>
        </div>
      </section>

      {/* (Optional) Add Google Map */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Find Me Here</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            className="rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.707505496899!2d-77.30504992385953!3d38.82978857194964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b5c361345b17%3A0x3b169c9b1cb3fc8e!2sGeorge%20Mason%20University!5e0!3m2!1sen!2sus!4v1704579600000!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

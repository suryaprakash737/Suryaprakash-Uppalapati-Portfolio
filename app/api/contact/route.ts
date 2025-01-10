import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // ✅ Use Mailtrap SMTP Instead of Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <your-email@domain.com>`, // Change to your email
      to: "your-email@domain.com", // Your email (so you receive the test messages)
      replyTo: email, // User's Email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully:", info.response);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

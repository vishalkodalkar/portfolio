import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ 1) EMAIL TO YOU (ADMIN)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
You received a new message from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // ✅ 2) AUTO-REPLY TO GUEST
    await transporter.sendMail({
      from: `"Vishal Portfolio" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message ✅",
      text: `
Hi ${name},

Thank you for contacting me through my portfolio.

I have received your message and will get back to you as soon as possible.

Best regards,
Vishal
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

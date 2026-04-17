import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, mobile, organisation, eventType, message } = body;

    if (!name || !email || !mobile || !organisation || !eventType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "smtp.titan.email",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Invitation" <${process.env.SMTP_USER}>`,
      to: "dranand@gmail.com",
      replyTo: email,
      subject: `New Invitation: ${eventType} — from ${name}`,
      html: `
        <h2>New Invitation Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Mobile</td><td style="padding:8px;border-bottom:1px solid #eee;">${mobile}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Organisation</td><td style="padding:8px;border-bottom:1px solid #eee;">${organisation}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Event Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${eventType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${message || "—"}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

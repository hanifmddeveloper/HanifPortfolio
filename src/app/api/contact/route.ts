import { NextResponse } from "next/server";
import { validateContactPayload, ContactPayload } from "@/lib/validation";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body: Partial<ContactPayload> = await request.json();

    // 1. Validation & Spam Honeypot Check
    const validation = validateContactPayload(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          errors: validation.errors
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body as ContactPayload;

    // 2. Check for configured SMTP credentials
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "hanif007.dev@gmail.com";

    const hasSmtpConfig = Boolean(smtpHost && smtpUser && smtpPass);

    if (hasSmtpConfig) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      await transporter.sendMail({
        from: `"${name} (Portfolio Inquiry)" <${smtpUser}>`,
        replyTo: email,
        to: receiverEmail,
        subject: `[Portfolio Contact] ${subject} - from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #4338ca; margin-top: 0;">New Message from Portfolio Website</h2>
            <p><strong>From:</strong> ${name} &lt;<a href="mailto:${email}">${email}</a>&gt;</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <h3 style="color: #334155; margin-bottom: 8px;">Message:</h3>
            <p style="white-space: pre-wrap; color: #1e293b; background: #f8fafc; padding: 15px; border-radius: 6px; line-height: 1.6;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #64748b;">Delivered via Md. Hanif Portfolio Contact Service</p>
          </div>
        `
      });

      return NextResponse.json({
        success: true,
        message: "Thank you, Md. Hanif! Your message has been sent successfully. I will get back to you shortly."
      });
    } else {
      // Fallback mode if environment variables are not yet populated on deployment
      console.log("Contact submission received (SMTP not configured):", {
        name,
        email,
        subject,
        message: message.substring(0, 100) + "..."
      });

      return NextResponse.json({
        success: true,
        message:
          "Message received! Note: Live SMTP is currently awaiting environment variable setup. You can also reach me directly at hanif007.dev@gmail.com or WhatsApp: +8801813286277.",
        notice: "SMTP_PENDING_CONFIG"
      });
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred while processing your request. Please try contacting me directly via email or WhatsApp."
      },
      { status: 500 }
    );
  }
}

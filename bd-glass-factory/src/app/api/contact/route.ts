import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "info@bdglassfactory.com";

let resend: Resend | null = null;
function getResend() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

function getInternalEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country: string;
  productInterest?: string[];
  message: string;
}) {
  const { name, email, phone, company, country, productInterest, message } = data;
  return `
    <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #0A1F44;">
      <div style="background: #0A1F44; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">🔔 New Inquiry Received</h1>
        <p style="color: #8A9BA8; margin: 8px 0 0;">BDGLASS Factory Website</p>
      </div>
      <div style="padding: 24px; background: #ffffff; border: 1px solid #E5E9EC;">
        <p style="margin: 0 0 16px;"><strong>Submitted at:</strong> ${new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" })} (GMT+8)</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;">${name}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;"><strong>Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;"><strong>Phone</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;">${phone || "N/A"}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;"><strong>Company</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;">${company || "N/A"}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;"><strong>Country</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;">${country}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;"><strong>Product Interest</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E5E9EC;">${productInterest?.join(", ") || "N/A"}</td></tr>
        </table>
        <div style="margin-top: 16px;">
          <strong>Message:</strong>
          <div style="background: #F5F7F9; padding: 12px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
      <div style="padding: 16px; text-align: center; color: #8A9BA8; font-size: 12px;">
        This inquiry was submitted via bdglassfactory.com
      </div>
    </div>
  `;
}

function getCustomerConfirmationHtml(name: string) {
  return `
    <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #0A1F44;">
      <div style="background: #0A1F44; padding: 24px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Thank You for Your Inquiry</h1>
      </div>
      <div style="padding: 24px; background: #ffffff; border: 1px solid #E5E9EC;">
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>BDGLASS</strong> — Foshan Bodian Glass Co., LTD. We have received your inquiry and will get back to you within <strong>24 hours</strong> during business days (Monday–Saturday, 8:00 AM–6:00 PM GMT+8).</p>
        <p>In the meantime, feel free to reach out to us directly via WhatsApp at <strong>+86 13786871098</strong> for instant communication.</p>
        <div style="margin: 24px 0; text-align: center;">
          <a href="https://wa.me/8613786871098" style="display: inline-block; background: linear-gradient(135deg, #00A3E0, #00C2FF); color: #ffffff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600;">Chat on WhatsApp</a>
        </div>
        <p>Best regards,<br>The BDGLASS Team</p>
        <hr style="border: none; border-top: 1px solid #E5E9EC; margin: 24px 0;" />
        <p style="font-size: 12px; color: #8A9BA8;">
          Foshan Bodian Glass Co., LTD<br>
          No.23, North Garden Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China<br>
          Email: info@bdglassfactory.com | Phone/WhatsApp: +86 13786871098
        </p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, country, productInterest, message, turnstileToken } = body;

    // Server-side validation
    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    if (process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { error: "Security verification required" },
          { status: 400 }
        );
      }
      const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      });
      const turnstileData = await turnstileRes.json();
      if (!turnstileData.success) {
        console.error("Turnstile verification failed:", turnstileData);
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // Check Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send internal notification email
    const { error: notifyError } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      subject: `New Inquiry from ${name} — ${country}`,
      html: getInternalEmailHtml({ name, email, phone, company, country, productInterest, message }),
    });

    if (notifyError) {
      console.error("Resend notify email error:", notifyError);
      return NextResponse.json(
        { error: "Failed to send inquiry notification" },
        { status: 500 }
      );
    }

    // Send customer confirmation email
    const { error: confirmError } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Thank You for Your Inquiry — BDGLASS",
      html: getCustomerConfirmationHtml(name),
    });

    if (confirmError) {
      console.error("Resend confirmation email error:", confirmError);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

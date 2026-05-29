import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, country, productInterest, message } = body;

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

    // TODO: reCAPTCHA verification
    // const recaptchaToken = body.recaptchaToken;
    // if (!recaptchaToken) { return NextResponse.json({ error: "reCAPTCHA required" }, { status: 400 }); }
    // const recaptchaResult = await fetch("https://www.google.com/recaptcha/api/siteverify", { ... });
    // if (!recaptchaResult.success) { return NextResponse.json({ error: "reCAPTCHA failed" }, { status: 400 }); }

    // Log inquiry (replace with actual email/DB logic)
    console.log("=== New Inquiry ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "N/A");
    console.log("Company:", company || "N/A");
    console.log("Country:", country);
    console.log("Product Interest:", productInterest?.join(", ") || "N/A");
    console.log("Message:", message);
    console.log("===================");

    // TODO: Send email notification
    // await sendEmail({ to: "info@bdglassfactory.com", subject: "New Inquiry from ${name}", ... });

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

"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface InquiryFormProps {
  turnstileSiteKey: string;
}

// Extend Window for Turnstile
declare global {
  interface Window {
    turnstile?: {
      ready: (callback: () => void) => void;
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          size?: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
        }
      ) => string;
      getResponse: (widgetId?: string) => string | undefined;
      reset: (widgetId?: string) => void;
    };
  }
}

export default function InquiryForm({ turnstileSiteKey }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const widgetIdRef = useRef<string | null>(null);

  const countries = [
    "Australia", "United States", "United Kingdom", "United Arab Emirates",
    "Saudi Arabia", "India", "Vietnam", "Cambodia", "South Africa",
    "Nigeria", "Kenya", "Other",
  ];

  // Render invisible Turnstile widget on mount
  useEffect(() => {
    if (!turnstileSiteKey || typeof window === "undefined" || !window.turnstile) return;

    const renderWidget = () => {
      const container = document.getElementById("turnstile-container");
      if (!container) return;
      // Clean up existing widget
      if (widgetIdRef.current) {
        window.turnstile!.reset(widgetIdRef.current);
      }
      widgetIdRef.current = window.turnstile!.render(container, {
        sitekey: turnstileSiteKey,
        size: "invisible",
      });
    };

    if (document.readyState === "complete") {
      renderWidget();
    } else {
      window.turnstile.ready(renderWidget);
    }
  }, [turnstileSiteKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.country) newErrors.country = "Please select your country";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getTurnstileToken = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!turnstileSiteKey) {
        reject(new Error("Turnstile site key not configured"));
        return;
      }
      if (typeof window === "undefined" || !window.turnstile) {
        reject(new Error("Turnstile script not loaded. Please refresh the page and try again."));
        return;
      }

      // Try to get existing response first
      const existingToken = widgetIdRef.current
        ? window.turnstile.getResponse(widgetIdRef.current)
        : undefined;

      if (existingToken) {
        resolve(existingToken);
        return;
      }

      // Otherwise render a fresh invisible widget to generate token
      const container = document.getElementById("turnstile-container");
      if (!container) {
        reject(new Error("Turnstile container not found"));
        return;
      }

      if (widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
      }

      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: turnstileSiteKey,
        size: "invisible",
        callback: (token: string) => resolve(token),
        "error-callback": () => reject(new Error("Turnstile verification failed")),
      });
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const turnstileToken = await getTurnstileToken();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", country: "", message: "" });
      // Reset turnstile for next submission
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-8 text-center">
        <CheckCircle size={48} className="text-brand-green mx-auto mb-4" />
        <h3 className="text-brand-dark mb-2">Thank You for Your Inquiry</h3>
        <p className="text-brand-muted-dark mb-6">
          We have received your message and will get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline border-brand-blue text-brand-blue w-full sm:w-auto">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-8" noValidate>
      <h3 className="text-brand-dark mb-2">Request a Glass Factory Quote</h3>
      <p className="text-brand-muted-dark text-body-sm mb-6">
        Fill out the form below with your glass requirements. We&apos;ll respond within 24 hours with a detailed quotation.
      </p>

      <div className="space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="label">Full Name *</label>
            <input
              type="text" id="name" name="name" value={formData.name}
              onChange={handleChange} placeholder="Your full name (required for quotation)"
              className={`input-field ${errors.name ? "border-brand-orange" : ""}`}
            />
            {errors.name && <p className="text-brand-orange text-sm mt-1.5">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="label">Email *</label>
            <input
              type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="your@email.com (required for quotation delivery)"
              className={`input-field ${errors.email ? "border-brand-orange" : ""}`}
            />
            {errors.email && <p className="text-brand-orange text-sm mt-1.5">{errors.email}</p>}
          </div>
        </div>

        {/* Phone + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="label">Phone</label>
            <input
              type="tel" id="phone" name="phone" value={formData.phone}
              onChange={handleChange} placeholder="+86 137 2381 0568 (recommended for WhatsApp follow-up)"
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="company" className="label">Company</label>
            <input
              type="text" id="company" name="company" value={formData.company}
              onChange={handleChange} placeholder="Your company or project name"
              className="input-field"
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="label">Country *</label>
          <select
            id="country" name="country" value={formData.country}
            onChange={handleChange}
            className={`input-field ${errors.country ? "border-brand-orange" : ""}`}
          >
            <option value="">Select your country (for shipping &amp; documentation)</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && <p className="text-brand-orange text-sm mt-1.5">{errors.country}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="label">Message *</label>
          <textarea
            id="message" name="message" value={formData.message}
            onChange={handleChange} rows={5}
            placeholder="Glass type, dimensions (mm), thickness, quantity, application, delivery timeline, and any special requirements..."
            className={`textarea-field ${errors.message ? "border-brand-orange" : ""}`}
          />
          {errors.message && <p className="text-brand-orange text-sm mt-1.5">{errors.message}</p>}
        </div>

        {/* Turnstile container (invisible but present in DOM) */}
        <div id="turnstile-container" className="absolute left-0 top-0 w-0 h-0 overflow-hidden" />

        {/* Error Banner */}
        {status === "error" && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <AlertCircle size={18} className="text-red-500 shrink-0" />
            <p className="text-red-700 text-sm">
              Failed to send message. Please try again or contact us via WhatsApp.
            </p>
          </div>
        )}

        {/* Submit */}
        <button type="submit" disabled={status === "loading"} className="btn-primary w-full sm:w-auto">
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}

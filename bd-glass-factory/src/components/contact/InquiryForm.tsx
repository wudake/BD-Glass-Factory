"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: "",
  });
  const [productInterest, setProductInterest] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const countries = [
    "Australia", "United States", "United Kingdom", "United Arab Emirates",
    "Saudi Arabia", "India", "Vietnam", "Cambodia", "South Africa",
    "Nigeria", "Kenya", "Other",
  ];

  const products = [
    "Tempered Glass",
    "Insulating Glass",
    "Laminated Glass",
    "Craft Glass",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleProductToggle = (product: string) => {
    setProductInterest((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, productInterest }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", country: "", message: "" });
      setProductInterest([]);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <CheckCircle size={48} className="text-brand-green mx-auto mb-4" />
        <h3 className="text-brand-dark mb-2">Thank You for Your Inquiry</h3>
        <p className="text-brand-muted-dark mb-6">
          We have received your message and will get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline border-brand-blue text-brand-blue">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8" noValidate>
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
            {errors.name && <p className="text-brand-orange text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="label">Email *</label>
            <input
              type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="your@email.com (required for quotation delivery)"
              className={`input-field ${errors.email ? "border-brand-orange" : ""}`}
            />
            {errors.email && <p className="text-brand-orange text-xs mt-1">{errors.email}</p>}
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
          {errors.country && <p className="text-brand-orange text-xs mt-1">{errors.country}</p>}
        </div>

        {/* Product Interest */}
        <div>
          <label className="label">Product Interest</label>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
              <label
                key={product}
                className={`flex items-center gap-2 text-body-sm cursor-pointer rounded-md border px-3 py-2.5 transition-colors ${
                  productInterest.includes(product)
                    ? "border-brand-blue bg-brand-blue/5 text-brand-blue"
                    : "border-gray-200 text-brand-muted-dark hover:border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  checked={productInterest.includes(product)}
                  onChange={() => handleProductToggle(product)}
                  className="sr-only"
                />
                {product}
              </label>
            ))}
          </div>
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
          {errors.message && <p className="text-brand-orange text-xs mt-1">{errors.message}</p>}
        </div>

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

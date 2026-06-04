import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/contact/InquiryForm";
import { siteConfig } from "@/data/site-config";
import { MapPin, Phone, Mail, Check } from "lucide-react";
import { JsonLdBreadcrumb } from "@/lib/json-ld";
import { generatePageMeta } from "@/lib/metadata";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Contact BDGLASS | Glass Factory Quote China | WhatsApp +86 13786871098",
  description:
    "Contact BDGLASS glass factory in Foshan, China. Get a quote for tempered, insulating, laminated & craft glass. WhatsApp +86 13786871098. 24-hour response guaranteed.",
  path: "/contact",
});

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

export default function ContactPage() {
  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <p className="text-brand-blue text-sm uppercase tracking-wider mb-4">24-Hour Response</p>
          <h1 className="text-white mb-4">Contact BDGLASS — Get a Glass Factory Quote from China</h1>
          <p className="text-brand-muted text-body-lg max-w-2xl mx-auto">
            Send your glass specifications for a detailed factory quotation within 24 hours. WhatsApp, email, or fill out the inquiry form below.
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <JsonLdBreadcrumb items={[{ name: "Home", item: "/" }, { name: "Contact" }]} />
      </div>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-brand-dark mb-6">How to Request a Glass Quotation</h2>
            <div className="space-y-4 text-brand-muted-dark leading-relaxed text-left">
              <p>
                Ready to source high-quality glass from China? <strong>Contact BDGLASS</strong> today and
                receive a detailed factory quotation within 24 hours. Whether you need{" "}
                <strong>tempered glass</strong>, <strong>insulating glass (IGU)</strong>,{" "}
                <strong>laminated glass</strong>, or <strong>custom decorative glass</strong>, our team is
                here to help you select the right product, specification, and configuration for your
                project.
              </p>
              <div className="bg-brand-gray/30 rounded-lg p-5">
                <h5 className="text-brand-dark font-semibold mb-3">Information to Include for an Accurate Quote:</h5>
                <ul className="space-y-2 text-body-sm">
                  {[
                    "Glass type: Tempered, insulating, laminated, craft, or a combination",
                    "Dimensions: Length × width (mm), thickness (mm), and quantity (sqm or pieces)",
                    "Specifications: Color (clear, tinted, Low-E), edge finish, hole patterns, printing requirements",
                    "Application: Curtain wall, window, railing, shower, furniture, or other",
                    "Destination country: For shipping cost estimation and documentation requirements",
                    "Timeline: When do you need the glass delivered?",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} className="text-brand-green mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                We guarantee a response to all inquiries within <strong>24 hours</strong> during business
                days (Monday–Saturday, 8:00 AM–6:00 PM GMT+8). For urgent inquiries, we recommend
                contacting us directly via <strong>WhatsApp at +86 13786871098</strong> for instant
                messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section bg-brand-gray/5">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Client Component Form */}
            <InquiryForm turnstileSiteKey={TURNSTILE_SITE_KEY} />

            {/* Contact Info */}
            <div>
              <SectionTitle title="Get In Touch" align="left" />
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Factory Address</h5>
                    <p className="text-brand-muted-dark text-body-sm">
                      {siteConfig.address.en}
                    </p>
                    <p className="text-brand-muted text-body-sm mt-1">
                      45 minutes from Guangzhou Baiyun International Airport (CAN)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Phone / WhatsApp</h5>
                    <p className="text-brand-muted-dark text-body-sm">{siteConfig.phone}</p>
                    <p className="text-brand-muted text-body-sm mt-1">
                      Primary contact for international buyers. Instant response during business hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Email</h5>
                    <p className="text-brand-muted-dark text-body-sm">{siteConfig.email}</p>
                    <p className="text-brand-muted text-body-sm mt-1">
                      For detailed quotations, technical specifications, and project documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Factory Visit</h5>
                    <p className="text-brand-muted-dark text-body-sm">
                      Welcome by appointment. Airport pickup from Guangzhou Baiyun International Airport for serious buyers.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-brand-dark rounded-xl p-6 text-center">
                <h4 className="text-white mb-2">Prefer to Talk Directly?</h4>
                <p className="text-brand-muted text-body-sm mb-4">
                  Message us on WhatsApp for instant responses, photo sharing, and factory tour scheduling.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionTitle
            title="Frequently Asked Questions About Contacting BDGLASS"
            subtitle="Common questions from international buyers about getting a quote and visiting our factory."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I get a glass factory quotation?",
                answer:
                  "The fastest way is to fill out the inquiry form on this page with your glass specifications (type, dimensions, thickness, quantity, application, and destination). Alternatively, send us a message on WhatsApp at +86 13786871098 with your requirements and any drawings or photos. We guarantee a detailed quotation within 24 hours during business days.",
              },
              {
                question: "What information do I need to provide for an accurate quote?",
                answer:
                  "For the most accurate quotation, please provide: (1) Glass type (tempered, insulating, laminated, craft), (2) Dimensions (length × width in mm), (3) Thickness (mm), (4) Quantity (square meters or number of pieces), (5) Color/finish (clear, tinted, Low-E, frosted, printed), (6) Application (curtain wall, window, railing, shower, furniture), (7) Destination country, and (8) Required delivery date.",
              },
              {
                question: "How quickly will you respond to my inquiry?",
                answer:
                  "We guarantee a response to all inquiries within 24 hours during business days (Monday–Saturday, 8:00 AM–6:00 PM GMT+8). For urgent inquiries, contact us via WhatsApp at +86 13786871098 for instant messaging during business hours. Messages received on Sunday are replied on Monday morning.",
              },
              {
                question: "Can I visit your glass factory in Foshan?",
                answer:
                  "Yes, we welcome factory visits by appointment. Our factory is located at No.23, North Garden Road, Shishan Town, Nanhai District, Foshan City — approximately 45 minutes by car from Guangzhou Baiyun International Airport (CAN). Please contact us at least 3 days in advance to schedule your visit. Airport pickup and hotel recommendations can be arranged for serious buyers and project partners.",
              },
              {
                question: "Do you offer samples before placing a bulk order?",
                answer:
                  "Yes, we strongly recommend ordering samples for custom glass projects, especially for decorative glass with specific colors, patterns, or finishes. Sample production takes 7-10 working days and the cost is credited toward your bulk order. Samples allow you to verify quality, dimensions, and surface finish before committing to full production.",
              },
              {
                question: "Can I contact you via WhatsApp?",
                answer:
                  "Absolutely. WhatsApp at +86 13786871098 is our preferred communication channel for international buyers. It allows instant messaging, photo sharing, and video calls for factory tours. Our team monitors WhatsApp during business hours (Monday–Saturday, 8:00 AM–6:00 PM GMT+8) and typically responds within minutes.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-5 bg-white"
              >
                <h4 className="text-brand-dark mb-2 text-lg">{item.question}</h4>
                <p className="text-brand-muted-dark text-body-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import SectionTitle from "@/components/shared/SectionTitle";
import Breadcrumb from "@/components/shared/Breadcrumb";
import InquiryForm from "@/components/contact/InquiryForm";
import { siteConfig } from "@/data/site-config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { generatePageMeta } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMeta({
  title: "Contact BDGLASS - Get Quote & Inquiry",
  description:
    "Contact Foshan Bodian Glass Co., LTD for glass quotes and inquiries. Send your glass specifications for tempered, insulating, laminated, and craft glass. WhatsApp: +86 13723810568.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <div className="bg-brand-dark py-20">
        <div className="container-page text-center">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-brand-muted text-body-lg max-w-xl mx-auto">
            Get in touch for inquiries, quotes, and partnerships
          </p>
        </div>
      </div>
      <div className="container-page py-4">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      </div>
      <section className="section">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Client Component Form */}
            <InquiryForm />

            {/* Contact Info */}
            <div>
              <SectionTitle title="Get In Touch" align="left" />
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Address</h5>
                    <p className="text-brand-muted-dark text-body-sm">
                      {siteConfig.address.en}
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
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Email</h5>
                    <p className="text-brand-muted-dark text-body-sm">{siteConfig.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <h5 className="text-brand-dark mb-1">Working Hours</h5>
                    <p className="text-brand-muted-dark text-body-sm">
                      Monday - Saturday: 8:00 AM - 6:00 PM (GMT+8)
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

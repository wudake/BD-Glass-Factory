import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function ContactSection() {
  return (
    <section className="section bg-brand-gray/5">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-dark mb-4">Contact BDGLASS — Get Your Glass Quote Today</h2>
            <p className="text-brand-muted-dark mb-8 leading-relaxed">
              Send us your glass sizes, drawings, or project specifications today. Our team
              will reply with a suitable glass solution and competitive quotation within
              24 hours.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h5 className="text-brand-dark font-semibold mb-1">Location</h5>
                  <p className="text-brand-muted-dark text-body-sm">{siteConfig.address.en}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h5 className="text-brand-dark font-semibold mb-1">Phone</h5>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-brand-blue hover:text-brand-blue-light text-body-sm transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-blue" />
                </div>
                <div>
                  <h5 className="text-brand-dark font-semibold mb-1">Email</h5>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand-blue hover:text-brand-blue-light text-body-sm transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-brand-muted-dark text-body-sm">
              <span className="font-semibold text-brand-dark">Main Products:</span>{" "}
              Glass Sheets, Tempered Glass, Laminated Glass, Insulated Glass, Curtain Wall Glass,
              Glass Railings, Glass Partitions, Shower Room Glass, Custom Project Glass
            </div>
          </div>

          {/* Inquiry Form Placeholder / Quick Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h3 className="text-brand-dark mb-2">Get Your Glass Quote</h3>
            <p className="text-brand-muted-dark text-body-sm mb-6">
              Please send us the following information for a tailored quotation.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["Glass type", "Thickness", "Size", "Quantity"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    className="input-field text-sm py-3"
                  />
                ))}
              </div>
              <input
                type="text"
                placeholder="Application (e.g., curtain wall, shower room)"
                className="input-field text-sm py-3"
              />
              <input
                type="text"
                placeholder="Project drawings, if available (link or description)"
                className="input-field text-sm py-3"
              />
              <input
                type="text"
                placeholder="Destination country or city"
                className="input-field text-sm py-3"
              />
              <button type="submit" className="btn-primary w-full">
                Submit Your Requirements
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

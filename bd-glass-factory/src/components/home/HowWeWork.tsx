import { FileText, MessageCircle, Calculator, ClipboardCheck, Truck } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      step: "Step 1",
      icon: FileText,
      title: "Send Your Requirement",
      desc: "Share your glass type, thickness, size, quantity, drawings, project location, and application.",
    },
    {
      step: "Step 2",
      icon: MessageCircle,
      title: "Get a Recommended Solution",
      desc: "Our team will help check the glass configuration and suggest a suitable processing solution.",
    },
    {
      step: "Step 3",
      icon: Calculator,
      title: "Confirm Quotation & Details",
      desc: "We confirm price, lead time, packaging, technical details, and delivery requirements.",
    },
    {
      step: "Step 4",
      icon: ClipboardCheck,
      title: "Production & Quality Check",
      desc: "Your glass products are processed according to the confirmed specifications and checked before shipment.",
    },
    {
      step: "Step 5",
      icon: Truck,
      title: "Delivery Support",
      desc: "We support packaging and delivery according to export or project requirements.",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">How to Order Glass from Our China Factory</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            A simple, transparent process from inquiry to delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[calc(10%+20px)] right-[calc(10%+20px)] h-0.5 bg-brand-gray-light" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {/* Step Number Circle */}
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-brand-blue/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-brand-blue" />
                </div>

                <h5 className="text-brand-dark mb-2">{item.title}</h5>
                <p className="text-brand-muted-dark text-body-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

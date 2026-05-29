export interface Service {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    title: 'Custom Glass Processing',
    icon: 'Wrench',
    description:
      'Full-range custom glass fabrication to your exact specifications. We process tempered, insulating, laminated, and craft glass with precision CNC cutting, edge grinding, drilling, and polishing — all under one roof at our Foshan factory.',
    details: [
      'CNC precision cutting up to 3,300mm × 12,000mm with ±0.5mm tolerance',
      'Multiple edge finishing: flat polish, pencil, bevel, OG, and custom profiles',
      'Custom drilling, notching, waterjet cutouts, and CNC-milled grooves',
      'Silk-screen printing (up to 6 colors, Pantone matched) and digital ceramic enamel',
      'Tempering, laminating, insulating, and decorative finishing — all in-house',
    ],
  },
  {
    title: 'One-Stop Glass Solution',
    icon: 'Package',
    description:
      'End-to-end service from technical consultation and design review to production, quality inspection, export packaging, and global delivery. We handle the entire supply chain so you can focus on your project, not logistics.',
    details: [
      'Free technical consultation: glass selection, thickness, coating, and configuration advice',
      'Professional DFM review and design support (AI, PDF, DWG, DXF files accepted)',
      'Custom export packaging: plywood crates with cork/rubber separators and desiccant',
      'Full documentation support: CO, Form A, Form E, packing list, commercial invoice',
      'Dedicated account manager and project tracking from order to delivery',
    ],
  },
  {
    title: 'OEM / ODM Service',
    icon: 'Factory',
    description:
      'Private label and custom manufacturing for door/window brands, furniture makers, and architectural projects. We produce glass products under your brand with full confidentiality, consistent quality, and scalable capacity.',
    details: [
      'Custom branding, logo printing, and private label packaging',
      'Flexible MOQ starting from 50 sqm (negotiable for trial orders and samples)',
      'Strict confidentiality and IP protection agreements available',
      'Consistent quality across repeat orders with batch traceability',
      'Fast sampling: 7-10 day prototyping for custom designs and new configurations',
    ],
  },
  {
    title: 'Technical Support',
    icon: 'Lightbulb',
    description:
      'Expert engineering guidance on glass specification, thermal performance, structural design, and installation. Our technical team helps you select the right glass product for every application and climate condition.',
    details: [
      'Glass type selection based on application, climate, and building code requirements',
      'Thermal performance calculation: U-value, SHGC, Tvis, and energy modeling',
      'Wind load and structural glass consultation for curtain walls and railings',
      'Installation guidelines, hardware compatibility, and on-site support coordination',
      'Third-party testing reports and certification documentation (3C, EN, ASTM)',
    ],
  },
  {
    title: 'Global Delivery',
    icon: 'Globe',
    description:
      'Reliable international shipping with proven export experience to Australia, Africa, the Middle East, Cambodia, Vietnam, and Southeast Asia. We optimize container loading, handle customs paperwork, and provide end-to-end logistics support.',
    details: [
      'Sea freight container loading optimization (20GP, 40GP, 40HQ, open-top)',
      'Customs clearance documentation: CO, Form A, Form E, packing list, invoice, BL',
      'Export-standard wooden crate packaging with steel band reinforcement',
      'Marine insurance coverage for all international shipments',
      'Real-time shipment tracking and delivery coordination to your warehouse or job site',
    ],
  },
  {
    title: 'After-Sales Service',
    icon: 'ShieldCheck',
    description:
      'Comprehensive warranty and responsive after-sales support backed by our supplier partnerships. We stand behind every panel we ship with clear warranty terms and rapid response to any quality concerns.',
    details: [
      '10-year warranty on insulating glass seal integrity (butyl primary + silicone secondary seal)',
      '15-year quality guarantee from our silicone sealant supplier on adhesion performance',
      'Quality inquiry response within 24 hours with photo/video analysis',
      'Replacement glass processing for verified defects (shipping cost responsibility defined per case)',
      'Long-term technical support, re-order consultation, and product improvement feedback',
    ],
  },
];

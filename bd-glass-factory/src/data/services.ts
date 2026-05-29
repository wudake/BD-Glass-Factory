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
      'Full-range custom glass fabrication to your exact specifications. We process tempered, insulating, laminated, and craft glass with precision CNC cutting, edge grinding, drilling, and polishing.',
    details: [
      'CNC precision cutting up to 3300mm × 8000mm',
      'Multiple edge finishing options (flat, beveled, polished)',
      'Custom drilling, notching, and cutouts',
      'Silk-screen printing and digital ceramic printing',
      'Custom shapes and sizes with tight tolerances',
    ],
  },
  {
    title: 'One-Stop Glass Solution',
    icon: 'Package',
    description:
      'End-to-end service from measurement and design to production, packaging, and delivery. We handle the entire process so you can focus on your project.',
    details: [
      'Free technical consultation and glass selection advice',
      'Professional measurement and design support',
      'Custom packaging solutions for safe transport',
      'Documentation support (CO, Form A, Form E, etc.)',
      'Project tracking and dedicated account manager',
    ],
  },
  {
    title: 'OEM / ODM Service',
    icon: 'Factory',
    description:
      'Private label and custom manufacturing for door and window brands. We produce glass products under your brand name with flexible cooperation models.',
    details: [
      'Custom branding and packaging',
      'Flexible MOQ tailored to your needs',
      'Confidential production and IP protection',
      'Consistent quality across repeat orders',
      'Fast sampling and prototyping',
    ],
  },
  {
    title: 'Technical Support',
    icon: 'Lightbulb',
    description:
      'Expert technical guidance on glass selection, thermal performance calculation, structural considerations, and installation best practices.',
    details: [
      'Glass type selection based on application requirements',
      'Thermal performance calculation (U-value, SHGC, Tvis)',
      'Wind load and structural glass consultation',
      'Installation guidelines and on-site support',
      'Quality inspection and testing reports',
    ],
  },
  {
    title: 'Global Delivery',
    icon: 'Globe',
    description:
      'Reliable international shipping with export experience to Australia, Africa, Middle East, and Southeast Asia. We handle customs documentation and logistics.',
    details: [
      'Sea freight and container loading optimization',
      'Customs clearance documentation support',
      'Export-standard wooden crate packaging',
      'Insurance coverage for shipments',
      'Real-time shipment tracking',
    ],
  },
  {
    title: 'After-Sales Service',
    icon: 'ShieldCheck',
    description:
      'Comprehensive warranty and responsive after-sales support. Our products come with a 10-year warranty backed by quality material guarantees from our suppliers.',
    details: [
      '10-year product warranty on insulating glass',
      'Quality guarantee from silicone sealant supplier (15-year coverage)',
      'Quick response to quality inquiries within 24 hours',
      'Replacement glass processing service',
      'Long-term technical support and consultation',
    ],
  },
];

export interface Product {
  name: string;
  slug: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: { title: string; description: string }[];
  imagePath: string;
}

export const products: Product[] = [
  {
    name: 'Tempered Glass',
    slug: 'tempered-glass',
    description:
      'High-strength safety glass produced through thermal treatment. Ideal for applications requiring heat resistance and impact resistance. Widely used in furniture, automotive, electronic devices, and building applications.',
    features: [
      '4-5x stronger than ordinary glass',
      'Thermal resistance up to 300°C',
      'Breaks into small granular pieces for safety',
      'Compliant with 3C certification standards',
      'Available in clear, tinted, and low-iron options',
    ],
    specs: [
      { label: 'Thickness', value: '3mm - 19mm' },
      { label: 'Max Size', value: '3300mm × 8000mm' },
      { label: 'Color', value: 'Clear, Ultra Clear, Tinted, Reflective' },
      { label: 'Certification', value: '3C (CCC), EN 12150, ASTM C1048' },
    ],
    applications: [
      {
        title: 'Balcony Windows & Doors',
        description:
          'Used in broken bridge aluminum systems for thermal insulation and safety.',
      },
      {
        title: 'Glass Railings & Handrails',
        description:
          'Transparent, durable, and impact-resistant for staircases and balconies.',
      },
      {
        title: 'Curtain Walls',
        description:
          'Combined with Low-E coatings for energy-efficient building facades.',
      },
      {
        title: 'Shower Enclosures',
        description:
          'Safe and easy-to-clean glass for modern bathroom designs.',
      },
    ],
    imagePath: '/images/products/tempered-glass.jpg',
  },
  {
    name: 'Insulating Glass',
    slug: 'insulating-glass',
    description:
      'Energy-efficient double or triple glazed units with superior thermal and acoustic insulation. Used for building curtain walls, windows, cold storage, and soundproof walls.',
    features: [
      'Excellent thermal insulation performance',
      'Superior sound reduction (up to 35dB)',
      'Available with Low-E coating for energy savings',
      'Argon gas filled for enhanced performance',
      '10-year warranty on seal integrity',
    ],
    specs: [
      { label: 'Thickness', value: '12mm - 52mm (total unit)' },
      { label: 'Max Size', value: '2500mm × 5000mm' },
      { label: 'Spacer', value: '6A / 9A / 12A / 16A / 20A' },
      { label: 'Gas Fill', value: 'Air, Argon, Krypton' },
      { label: 'Certification', value: '3C (CCC), EN 1279, IGCC' },
    ],
    applications: [
      {
        title: 'Building Curtain Walls',
        description:
          'Energy-efficient glass facades for commercial and residential buildings.',
      },
      {
        title: 'Windows & Skylights',
        description:
          'Thermal and sound insulation for comfortable indoor environments.',
      },
      {
        title: 'Cold Storage',
        description:
          'Prevents condensation and maintains temperature for refrigerated spaces.',
      },
      {
        title: 'Office Partitions',
        description:
          'Sound-insulated glass walls with optional internal blinds for privacy.',
      },
    ],
    imagePath: '/images/products/insulating-glass.jpg',
  },
  {
    name: 'Laminated Glass',
    slug: 'laminated-glass',
    description:
      'Multi-layer safety glass bonded with PVB or SGP interlayer. Provides superior security, UV protection, and sound insulation. Commonly used in banks, jewelry stores, museums, and high-security applications.',
    features: [
      'PVB/SGP interlayer holds glass together when broken',
      'Blocks 99% of UV radiation',
      'Excellent sound reduction properties',
      'Multiple layers for enhanced security',
      'Available with colored or printed interlayers',
    ],
    specs: [
      { label: 'Thickness', value: '6.38mm - 60mm' },
      { label: 'Max Size', value: '2500mm × 6000mm' },
      { label: 'Interlayer', value: 'PVB (0.38/0.76/1.14/1.52mm), SGP' },
      { label: 'Certification', value: '3C (CCC), EN 14449, ASTM C1172' },
    ],
    applications: [
      {
        title: 'Glass Railings & Balustrades',
        description:
          'High-strength laminated glass for safety railings and balcony enclosures.',
      },
      {
        title: 'Sunrooms & Skylights',
        description:
          'UV-blocking overhead glass with exceptional safety properties.',
      },
      {
        title: 'Bank & Security Glazing',
        description:
          'Multi-layer bullet-resistant glass for high-security environments.',
      },
      {
        title: 'Glass Floors & Stairs',
        description:
          'Structural glass with high load-bearing capacity and safety.',
      },
    ],
    imagePath: '/images/products/laminated-glass.jpg',
  },
  {
    name: 'Craft Glass',
    slug: 'craft-glass',
    description:
      'Decorative and functional glass products for interior design applications. Used for screens, tabletops, shower partitions, flooring, and decorative lighting. Adds visual beauty and artistic atmosphere to architecture.',
    features: [
      'Available in various patterns and textures',
      'Custom silk-screen printing options',
      'Acid-etched and frosted finishes',
      'Back-painted glass in any RAL color',
      'Digital ceramic printing available',
    ],
    specs: [
      { label: 'Thickness', value: '3mm - 19mm' },
      { label: 'Max Size', value: '2440mm × 3660mm' },
      { label: 'Finish', value: 'Clear, Frosted, Etched, Painted, Patterned' },
      { label: 'Custom', value: 'Digital printing, silk-screen, back-painting' },
    ],
    applications: [
      {
        title: 'Interior Partitions',
        description:
          'Decorative glass screens for modern office and home interiors.',
      },
      {
        title: 'Tabletops & Countertops',
        description:
          'Custom-cut glass with polished edges for furniture applications.',
      },
      {
        title: 'Shower Partitions',
        description:
          'Frosted or patterned glass for stylish bathroom enclosures.',
      },
      {
        title: 'Hotel & Commercial Decor',
        description:
          'Custom decorative glass for high-end hospitality and retail spaces.',
      },
    ],
    imagePath: '/images/products/craft-glass.jpg',
  },
];

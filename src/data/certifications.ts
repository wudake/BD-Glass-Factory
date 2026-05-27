export interface Certification {
  title: string;
  category: 'product' | 'test-report' | 'warranty' | 'membership';
  description: string;
  imagePath: string;
}

export const certifications: Certification[] = [
  {
    title: '3C Certification - Tempered Glass',
    category: 'product',
    description:
      'China Compulsory Certification (CCC) for tempered glass products, issued by the Chinese Safety Glass Certification Center. This mandatory certification ensures our tempered glass meets national safety standards.',
    imagePath: '/images/certifications/3c-tempered.jpg',
  },
  {
    title: 'Insulating Glass Product Certification',
    category: 'product',
    description:
      'Official product certification for insulating glass units, verifying thermal performance, seal durability, and compliance with national and industry standards.',
    imagePath: '/images/certifications/insulating-glass-cert.jpg',
  },
  {
    title: 'Tempered Glass 3C Test Report',
    category: 'test-report',
    description:
      'Comprehensive laboratory test report for tempered glass, including fragmentation test, surface stress measurement, thermal shock resistance, and mechanical strength testing.',
    imagePath: '/images/certifications/3c-test-report.jpg',
  },
  {
    title: '10-Year Product Warranty',
    category: 'warranty',
    description:
      'Our insulating glass products come with a 10-year warranty. Silicone sealant supplied by Chengdu Guibao Science & Technology Co., Ltd with 15-year quality coverage, compliant with GB/T 29755-2013.',
    imagePath: '/images/certifications/warranty-10-year.jpg',
  },
  {
    title: 'Desiccant Quality Guarantee',
    category: 'warranty',
    description:
      'Hollow glass desiccant supplied by Xuyi Botu Concave Earth Co., Ltd, tested by the National Glass Quality Supervision and Inspection Center, compliant with JC/T 2072-2011, with 15-year quality coverage.',
    imagePath: '/images/certifications/desiccant-warranty.jpg',
  },
  {
    title: 'Foshan Safety Production Association',
    category: 'membership',
    description:
      'Member of the Foshan Safety Production Association, demonstrating our commitment to workplace safety and industry best practices in glass manufacturing.',
    imagePath: '/images/certifications/foshan-safety-association.jpg',
  },
  {
    title: 'China Architectural Glass & Industrial Glass Association',
    category: 'membership',
    description:
      'Member of the national association for architectural and industrial glass, connecting us with industry standards, technology advancements, and peer collaboration.',
    imagePath: '/images/certifications/glass-association.jpg',
  },
  {
    title: 'Guangdong Door & Window Association',
    category: 'membership',
    description:
      'Member of the Guangdong Door and Window Association, fostering collaboration with door and window manufacturers across the supply chain.',
    imagePath: '/images/certifications/door-window-association.jpg',
  },
];

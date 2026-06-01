export const siteConfig = {
  name: 'BDGLASS',
  fullName: 'Foshan Bodian Glass Co., LTD',
  domain: 'bdglassfactory.com',
  tagline: 'Professional Glass Manufacturer in China',
  description:
    'Foshan Bodian Glass Co., LTD is a professional glass manufacturer specializing in tempered glass, insulating glass, laminated glass and craft glass. 3C certified, exporting to Australia, Africa, Middle East and Southeast Asia.',

  address: {
    en: 'No.23, North Garden Road, Shishan Town, Nanhai District, Foshan City, Guangdong Province, China',
    zh: '广东省佛山市南海区狮山镇北园路23号',
  },

  phone: '+86 13723810568',
  email: 'info@bdglassfactory.com',
  whatsapp: '+8613723810568',

  founded: 2019,
  baseArea: '15,000 ㎡',
  employees: '80+',
  avgAge: 29,
  productionLines: 5,

  exportCountries: [
    'Australia',
    'Africa',
    'Middle East',
    'Cambodia',
    'Vietnam',
  ],

  social: {
    linkedin: '',
    facebook: '',
    youtube: '',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

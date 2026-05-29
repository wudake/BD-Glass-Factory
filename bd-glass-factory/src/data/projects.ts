export interface Project {
  name: string;
  slug: string;
  location: string;
  area: string;
  config: string;
  description: string;
  imagePath: string;
}

export const projects: Project[] = [
  {
    name: 'Shenzhen Guangqi Future Center',
    slug: 'shenzhen-guangqi-future-center',
    location: 'Shenzhen, Guangdong',
    area: '28,000 ㎡',
    config: '6+12A+6LOW-E+1.52PVB+6 / 6+12A+6LOW-E+1.52PVB+6',
    description:
      'A landmark commercial complex featuring high-performance insulating laminated glass for the building facade. The dual-layer configuration provides exceptional thermal insulation and safety performance.',
    imagePath: '/images/projects/guangqi-future-center.jpg',
  },
  {
    name: 'Foshan European Industrial Park',
    slug: 'foshan-european-industrial-park',
    location: 'Guangdong, Foshan',
    area: '21,000 ㎡',
    config: '8LOW-E+12A+8 / 6LOW-E+12A+6',
    description:
      'Large-scale industrial park development utilizing Low-E insulating glass for energy-efficient building envelopes. Multiple glass configurations tailored to different building zones.',
    imagePath: '/images/projects/european-industrial-park.jpg',
  },
  {
    name: 'Shenzhen Bright Science City',
    slug: 'shenzhen-bright-science-city',
    location: 'Shenzhen, Guangdong',
    area: '16,000 ㎡',
    config: '8LOW-E+12A+8 / 6LOW-E+12A+6',
    description:
      'Modern science and technology campus featuring energy-efficient Low-E insulating glass curtain walls. The glass configuration balances natural light transmission with thermal performance.',
    imagePath: '/images/projects/bright-science-city.jpg',
  },
  {
    name: 'Panyu Huge Industrial Park',
    slug: 'panyu-huge-industrial-park',
    location: 'Guangdong, Foshan',
    area: '15,000 ㎡',
    config: '8LOW-E+12A+6+1.52PVB+6 / 6LOW-E+12A+6',
    description:
      'Major industrial park project combining Low-E insulating glass with laminated safety glass for enhanced security and thermal performance in industrial buildings.',
    imagePath: '/images/projects/panyu-industrial-park.jpg',
  },
  {
    name: 'Zhuhai Golden Bay Aviation New City',
    slug: 'zhuhai-golden-bay-aviation',
    location: 'Guangdong, Zhuhai',
    area: '10,000 ㎡',
    config: '8LOW-E+12A+8 / 6LOW-E+12A+6',
    description:
      'Prestigious aviation industry development featuring high-performance glass for modern office buildings. The glass specification ensures optimal daylight and energy efficiency.',
    imagePath: '/images/projects/golden-bay-aviation.jpg',
  },
  {
    name: 'Foshan Shadi Airport',
    slug: 'foshan-shadi-airport',
    location: 'Guangdong, Foshan',
    area: '5,000 ㎡',
    config: '10LOW-E+12A+10 / 6LOW-E+12A+6',
    description:
      'Airport terminal glazing project requiring high-performance thick insulating glass for thermal and acoustic insulation in a transportation environment with strict safety requirements.',
    imagePath: '/images/projects/shadi-airport.jpg',
  },
];

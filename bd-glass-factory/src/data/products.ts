export interface Product {
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: { title: string; description: string }[];
  faq?: { question: string; answer: string }[];
  relatedProducts?: { name: string; slug: string; description: string }[];
  imagePath: string;
  galleryImages?: string[];
  certifications?: string[];
}

export const products: Product[] = [
  {
    name: 'Tempered Glass',
    slug: 'tempered-glass',
    description:
      'BDGLASS manufactures 3-19mm tempered safety glass (toughened glass) at our 15,000㎡ factory in Foshan, China. 4-5× stronger than ordinary glass. 3C (CCC), EN 12150 certified. Max size 3,300×8,000mm. Factory direct pricing for builders, contractors, and window manufacturers.',
    longDescription:
      'BDGLASS manufactures high-quality tempered glass (also known as toughened glass or heat-strengthened glass) at our 15,000㎡ factory in Foshan, Guangdong, China. Through advanced thermal treatment using SouthTech tempering furnaces, we transform ordinary annealed glass into safety glass that is 4 to 5 times stronger than standard float glass.\n\nTempered glass is produced by heating ordinary glass to approximately 700°C and then cooling it rapidly with forced air drafts. This process creates compressive stress on the glass surface and tensile stress in the interior, dramatically improving its mechanical strength and thermal resistance. When broken, tempered glass shatters into small, blunt granular pieces rather than sharp shards — significantly reducing the risk of injury.\n\nWe supply tempered glass in thicknesses ranging from 3mm to 19mm, with a maximum processing size of 3,300mm × 8,000mm. Our production capabilities cover clear glass, ultra-clear (low-iron) glass, tinted glass, and reflective glass substrates. All products comply with Chinese 3C (CCC) compulsory certification, EN 12150 European standards, and ASTM C1048 American standards.',
    features: [
      '4-5× Stronger Than Ordinary Glass — Impact resistance tested to GB 15763.2 and EN 12150 standards. Suitable for high-traffic areas and safety-critical applications.',
      'Thermal Resistance Up to 300°C — Can withstand temperature differentials of 300°C without thermal breakage. Ideal for building facades and environments with direct sunlight exposure.',
      'Breaks Into Small Granular Pieces — Unlike ordinary glass that forms dangerous shards, tempered glass fractures into small blunt fragments, significantly reducing injury risk.',
      '3C (CCC) Certified & Export Standards — Compliant with Chinese compulsory certification (CCC), European EN 12150, and American ASTM C1048. Test reports available for project orders.',
      'Clear, Tinted, Low-Iron & Reflective Options — Available in clear, ultra-clear (low-iron), grey, bronze, blue, green, and reflective glass. Custom edge polishing, drilling, and cutouts supported.',
    ],
    specs: [
      { label: 'Thickness', value: '3mm, 4mm, 5mm, 6mm, 8mm, 10mm, 12mm, 15mm, 19mm' },
      { label: 'Max Size', value: '3,300mm × 8,000mm' },
      { label: 'Color Options', value: 'Clear, Ultra Clear (Low-Iron), Grey, Bronze, Blue, Green, Reflective' },
      { label: 'Edge Types', value: 'Flat polish, pencil edge, beveled edge, OG edge' },
      { label: 'Hole & Cutout', value: 'CNC precision drilling, waterjet cutting available' },
      { label: 'Certification', value: '3C (CCC), EN 12150, ASTM C1048, AS/NZS 2208' },
      { label: 'Production Standard', value: 'GB 15763.2, EN 12150-1, ASTM C1048' },
      { label: 'Thermal Resistance', value: 'Up to 300°C temperature differential' },
      { label: 'Surface Compression', value: '≥ 90 MPa' },
      { label: 'Fragmentation', value: '≥ 40 particles per 50×50mm test area (3C standard)' },
      { label: 'MOQ', value: '50 sqm or negotiable for trial orders' },
      { label: 'Lead Time', value: '7-15 working days' },
    ],
    applications: [
      {
        title: 'Curtain Walls & Building Facades',
        description:
          'Tempered glass is the standard choice for modern building curtain walls. Combined with Low-E coatings and laminated layers, it provides structural safety, thermal insulation, and UV protection for commercial towers and residential complexes.',
      },
      {
        title: 'Windows & Doors',
        description:
          'Used in aluminum window and door systems, tempered glass offers safety compliance and durability for both interior and exterior openings. Broken bridge aluminum frames with tempered glass provide excellent thermal insulation performance.',
      },
      {
        title: 'Glass Railings & Balustrades',
        description:
          'Frameless and semi-frameless glass railing systems rely on tempered glass for safety compliance. Our 10-15mm tempered glass meets load-bearing requirements for balconies, staircases, and pool fences.',
      },
      {
        title: 'Shower Enclosures & Bathrooms',
        description:
          'Tempered glass is the industry standard for shower doors and bathroom partitions. Our 6-10mm tempered glass with polished edges and precision-drilled hinge holes ensures safe, leak-free installation.',
      },
      {
        title: 'Glass Partitions & Office Interiors',
        description:
          'Create modern, transparent workspaces with tempered glass partitions. Available in clear, frosted, or silk-screen printed finishes for privacy and branding.',
      },
      {
        title: 'Furniture & Commercial Displays',
        description:
          'Tempered glass tabletops, shelves, and display cases offer durability and safety for retail stores, hotels, and residential interiors. Custom shapes and edge finishes available.',
      },
    ],
    faq: [
      {
        question: 'What is the difference between tempered glass and ordinary glass?',
        answer:
          'Tempered glass (toughened glass) is 4-5 times stronger than ordinary annealed glass of the same thickness. It is produced by heating glass to ~700°C and rapidly cooling it, which creates surface compression. When broken, tempered glass shatters into small blunt pieces instead of dangerous sharp shards.',
      },
      {
        question: 'What thickness of tempered glass should I choose?',
        answer:
          '3-5mm for small windows and furniture; 6-8mm for standard windows, shower doors, and partitions; 10-12mm for glass railings and large windows; 15-19mm for structural glass floors and curtain walls. Contact us for project-specific recommendations.',
      },
      {
        question: 'Can tempered glass be cut or drilled after tempering?',
        answer:
          'No. Tempered glass cannot be cut, drilled, or edge-worked after the tempering process. All cutting, hole drilling, and edge polishing must be completed before tempering. Please provide accurate dimensions and drawings when placing your order.',
      },
      {
        question: 'What certifications does your tempered glass have?',
        answer:
          'Our tempered glass is certified under Chinese 3C (CCC) compulsory certification. We also comply with EN 12150 (European standard) and ASTM C1048 (American standard). Test reports and certificates are available for project orders.',
      },
      {
        question: 'What is your MOQ and lead time for tempered glass?',
        answer:
          'Our standard MOQ is 50 square meters, but we are flexible for trial orders and small batches. Standard lead time is 7-15 working days depending on quantity, thickness, and processing requirements (edge work, holes, cutouts).',
      },
      {
        question: 'Do you supply tempered glass with Low-E coating?',
        answer:
          'Yes. We can supply Low-E tempered glass for energy-efficient applications. Low-E tempered glass can be further processed into insulated glass units (IGU) or laminated glass configurations for curtain walls and high-performance windows.',
      },
      {
        question: 'Can you deliver tempered glass to my country?',
        answer:
          'Yes. We have export experience to Australia, Africa, the Middle East, and Southeast Asia. We provide professional export packaging (plywood crates with cork separators) and can assist with shipping logistics including FOB, CIF, and DDP arrangements.',
      },
    ],
    relatedProducts: [
      {
        name: 'Insulating Glass',
        slug: 'insulating-glass',
        description:
          'Combine tempered glass with Low-E coating and argon gas fill for superior thermal and acoustic insulation.',
      },
      {
        name: 'Laminated Glass',
        slug: 'laminated-glass',
        description:
          'Add a PVB or SGP interlayer to tempered glass for enhanced security and UV protection.',
      },
      {
        name: 'Curtain Wall Glass',
        slug: 'curtain-wall-glass',
        description:
          'Custom configurations of tempered, laminated, and insulated glass for commercial building facades.',
      },
    ],
    imagePath: '/images/products/tempered-glass.webp',
  },
  {
    name: 'Insulating Glass',
    slug: 'insulating-glass',
    description:
      'BDGLASS manufactures insulating glass units (IGU) in China. Double and triple glazed units with Low-E coating and argon gas fill. 12-52mm total thickness, up to 2500×5000mm. 3C (CCC), EN 1279 certified. 10-year seal warranty.',
    longDescription:
      'BDGLASS manufactures high-performance insulating glass units (IGU), also known as double glazed glass or hollow glass, at our 15,000㎡ factory in Foshan, Guangdong, China. Our insulating glass combines two or more glass panes separated by aluminum or warm-edge spacers, with the cavity filled with dry air or inert gas (argon or krypton) to achieve superior thermal and acoustic insulation.\n\nInsulating glass is a prefabricated unit consisting of two or more glass panes separated by a spacer and sealed around the perimeter. The space between the panes is filled with dry air or inert gas to reduce heat transfer. When combined with Low-E (low-emissivity) coatings, insulating glass can reduce thermal transmittance (U-value) to as low as 1.0 W/m²K — significantly improving building energy efficiency.\n\nWe supply insulating glass in total thicknesses from 12mm to 52mm, with a maximum processing size of 2,500mm × 5,000mm. Spacer options include 6A, 9A, 12A, 16A, and 20A aluminum spacers or warm-edge spacers. Gas fill options include dry air, argon (standard), and krypton (premium). All products comply with Chinese 3C (CCC) certification, European EN 1279 standards, and IGCC (Insulating Glass Certification Council) requirements.',
    features: [
      'Excellent Thermal Insulation — U-Value as Low as 1.0 W/m²K: Double or triple glazing with Low-E coating and argon gas fill dramatically reduces heat transfer. Compliant with energy codes for green buildings and passive house standards.',
      'Superior Sound Reduction Up to 35dB: When combined with a laminated outer pane, our IGU effectively reduces external noise from traffic, aircraft, and machinery. Ideal for buildings near highways and airports.',
      'Low-E Coating for Energy Savings: Single-silver, double-silver, and triple-silver Low-E coatings available. Reduces solar heat gain in summer and heat loss in winter, lowering HVAC costs by 30-50%.',
      'Argon Gas Filled for Enhanced Performance: Argon gas (standard) or krypton gas (premium) fill improves thermal performance by 15-20% compared to air-filled units. Gas retention tested to EN 1279-3.',
      '10-Year Warranty on Seal Integrity: Our butyl primary seal and silicone secondary seal are manufactured under controlled humidity conditions. Backed by a 10-year warranty against fogging and seal failure.',
    ],
    specs: [
      { label: 'Total Thickness', value: '12mm - 52mm (double), 36mm - 80mm (triple)' },
      { label: 'Max Size', value: '2,500mm × 5,000mm' },
      { label: 'Glass Types', value: 'Clear, Ultra Clear, Low-E, Tinted, Reflective, Laminated' },
      { label: 'Spacer', value: '6A / 9A / 12A / 16A / 20A (Aluminum or Warm Edge)' },
      { label: 'Gas Fill', value: 'Dry Air, Argon (standard), Krypton (premium)' },
      { label: 'Primary Seal', value: 'High-quality butyl rubber (low water vapor transmission)' },
      { label: 'Secondary Seal', value: 'Silicone or polysulfide structural sealant' },
      { label: 'Desiccant', value: 'Molecular sieve 3A (high moisture absorption capacity)' },
      { label: 'U-Value Range', value: '1.0 - 3.0 W/m²K (depending on configuration)' },
      { label: 'Sound Reduction', value: 'Up to 35dB (with laminated outer pane)' },
      { label: 'Certification', value: '3C (CCC), EN 1279, IGCC' },
      { label: 'Warranty', value: '10-year seal integrity warranty' },
      { label: 'MOQ', value: '50 sqm or negotiable for trial orders' },
      { label: 'Lead Time', value: '10-20 working days' },
    ],
    applications: [
      {
        title: 'Building Curtain Walls',
        description:
          'Insulating glass is the standard for modern commercial curtain walls. Our Low-E double-glazed units provide thermal insulation, solar control, and structural safety for high-rise office towers, hotels, and shopping malls.',
      },
      {
        title: 'Windows & Skylights',
        description:
          'Aluminum window and door systems with insulating glass reduce heat loss in winter and heat gain in summer. Optional tilt-and-turn hardware with internal blinds for privacy and light control.',
      },
      {
        title: 'Cold Storage & Refrigeration',
        description:
          'Our insulating glass prevents condensation and maintains temperature for cold storage facilities, refrigerated display cases, and walk-in freezers. Special configurations with heated edge spacers available for extreme cold.',
      },
      {
        title: 'Soundproof Walls & Studios',
        description:
          'Triple glazing with laminated glass achieves up to 45dB sound reduction. Ideal for recording studios, conference rooms, hospital patient rooms, and residential buildings near highways.',
      },
      {
        title: 'Passive House & Green Buildings',
        description:
          'Triple-glazed Low-E insulating glass with warm-edge spacers achieves U-values below 1.0 W/m²K — meeting passive house standards and LEED certification requirements.',
      },
      {
        title: 'High-End Residential Villas',
        description:
          'Large-format insulating glass windows and sliding doors for luxury villas. Options include ultra-clear glass for maximum light transmission, internal blinds, and tinted glass for privacy.',
      },
    ],
    faq: [
      {
        question: 'What is the difference between insulating glass and ordinary double glazing?',
        answer:
          'Insulating glass (IGU) is a factory-sealed unit with dry air or inert gas between the panes, separated by a spacer with desiccant. Ordinary double glazing often refers to two separate panes installed in a window frame without a sealed cavity. IGU provides superior thermal and acoustic performance because the sealed gas layer and desiccant prevent condensation and maintain insulation over time.',
      },
      {
        question: 'What is Low-E coating and do I need it?',
        answer:
          'Low-E (low-emissivity) coating is a thin metallic layer applied to the glass surface that reflects infrared heat while allowing visible light to pass through. For buildings in hot climates, Low-E reduces solar heat gain and lowers cooling costs. For cold climates, it reflects indoor heat back into the room. We strongly recommend Low-E coating for all energy-efficient building projects.',
      },
      {
        question: 'What spacer should I choose — aluminum or warm edge?',
        answer:
          'Aluminum spacers are cost-effective and suitable for most standard applications. Warm-edge spacers (made of stainless steel or composite materials) have lower thermal conductivity and reduce heat loss at the glass edge by 30-50%. Warm-edge is recommended for passive house projects, green buildings, and cold climate applications.',
      },
      {
        question: 'Can insulating glass be tempered or laminated?',
        answer:
          'Yes. The individual glass panes in an IGU can be tempered, laminated, or heat-strengthened depending on safety and performance requirements. For curtain walls and high-rise buildings, we typically use tempered outer pane + tempered inner pane. For soundproofing, a laminated outer pane improves acoustic performance.',
      },
      {
        question: 'What is your MOQ and lead time for insulating glass?',
        answer:
          'Our standard MOQ is 50 square meters. Lead time is 10-20 working days depending on configuration complexity (Low-E coating, triple glazing, warm-edge spacer, internal blinds). Large project orders may require 25-30 working days.',
      },
      {
        question: 'How do you ensure seal quality during shipping?',
        answer:
          'We use plywood crates with cork or rubber separators between each IGU. Desiccant bags are placed inside the crate to absorb moisture. Units are sealed with plastic film to prevent dust and water ingress. For ocean shipping, we recommend FOB or CIF terms with professional loading supervision.',
      },
      {
        question: 'What certifications does your insulating glass have?',
        answer:
          'Our insulating glass is certified under Chinese 3C (CCC) compulsory certification. We also comply with EN 1279 (European insulating glass standard) and IGCC (Insulating Glass Certification Council) requirements. Test reports for gas retention, dew point, and UV transmittance are available for project orders.',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'The outer and inner panes of our IGU are made of tempered glass for safety and strength. Custom thicknesses from 3mm to 19mm available.',
      },
      {
        name: 'Laminated Glass',
        slug: 'laminated-glass',
        description:
          'Add a laminated outer pane to your IGU for enhanced sound insulation, UV blocking, and security against break-ins.',
      },
      {
        name: 'Curtain Wall Glass',
        slug: 'curtain-wall-glass',
        description:
          'Complete curtain wall solutions combining insulating glass with aluminum framing systems and structural silicone.',
      },
    ],
    imagePath: '/images/products/insulating-glass.webp',
  },
  {
    name: 'Laminated Glass',
    slug: 'laminated-glass',
    description:
      'BDGLASS manufactures PVB and SGP laminated glass in China. 6.38-60mm thickness, max 2500×6000mm. 99% UV blocking, bullet-resistant options. 3C/EN 14449 certified. Factory direct pricing for security and architectural projects.',
    longDescription:
      'BDGLASS manufactures high-performance laminated glass with PVB (polyvinyl butyral) and SGP (SentryGlas Plus) interlayers at our 15,000㎡ factory in Foshan, Guangdong, China. Laminated glass is a multi-layer safety product created by bonding two or more glass panes with a durable plastic interlayer under heat and pressure. Even when broken, the interlayer holds the glass fragments in place — preventing them from falling and causing injury.\n\nPVB interlayer (0.38mm to 1.52mm thickness) is the standard choice for most applications, offering excellent clarity, sound insulation, and UV blocking. SGP interlayer provides 5× higher tear strength and 100× better rigidity than PVB, making it the preferred choice for structural glass applications such as glass floors, structural fins, and hurricane-resistant glazing.\n\nWe supply laminated glass in thicknesses from 6.38mm to 60mm, with a maximum processing size of 2,500mm × 6,000mm. Standard configurations include 6.38mm (3+0.38+3), 8.38mm (4+0.38+4), 10.38mm (5+0.38+5), 12.38mm (6+0.38+6), and thicker multi-layer combinations for bullet-resistant applications. All products comply with Chinese 3C (CCC) certification, European EN 14449 standards, and American ASTM C1172 requirements.',
    features: [
      'PVB/SGP Interlayer Holds Glass Together When Broken: Even if shattered, the plastic interlayer keeps glass fragments bonded to the sheet — preventing them from falling and causing injury. Compliant with EN 14449 and ASTM C1172 safety standards.',
      'Blocks 99% of UV Radiation: Clear PVB interlayer filters out 99% of harmful UV rays, protecting interior furnishings, artwork, and occupants from sun damage while maintaining excellent visible light transmission.',
      'Excellent Sound Reduction Up to 40dB: Acoustic-grade PVB interlayer significantly reduces external noise from traffic, aircraft, and construction. Ideal for buildings near highways, airports, and urban centers.',
      'Multiple Layers for Enhanced Security & Bullet Resistance: Standard 2-ply for general safety. 3-ply to 7-ply configurations available for bullet-resistant glazing (Level 1-3) used in banks, embassies, and military facilities.',
      'Colored, Printed & Gradient Interlayers: Custom interlayer colors and digital printing available for branding, privacy, and decorative effects. Gradient interlayers create smooth transitions from opaque to transparent.',
    ],
    specs: [
      { label: 'Total Thickness', value: '6.38mm - 60mm (standard), up to 100mm (bullet-resistant)' },
      { label: 'Max Size', value: '2,500mm × 6,000mm' },
      { label: 'Glass Types', value: 'Clear, Ultra Clear, Tempered, Heat-Strengthened, Tinted, Reflective' },
      { label: 'Interlayer — PVB', value: '0.38mm / 0.76mm / 1.14mm / 1.52mm (standard)' },
      { label: 'Interlayer — SGP', value: '0.89mm / 1.52mm / 2.28mm (structural grade)' },
      { label: 'Interlayer Colors', value: 'Clear, White, Grey, Bronze, Blue, Green, Custom printed' },
      { label: 'UV Blocking', value: '99% of UV radiation (with clear PVB)' },
      { label: 'Sound Reduction', value: 'Up to 40dB (with acoustic PVB)' },
      { label: 'Impact Resistance', value: 'Compliant with EN 14449 Level 1-2, ASTM C1172' },
      { label: 'Bullet Resistance', value: 'Level 1-3 available (3-ply to 7-ply configurations)' },
      { label: 'Certification', value: '3C (CCC), EN 14449, ASTM C1172' },
      { label: 'MOQ', value: '50 sqm or negotiable for trial orders' },
      { label: 'Lead Time', value: '10-20 working days' },
    ],
    applications: [
      {
        title: 'Glass Railings & Balustrades',
        description:
          'Laminated glass is the safety standard for frameless and semi-frameless railings. Our 10-15mm laminated tempered glass meets impact resistance requirements for balconies, staircases, and pool enclosures. SGP interlayer recommended for structural railings without top rail.',
      },
      {
        title: 'Curtain Walls & Overhead Canopies',
        description:
          'Laminated glass with SGP interlayer provides structural safety for point-supported curtain walls and overhead canopies. Even if broken, the glass remains in place until replacement — preventing injury to people below.',
      },
      {
        title: 'Bank & Security Glazing',
        description:
          'Multi-layer bullet-resistant laminated glass (3-ply to 7-ply) for bank counters, jewelry stores, museums, and high-security checkpoints. Compliant with international bullet resistance standards.',
      },
      {
        title: 'Sunrooms & Skylights',
        description:
          'UV-blocking laminated glass protects interior furnishings and occupants from sun damage while providing natural daylight. Heat-strengthened laminated glass recommended for overhead installations to reduce thermal stress.',
      },
      {
        title: 'Glass Floors & Stairs',
        description:
          'Structural laminated glass with SGP interlayer achieves high load-bearing capacity for glass floors, stair treads, and observation decks. Slip-resistant surface treatment available for pedestrian safety.',
      },
      {
        title: 'Hurricane-Resistant Windows',
        description:
          'SGP laminated glass meets Miami-Dade County hurricane impact requirements. The high-strength interlayer withstands wind-borne debris impact and maintains building envelope integrity during storms.',
      },
    ],
    faq: [
      {
        question: 'What is the difference between PVB and SGP interlayer?',
        answer:
          'PVB (polyvinyl butyral) is the standard interlayer for most laminated glass applications. It offers excellent clarity, UV blocking, and sound insulation at a competitive price. SGP (SentryGlas Plus) is an ionoplast interlayer with 5× higher tear strength and 100× better rigidity than PVB. SGP is recommended for structural applications, hurricane-resistant glazing, and glass floors where higher strength is required.',
      },
      {
        question: 'Can laminated glass be tempered?',
        answer:
          'Yes. In fact, most architectural laminated glass uses tempered or heat-strengthened glass panes for enhanced safety and strength. Tempered laminated glass combines the impact resistance of tempering with the post-breakage safety of the interlayer. Heat-strengthened laminated glass is often preferred for overhead applications because it breaks into larger pieces that are easier for the interlayer to hold.',
      },
      {
        question: 'What thickness of laminated glass do I need for railings?',
        answer:
          'For residential glass railings, 10.38mm (5+0.38+5) or 12.38mm (6+0.38+6) laminated tempered glass is standard. For commercial and high-traffic areas, 13.52mm (6+1.52+6) or thicker is recommended. For structural railings without a top handrail, SGP interlayer is required to meet building code requirements.',
      },
      {
        question: 'Does laminated glass block UV rays?',
        answer:
          'Yes. Standard clear PVB interlayer blocks approximately 99% of UV radiation (UVA and UVB). This protects interior furnishings, artwork, and flooring from fading and discoloration caused by sun exposure. For even higher UV protection, specialized UV-blocking interlayers are available.',
      },
      {
        question: 'What is your MOQ and lead time for laminated glass?',
        answer:
          'Our standard MOQ is 50 square meters. Lead time is 10-20 working days for standard configurations. Custom interlayer colors, printed designs, or bullet-resistant configurations may require 20-30 working days. Trial orders and sample pieces are negotiable.',
      },
      {
        question: 'Can you supply bullet-resistant laminated glass?',
        answer:
          'Yes. We supply multi-layer bullet-resistant laminated glass in 3-ply, 5-ply, and 7-ply configurations. Protection levels range from Level 1 (handgun) to Level 3 (high-powered rifle). Ballistic test reports and certificates are available for project orders. Please provide your specific security requirements for recommendations.',
      },
      {
        question: 'How do you prevent interlayer damage during shipping?',
        answer:
          'Laminated glass is packaged in plywood crates with soft cork or rubber separators between each sheet. Crates are reinforced with steel bands and marked with "Fragile — Handle With Care" labels. For ocean shipping, we recommend FOB or CIF terms with professional loading supervision to prevent edge damage that could affect interlayer adhesion.',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'The individual glass panes in our laminated glass can be tempered for enhanced strength and safety. Available in 3-19mm thicknesses.',
      },
      {
        name: 'Insulating Glass',
        slug: 'insulating-glass',
        description:
          'Combine laminated glass with a tempered inner pane to create a laminated insulating glass unit (IGU) for thermal insulation, soundproofing, and security.',
      },
      {
        name: 'Curtain Wall Glass',
        slug: 'curtain-wall-glass',
        description:
          'Complete curtain wall solutions with laminated outer pane + tempered inner pane for safety, thermal performance, and structural integrity.',
      },
    ],
    imagePath: '/images/products/laminated-glass.webp',
  },
  {
    name: 'Craft Glass',
    slug: 'craft-glass',
    description:
      'BDGLASS is a custom craft glass manufacturer in China. Acid etched, frosted, silk screen, digital enamel, hot melting, carved, patterned & stained glass. 3-25mm, max 3300×12000mm. Pantone color matching. Factory direct for hotels, churches & villas.',
    longDescription:
      'BD Glass Factory is a leading craft glass manufacturer based in Hebei, China, specializing in custom decorative glass solutions for architects, interior designers, contractors, and furniture makers worldwide. With over 15 years of production experience, our factory produces a comprehensive range of decorative glass types including acid etched glass, frosted glass, silk screen printed glass, digital ceramic enamel glass, hot melting glass, carved glass, patterned / figured glass, and traditional stained glass panels.\n\nOur craft glass production capabilities cover the full spectrum of decorative techniques. Acid Etched Glass is a permanent, fingerprint-resistant surface finish created by chemically treating the glass surface with hydrofluoric acid. Available in full-surface or partial design-pattern etching, with gradient effects possible. Ideal for bathroom partitions, office privacy screens, and shower enclosures.\n\nFrosted Glass is produced by sandblasting or acid etching to create a translucent, matte surface that diffuses light while maintaining privacy. Thickness ranges from 3mm to 15mm. Custom frosting patterns and logos can be applied per your design files.\n\nSilk Screen Printed Glass uses ceramic frit inks screen-printed onto glass and fired at 680°C, creating a permanent, weather-resistant colored surface. Supports up to 6 colors per design, with Pantone matching available. Perfect for spandrel panels, decorative façades, and branded storefronts.\n\nDigital Ceramic Enamel Glass applies ceramic inks directly onto glass with photographic precision using advanced digital printing technology. Unlimited color range, high-resolution imagery, and full weather resistance make this ideal for large-scale artistic installations and building façades.\n\nHot Melting Glass is produced by heating glass to its softening point and molding it into three-dimensional relief patterns using custom metal molds. Creates dramatic tactile surfaces for feature walls, bar countertops, and luxury hotel lobbies. Mold tooling is fully customizable.\n\nCarved / Deep-Engraved Glass uses CNC carving or hand-engraving techniques to create deep, three-dimensional designs in glass up to 19mm thick. Popular for luxury residential entry doors, hotel feature panels, and commemorative installations.\n\nPatterned / Figured Glass is manufactured by passing molten glass through patterned rollers during production. Classic patterns include Flora, Karatach, Mistlite, Nashiji, Aqualite, and Diamond. Available in clear, tinted, and wired variants.\n\nStained Glass uses traditional leaded or copper-foil techniques to assemble panels from individually cut colored glass pieces. Suitable for churches, heritage restoration projects, and decorative windows.\n\nAll decorative glass products undergo strict quality inspection including surface defect checking, dimensional accuracy verification, color consistency testing, and adhesion tests for printed and enamel coatings. We accept custom designs in AI, PDF, DWG, or DXF formats. Sample production turnaround is 7-10 days, with bulk orders delivered within 3-4 weeks.',
    features: [
      '8+ Decorative Techniques — All Under One Roof: Acid etched, frosted, silk screen, digital enamel, hot melting, carved, patterned, and stained glass. No need to coordinate multiple suppliers for different decorative finishes.',
      'Custom Design Support with Free DFM Feedback: Submit your AI, PDF, DWG, or DXF files. Our design team provides free design-for-manufacturing feedback and rendering previews before production begins.',
      'Pantone Color Matching with ΔE ≤ 2.0 Accuracy: Silk screen and digital enamel printing support precise Pantone color matching. Physical color samples are produced for client approval on large orders.',
      'Weather-Resistant Ceramic Coatings Fired at 680°C+: Ceramic frit and enamel coatings are permanently bonded to the glass surface, providing UV stability and scratch resistance for both interior and exterior applications.',
      'Combined Safety Processing Available: Decorative finishes can be applied to tempered, laminated, or insulating glass substrates — achieving both aesthetic impact and safety compliance in a single product.',
    ],
    specs: [
      { label: 'Glass Thickness', value: '3mm — 25mm' },
      { label: 'Max Panel Size', value: '2440 × 6000mm (digital print); 3300 × 12000mm (etched/frosted)' },
      { label: 'Decorative Techniques', value: 'Acid etching, sandblasting, silk screen, digital enamel, hot melting, carving, patterned rolling, stained assembly' },
      { label: 'Substrate Types', value: 'Clear float, ultra-clear (low-iron), tinted, tempered, laminated, mirror, insulating glass' },
      { label: 'Color Options', value: 'Pantone matched (screen/enamel); standard tinted colors (patterned); unlimited (digital print)' },
      { label: 'Pattern Library', value: '50+ standard patterned glass designs; custom patterns from client tooling' },
      { label: 'Surface Finish', value: 'Gloss, matte, satin, textured, 3D relief' },
      { label: 'Light Transmission', value: '5% — 92% (varies by technique and substrate)' },
      { label: 'UV Stability', value: 'Permanent for fired ceramic coatings; 10+ years for quality etched finishes' },
      { label: 'Scratch Resistance', value: '≥ 4H pencil hardness (ceramic enamel)' },
      { label: 'Combined Processing', value: 'Tempering, laminating, insulating, edging, drilling, cutouts' },
      { label: 'Design File Formats', value: 'AI, PDF, DWG, DXF, PSD, TIFF (≥ 300 DPI for raster images)' },
      { label: 'Lead Time', value: 'Samples: 7-10 days; Bulk: 3-4 weeks' },
    ],
    applications: [
      {
        title: 'Hotel Lobbies & Feature Walls',
        description:
          'Large-scale decorative glass panels create stunning visual focal points in luxury hotel interiors. Hot melting and carved glass are especially popular for creating dramatic first impressions in reception areas and atriums.',
      },
      {
        title: 'Religious & Heritage Buildings',
        description:
          'Stained glass windows for churches, mosques, and temples; heritage restoration projects requiring traditional leaded glass craftsmanship with period-accurate colors and techniques.',
      },
      {
        title: 'Residential Interiors',
        description:
          'Frosted and acid etched glass for bathroom partitions, shower enclosures, kitchen backsplashes, and wardrobe doors. Privacy without sacrificing natural light transmission.',
      },
      {
        title: 'Commercial Façades & Spandrels',
        description:
          'Silk screen and digital enamel printed glass for building exteriors, combining brand identity with solar control and weather resistance. Custom imagery and logos are permanently fired into the glass surface.',
      },
      {
        title: 'Bar & Restaurant Design',
        description:
          'LED-backlit carved glass, 3D hot melting panels, and custom printed glass for bars, nightclubs, and fine dining interiors. Creates memorable ambiance and Instagram-worthy design features.',
      },
      {
        title: 'Furniture & Retail Displays',
        description:
          'Decorative glass tabletops, shelving, display cases, and branded retail fixtures with custom colors, logos, and patterns. Digital printing enables photographic-quality imagery on glass surfaces.',
      },
    ],
    faq: [
      {
        question: 'What file formats do you accept for custom decorative glass designs?',
        answer:
          'We accept AI, PDF, DWG, DXF, PSD, and TIFF files. For raster images (PSD/TIFF), please provide at least 300 DPI resolution at the intended print size. Our design team reviews every file for production feasibility and provides free DFM feedback within 24 hours.',
      },
      {
        question: 'Can you match a specific Pantone color for silk screen or enamel printing?',
        answer:
          'Yes. Our ceramic ink mixing system supports Pantone color matching with a color accuracy of ΔE ≤ 2.0. For large orders, we produce a physical color sample for your approval before full production begins.',
      },
      {
        question: 'Is decorative glass suitable for exterior use?',
        answer:
          'Ceramic frit (silk screen) and digital enamel coatings are fired at temperatures above 680°C, making them permanently bonded to the glass surface. These are fully weather-resistant and suitable for exterior façades, spandrel panels, and outdoor signage. Acid etched and frosted finishes are also durable for exterior use but may require periodic cleaning.',
      },
      {
        question: 'Can decorative finishes be combined with tempered or laminated glass?',
        answer:
          'Absolutely. This is one of our most popular product combinations. Decorative techniques can be applied to tempered glass, laminated glass (with decorative interlayers), or even incorporated into insulating glass units (IGU). This gives you both the aesthetic impact and the safety performance required by building codes.',
      },
      {
        question: 'What is the difference between acid etched glass and frosted glass?',
        answer:
          'Both create a translucent, matte surface, but the production method differs. Acid etching uses hydrofluoric acid to chemically alter the glass surface, creating a smoother, more uniform finish that is fingerprint-resistant. Frosted glass is typically produced by sandblasting, which creates a slightly rougher texture. Acid etched glass is generally preferred for high-end applications.',
      },
      {
        question: 'Do you offer sample production before placing a bulk order?',
        answer:
          'Yes, we strongly recommend ordering samples for custom decorative glass projects. Sample production takes 7-10 days and costs are credited toward your bulk order. Samples allow you to verify color accuracy, surface texture, and overall design intent before committing to full production.',
      },
      {
        question: 'What is hot melting glass, and what are its typical applications?',
        answer:
          'Hot melting glass is produced by heating glass to its softening point and pressing it into a custom metal mold to create three-dimensional relief patterns. The resulting panels have dramatic tactile surfaces that catch and refract light in unique ways. Typical applications include luxury hotel feature walls, bar countertops, artistic installations, and high-end residential statement pieces.',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'Pair decorative finishes with tempered glass for safety-rated decorative panels in public spaces and commercial interiors.',
      },
      {
        name: 'Laminated Glass',
        slug: 'laminated-glass',
        description:
          'Combine decorative interlayers with laminated glass for stunning safety glass with embedded patterns, images, or gradient effects.',
      },
      {
        name: 'Insulating Glass',
        slug: 'insulating-glass',
        description:
          'Incorporate decorative glass into double-glazed units for energy-efficient façades with visual impact and thermal performance.',
      },
    ],
    imagePath: '/images/products/craft-glass.webp',
  },
  {
    name: 'Curtain Wall Glass',
    slug: 'curtain-wall-glass',
    description:
      'BDGLASS supplies curtain wall glass for commercial buildings: Low-E IGU, tempered laminated, reflective coated. Foshan factory, 15,000sqm capacity. Project support with performance calculations and shop drawings.',
    longDescription:
      'BDGLASS supplies curtain wall glass for commercial towers, hotels, office complexes, and mixed-use developments from our 15,000㎡ factory in Foshan, Guangdong, China. We produce the full spectrum of facade glass: Low-E insulating units, reflective-coated tempered glass, spandrel panels, and structural laminated glass fins. Our largest project to date: 28,000 square meters of IGU for the Shenzhen Guangqi Future Center.\n\nA curtain wall is not just a skin. It is the building\'s thermal barrier, daylight controller, and structural interface with the environment. Specifying the wrong glass leads to energy penalties, tenant complaints, and costly retrofits. BDGLASS helps architects and facade contractors select the right glass configuration for each project.\n\nOur curtain wall glass product range includes vision glass (6mm Low-E + 12A Argon + 6mm Clear IGU for daylight and thermal control), spandrel glass (6mm Opacified + 12A + 6mm Clear to conceal floor slabs while matching vision area color), structural glass fins (15mm SGP Laminated Tempered for frameless facades), reflective glass (6mm Reflective Coated + 12A + 6mm Clear for solar control), and ultra-large panels (up to 3,300 × 5,000mm for atriums and flagship retail).\n\nWe provide performance calculations (U-value, SHGC, light transmittance), shop drawings compatible with unitized and stick-system curtain walls, and full-size sample mock-ups (minimum 1m × 1m) for optical and thermal performance review before mass production.',
    features: [
      'Complete Facade Glass Range — One Supplier: Low-E IGU, reflective coated, spandrel panels, and structural laminated fins. Eliminate the complexity of coordinating multiple glass suppliers for a single facade project.',
      'Performance Calculations for Specifiers: We provide U-value, SHGC, and light transmittance calculations based on your exact glass configuration. Compatible with LEED and BREEAM certification requirements.',
      'Shop Drawings & Glass Scheduling: Detailed panel drawings with IDs, dimensions, and markings. Compatible with both unitized and stick-system curtain wall installations.',
      'Full-Size Sample Mock-ups: Minimum 1m × 1m sample panels for optical and thermal performance review before committing to mass production. Reduces project risk and ensures color consistency.',
      'Up to 3,300 × 5,000mm Panel Size: Large-format IGU and laminated panels for lobby atriums, curtain walls, and flagship retail spaces. Precision edge finishing and CNC drilling for point-supported systems.',
    ],
    specs: [
      { label: 'Vision Glass', value: '6mm Low-E + 12A Argon + 6mm Clear IGU' },
      { label: 'Spandrel Glass', value: '6mm Opacified + 12A + 6mm Clear (color-matched)' },
      { label: 'Structural Glass Fin', value: '15mm SGP Laminated Tempered' },
      { label: 'Reflective Glass', value: '6mm Reflective Coated + 12A + 6mm Clear' },
      { label: 'Max Panel Size', value: '3,300mm × 5,000mm' },
      { label: 'U-Value (IGU)', value: '1.0 – 2.0 W/m²K' },
      { label: 'SHGC', value: '0.25 – 0.70' },
      { label: 'Light Transmittance', value: '30% – 80%' },
      { label: 'Acoustic Performance', value: 'Up to 42 dB reduction (laminated + IGU)' },
      { label: 'Wind Load Resistance', value: 'Designed per project (up to 5 kPa standard)' },
      { label: 'Certification', value: '3C (CCC), EN 1279, EN 12150, ASTM E2190' },
      { label: 'MOQ', value: 'Project-based, negotiable' },
      { label: 'Lead Time', value: '15-30 working days depending on project scale' },
    ],
    applications: [
      {
        title: 'Commercial Office Towers',
        description:
          'Low-E insulating glass units for high-rise office facades. Combines thermal insulation, solar control, and structural safety. Unitized and stick-system compatible.',
      },
      {
        title: 'Hotel & Mixed-Use Developments',
        description:
          'Custom curtain wall glass for hotel towers and mixed-use complexes. Spandrel-to-vision color matching ensures a seamless exterior appearance across all floors.',
      },
      {
        title: 'Retail Flagship Stores',
        description:
          'Ultra-large format glass panels (up to 3,300 × 5,000mm) for flagship retail storefronts and atriums. Maximum transparency with structural safety compliance.',
      },
      {
        title: 'Lobby & Atrium Glazing',
        description:
          'Structural laminated glass fins and point-supported glazing systems for dramatic lobby and atrium spaces. SGP interlayer provides post-breakage safety.',
      },
      {
        title: 'Spandrel & Concealment Panels',
        description:
          'Ceramic frit opacified spandrel glass that matches the exterior color of vision glass. Conceals floor slabs and mechanical equipment behind the facade.',
      },
      {
        title: 'Reflective Solar Control Facades',
        description:
          'Reflective coated glass for buildings in hot climates. Reduces solar heat gain while providing a uniform, mirror-like exterior appearance.',
      },
    ],
    faq: [
      {
        question: 'What is the difference between stick and unitized curtain wall glass?',
        answer:
          'Stick systems install frames and glass on-site panel by panel. Unitized systems pre-assemble frames and glass in the factory into complete modules. Unitized requires tighter glass dimensional tolerances (±1mm). BDGLASS supplies glass for both systems.',
      },
      {
        question: 'Can you match spandrel glass color to vision glass?',
        answer:
          'Yes. We apply ceramic frit (enamel) coatings to the interior surface of spandrel glass to match the exterior appearance of the vision area. Custom color matching available.',
      },
      {
        question: 'Do you provide structural calculations for glass fins?',
        answer:
          'We provide glass-specific engineering data (bending strength, deflection limits). For full structural calculations of the fin system, we work with your structural engineer and provide the necessary glass parameters.',
      },
      {
        question: 'What certifications does your curtain wall glass have?',
        answer:
          'Our curtain wall glass carries Chinese 3C (CCC) certification and complies with EN 1279, EN 12150, and ASTM E2190 standards. Test reports for U-value, SHGC, and acoustic performance are available for project orders.',
      },
      {
        question: 'What is the MOQ for curtain wall glass projects?',
        answer:
          'Curtain wall glass orders are project-based. We work with projects ranging from 500 sqm to 50,000+ sqm. Contact us with your project details for a tailored quote and production schedule.',
      },
      {
        question: 'Can you supply glass for point-supported facades?',
        answer:
          'Yes. We supply tempered and SGP laminated glass with precision-drilled holes for spider fittings, routels, and cable systems. Hole positions are CNC-machined to ±0.5mm tolerance.',
      },
      {
        question: 'How do you ensure color consistency across large projects?',
        answer:
          'We produce full-size sample mock-ups (minimum 1m × 1m) for client approval before mass production. Coating batches are controlled and documented. For extra-large projects, we produce all glass from the same coating run to ensure color uniformity.',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'The foundation of curtain wall glass. Tempered for safety and strength in thicknesses from 3mm to 19mm.',
      },
      {
        name: 'Insulating Glass',
        slug: 'insulating-glass',
        description:
          'Low-E double and triple glazed units for thermal performance. The standard for modern curtain wall construction.',
      },
      {
        name: 'Laminated Glass',
        slug: 'laminated-glass',
        description:
          'SGP laminated glass for structural fins, overhead canopies, and safety-critical curtain wall applications.',
      },
    ],
    imagePath: '/images/products/curtain-wall-glass.webp',
  },
  {
    name: 'Glass Railing & Balustrade',
    slug: 'glass-railing-balustrade',
    description:
      'Custom glass railings and stair balustrades from BDGLASS, Foshan. 8–15mm tempered or laminated glass with 304/316 stainless hardware. Export to 10+ countries. Complete system supply with installation drawings.',
    longDescription:
      'BDGLASS supplies glass railing and balustrade systems for residential, commercial, and hospitality projects from our 15,000㎡ factory in Foshan, Guangdong, China. We produce 10–15mm tempered or laminated glass panels with CNC-drilled holes for standoffs, clamps, and spigots. Every panel is cut to your exact dimensions and edge-polished for a premium finish.\n\nSteel railings block sightlines. Glass railings preserve them. For waterfront properties, high-rise balconies, and modern staircases, frameless glass balustrades deliver uninterrupted views while meeting strict safety codes. BDGLASS supplies both glass-only orders and complete glass + hardware systems.\n\nMost glass factories only supply the glass. BDGLASS supplies glass + hardware as a matched system. This eliminates tolerance mismatches between your glass panels and imported fittings. Our hardware range includes 304 and 316 stainless steel spigots (floor-mounted or side-mounted, satin or mirror finish), top rails (round or square stainless steel tubes, 42.4mm or 50.8mm diameter), U-channels (aluminum or stainless steel base shoes for frameless installations), and installation drawings with panel layout, fixing positions, and structural notes.\n\nGlass options include clear, ultra-clear, frosted, tinted, and silk-screen printed finishes. Standard heights are 850mm, 1,000mm, 1,050mm, and 1,200mm with custom heights available.',
    features: [
      'Complete Glass + Hardware System Supply: Most factories only supply glass. We provide matched 304/316 stainless steel hardware — spigots, top rails, U-channels — eliminating tolerance mismatches between glass and fittings.',
      'CNC Precision Drilling for All Fixing Types: Holes for standoffs, clamps, spigots, and patch fittings machined to ±0.5mm tolerance. Send us your hardware specifications or DWG files.',
      '304 / 316 Stainless Steel Hardware: Spigots in satin or mirror finish, top rails in round or square profiles, and base shoes for frameless installations. 316-grade recommended for coastal environments.',
      'Tempered & Laminated Glass Options: 10–15mm tempered for standard railings. 10+1.52+10mm laminated tempered for commercial projects requiring post-breakage retention.',
      'Installation Drawings Included: Panel layout drawings with fixing positions, structural notes, and elevation views. Reduces installation errors and speeds up on-site work.',
    ],
    specs: [
      { label: 'Glass Type', value: 'Tempered or Tempered-Laminated' },
      { label: 'Thickness — Tempered', value: '10mm, 12mm, 15mm' },
      { label: 'Thickness — Laminated', value: '8+1.14+8mm, 10+1.52+10mm' },
      { label: 'Glass Options', value: 'Clear, Ultra-Clear, Frosted, Tinted, Silk-Screen Printed' },
      { label: 'Hardware Material', value: '304 / 316 Stainless Steel' },
      { label: 'Hardware Types', value: 'Spigots, Clamps, Standoffs, U-Channels, Top Rails' },
      { label: 'Max Panel Width', value: '1,500mm (depending on height and wind load)' },
      { label: 'Standard Heights', value: '850mm, 1,000mm, 1,050mm, 1,200mm (custom available)' },
      { label: 'Edge Finish', value: 'Flat polished edges, safety corners, logo etching available' },
      { label: 'Certification', value: '3C (CCC), EN 12150, AS/NZS 2208, BS 6180' },
      { label: 'MOQ', value: '20 sqm or negotiable for trial orders' },
      { label: 'Lead Time', value: '10-15 working days' },
    ],
    applications: [
      {
        title: 'Residential Balconies',
        description:
          'Frameless glass railings with top rail or fully frameless systems. Clear or frosted glass options for privacy. Residential safety compliance in 10+ export markets.',
      },
      {
        title: 'Commercial Staircases',
        description:
          'Glass panels with stainless steel handrails for office buildings, hotels, and public spaces. Tempered laminated glass recommended for high-traffic areas.',
      },
      {
        title: 'Pool Fencing',
        description:
          '12mm clear tempered glass with frameless spigot system. Compliant with pool safety codes in Australia, the US, and Europe. 316-grade hardware for chlorine resistance.',
      },
      {
        title: 'Hotel Atriums',
        description:
          'Ultra-large laminated glass panels for dramatic atrium and lobby balustrades. SGP interlayer for structural stiffness in high-visibility installations.',
      },
      {
        title: 'Deck & Terrace Railings',
        description:
          '316-grade stainless steel hardware for coastal and marine environments. Frosted or tinted glass options for wind protection and privacy.',
      },
      {
        title: 'Shopping Mall & Public Balustrades',
        description:
          'Heavy-duty tempered laminated glass for shopping malls, airports, and transit stations. Compliant with public safety loading requirements and impact resistance standards.',
      },
    ],
    faq: [
      {
        question: 'What thickness of glass do I need for a 1.2-meter high balustrade?',
        answer:
          'For residential balconies (1.0–1.2m height), 12mm tempered glass is standard in most jurisdictions. For commercial projects or where post-breakage retention is required, we recommend 10+1.52+10mm laminated tempered glass.',
      },
      {
        question: 'Do you supply just the glass, or the complete railing system?',
        answer:
          'Both. We can supply glass only (cut to your hardware specifications) or a complete glass + hardware system. Complete systems include shop drawings and installation guidance.',
      },
      {
        question: 'Can you frost or print the glass for privacy?',
        answer:
          'Yes. We offer acid-etched frosted finish, ceramic frit silk-screen printing, and digital UV printing. Patterns, logos, and gradient designs are all possible.',
      },
      {
        question: 'What is the difference between 304 and 316 stainless steel hardware?',
        answer:
          '304 stainless steel is suitable for most indoor and sheltered outdoor applications. 316 stainless steel contains molybdenum, providing superior corrosion resistance for coastal environments, pool areas, and marine applications. We recommend 316 for any project within 5km of the ocean.',
      },
      {
        question: 'What is your MOQ and lead time for glass railings?',
        answer:
          'Standard MOQ is 20 square meters per project. Lead time is 10-15 working days for standard configurations. Custom shapes, large panels, or special finishes may require 15-20 working days.',
      },
      {
        question: 'Can you supply curved glass for curved balustrades?',
        answer:
          'Yes. We supply curved tempered and curved laminated glass for curved railing systems. Please provide the radius, arc length, and height for a custom quote.',
      },
      {
        question: 'How do you prevent glass damage during shipping?',
        answer:
          'Each glass panel is individually wrapped in EPE foam with corner protectors. Panels are separated by cork or rubber spacers in plywood crates. Crates are reinforced with steel bands and marked "Fragile — Glass."',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'The core material for glass railings. 10-15mm tempered glass with CNC-drilled holes and polished edges.',
      },
      {
        name: 'Laminated Glass',
        slug: 'laminated-glass',
        description:
          'Tempered laminated glass for commercial balustrades requiring post-breakage safety and higher impact resistance.',
      },
      {
        name: 'Glass Shower Enclosure',
        slug: 'glass-shower-enclosure',
        description:
          'Similar precision-drilled tempered glass for bathroom applications. 8-10mm with easy-clean coating options.',
      },
    ],
    imagePath: '/images/products/glass-railing-balustrade.webp',
  },
  {
    name: 'Office Glass Partition',
    slug: 'office-glass-partition',
    description:
      'BDGLASS manufactures custom office glass partitions: tempered, frosted, smart switchable glass. Frameless and framed systems. Foshan factory, global delivery. Exact sizing with ±1mm tolerance.',
    longDescription:
      'BDGLASS supplies office glass partition systems for corporate headquarters, co-working spaces, and commercial fit-outs from our 15,000㎡ factory in Foshan, Guangdong, China. We produce single-glazed frameless, double-glazed framed, and smart switchable (PDLC) partitions. Glass thickness ranges from 8mm to 12mm tempered, with frosted, printed, or switchable privacy options.\n\nSolid walls kill collaboration. Open plans kill focus. Glass partitions solve both. They maintain visual connectivity across the office while containing sound and creating defined spaces for focused work, meetings, and calls. BDGLASS partitions are engineered for fast installation, acoustic performance, and long-term durability.\n\nOur partition system types include single-glazed frameless (10–12mm tempered glass with minimal aluminum framing, ideal for modern offices and showrooms), double-glazed framed (two glass layers with blind cavity in an aluminum frame, best for meeting rooms and executive offices), smart switchable PDLC (transparent → opaque at the flick of a switch, perfect for boardrooms and privacy-on-demand spaces), acoustic partition (laminated acoustic glass achieving up to 45 dB reduction, ideal for phone booths and recording studios), and demountable system (modular panels that are reusable and relocatable, perfect for tenant-fit offices and flexible workspaces).\n\nCustomization options include frosting patterns (full frosted, band frosting, gradient, logo cut-out), silk-screen printing (company logos, wayfinding graphics, decorative patterns), smart film integration (PDLC film laminated between glass for instant privacy), door integration (glass swing doors, sliding doors, or framed aluminum doors), and blind integration (venetian or roller blinds inside double-glazed cavities).',
    features: [
      '5 Partition System Types — One Supplier: Single-glazed frameless, double-glazed framed, smart switchable PDLC, acoustic, and demountable systems. No need to source different suppliers for different partition types.',
      'Exact Sizing to ±1mm Tolerance: We cut to your finished opening dimensions with ±1mm accuracy. No on-site trimming needed. Reduces installation time and eliminates waste.',
      'Smart Switchable PDLC Glass: Transparent to opaque at the flick of a switch. Ideal for boardrooms, executive offices, and privacy-on-demand spaces. No blinds or curtains required.',
      'Acoustic Performance Up to 45 dB: Double-glazed acoustic partitions with laminated glass achieve up to 45 dB sound reduction. A normal conversation (~60 dB) is reduced to a barely audible murmur.',
      'Demountable & Reusable Systems: Modular aluminum framing systems allow panels to be disassembled, transported, and reinstalled at a new location. Perfect for flexible workspaces and tenant-fit offices.',
    ],
    specs: [
      { label: 'System Types', value: 'Single-glazed, Double-glazed, Smart PDLC, Acoustic, Demountable' },
      { label: 'Glass Thickness', value: '8mm – 12mm tempered' },
      { label: 'Glass Options', value: 'Clear, Frosted, Tinted, Silk-Screen Printed, Smart PDLC' },
      { label: 'Frame Material', value: 'Aluminum (anodized or powder-coated)' },
      { label: 'Max Panel Height', value: '4,000mm (with structural support)' },
      { label: 'Sound Reduction — Single', value: '~30–32 dB (10mm tempered)' },
      { label: 'Sound Reduction — Double', value: 'Up to 45 dB (acoustic laminated)' },
      { label: 'Smart Film Switching', value: 'Transparent ↔ Opaque in < 1 second' },
      { label: 'Smart Film Voltage', value: 'AC 48-60V (transformer included)' },
      { label: 'Tolerances', value: '±1mm on all dimensions' },
      { label: 'Certification', value: '3C (CCC), EN 12150, AS/NZS 2208' },
      { label: 'MOQ', value: 'Project-based, negotiable' },
      { label: 'Lead Time', value: '10-15 working days (urgent: 7 days)' },
    ],
    applications: [
      {
        title: 'Corporate Headquarters',
        description:
          'Full-height frameless and double-glazed partitions for open-plan offices, private offices, and meeting rooms. Smart PDLC glass for executive suites and boardrooms.',
      },
      {
        title: 'Co-Working Spaces',
        description:
          'Demountable partition systems that adapt to changing team sizes and layouts. Reusable panels reduce relocation costs for flexible workspace operators.',
      },
      {
        title: 'Meeting & Conference Rooms',
        description:
          'Smart switchable PDLC partitions that switch from transparent to opaque for presentations and confidential discussions. No physical blinds or curtains needed.',
      },
      {
        title: 'Phone Booths & Focus Pods',
        description:
          'Acoustic laminated glass partitions achieving up to 45 dB sound reduction. Creates quiet spaces for calls and focused work within open offices.',
      },
      {
        title: 'Reception & Lobby Areas',
        description:
          'Branded glass partitions with silk-screen printed logos, wayfinding graphics, and decorative patterns. Creates a professional first impression for visitors.',
      },
      {
        title: 'Recording Studios & Media Rooms',
        description:
          'High-performance acoustic partitions with double-glazed laminated glass. Sound reduction up to 45 dB for professional audio and video production environments.',
      },
    ],
    faq: [
      {
        question: 'What is the difference between single-glazed and double-glazed office partitions?',
        answer:
          'Single-glazed uses one layer of 10–12mm tempered glass. It is slimmer, more transparent, and lower cost. Double-glazed uses two layers with a cavity (typically 50–100mm). It provides better sound insulation and allows integrated blinds.',
      },
      {
        question: 'How much sound does a glass partition block?',
        answer:
          'Single-glazed 10mm tempered: ~30–32 dB. Double-glazed with acoustic laminated glass: up to 45 dB. For reference, a normal conversation is ~60 dB. A 45 dB partition reduces it to a barely audible murmur.',
      },
      {
        question: 'Can I reuse the partitions if we move office?',
        answer:
          'Yes, if you specify our demountable aluminum framing system. The glass panels and frames can be disassembled, transported, and reinstalled at the new location.',
      },
      {
        question: 'What is PDLC smart glass and how does it work?',
        answer:
          'PDLC (Polymer Dispersed Liquid Crystal) smart glass contains a film between two glass layers. When electricity is applied, the liquid crystals align and the glass becomes transparent. When power is off, the crystals scatter light and the glass appears opaque (frosted). Switching takes less than 1 second.',
      },
      {
        question: 'Can you print our company logo on the glass?',
        answer:
          'Yes. We offer ceramic frit silk-screen printing and digital UV printing for logos, wayfinding graphics, and decorative patterns. Pantone color matching is available. Send us your AI, PDF, or EPS files.',
      },
      {
        question: 'What is your lead time for office partition orders?',
        answer:
          'Standard office partition glass: 10–15 working days. Urgent projects can be completed in 7 days. Large fit-out projects with multiple partition types may require 20-25 working days.',
      },
      {
        question: 'Do you supply hardware and tracks, or just the glass?',
        answer:
          'We can supply glass only (cut to your track and fitting specifications) or complete partition kits including aluminum frames, tracks, patch fittings, and door hardware. Complete kits include installation instructions.',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'The core material for office partitions. 8-12mm tempered glass with polished edges and CNC-drilled holes for fittings.',
      },
      {
        name: 'Glass Railing & Balustrade',
        slug: 'glass-railing-balustrade',
        description:
          'Matching glass railing systems for office staircases, atriums, and mezzanines. Complete hardware + glass packages.',
      },
      {
        name: 'Craft Glass',
        slug: 'craft-glass',
        description:
          'Decorative glass with silk-screen printing, digital enamel, and frosted finishes for branded office interiors.',
      },
    ],
    imagePath: '/images/products/office-glass-partition.webp',
  },
  {
    name: 'Glass Shower Enclosure',
    slug: 'glass-shower-enclosure',
    description:
      'BDGLASS manufactures custom glass shower enclosures: frameless, semi-frameless, sliding, and hinged doors. 8–10mm tempered glass with precision-drilled holes. Export to hotels and residential projects.',
    longDescription:
      'BDGLASS manufactures shower enclosure glass for hotel chains, apartment developers, and bathroom fixture exporters from our 15,000㎡ factory in Foshan, Guangdong, China. We produce 8–10mm tempered glass panels with precision-drilled holes for hinges, handles, and rollers. Every panel is cut to your exact dimensions, with polished edges and safe corners. We also supply 304 stainless steel hardware: hinges, handles, support bars, and sliding door rollers.\n\nA shower enclosure is used every day. If the glass has optical distortion, the door drags, or the seals leak, users notice immediately. For hotels and apartment developers, that translates into maintenance calls, bad reviews, and replacement costs. BDGLASS eliminates these issues through precision manufacturing, optical quality control, and matched hardware supply.\n\nOur enclosure types include frameless doors (10mm tempered with wall-mounted or glass-to-glass hinges), semi-frameless (8mm tempered with aluminum frame on 2–3 sides), sliding doors (8mm tempered with top-hung or bottom-roller sliding system), walk-in screens (10mm tempered fixed panel with support bar, no door), and quadrant / neo-angle (6–8mm tempered framed or frameless corner enclosures).\n\nSurface treatments include easy-clean hydrophobic nano-coating (repels water and soap scum, reduces cleaning frequency by 60%), frosted / patterned glass (acid-etched or silk-screen patterns for privacy screens), tinted glass (grey, bronze, or blue tinted for designer bathrooms), and logo etching (hotel brand logos etched into the glass surface).',
    features: [
      'Hardware + Glass as One Package: No mismatches between your roller system and our glass hole positions. We confirm hole patterns before production. Eliminates on-site drilling and adjustment.',
      'Optical Quality Control — Roller Wave ≤ 0.15%: Our tempered shower glass has minimal optical distortion. No funhouse-mirror effect. Critical for hotel and luxury residential projects where appearance matters.',
      'Easy-Clean Nano Coating Available: Hydrophobic nano-coating repels water and soap scum, reducing cleaning frequency by 60%. Ideal for hotels and high-traffic residential buildings.',
      '304 Stainless Steel Hardware Included: Hinges, handles, support bars, and sliding door rollers in matching finishes. Confirm hole patterns before production for perfect fit.',
      'Precision-Drilled Holes ±0.5mm: CNC-drilled hinge holes, handle holes, and roller cutouts machined to ±0.5mm tolerance. Send us your hardware specifications or samples for pattern matching.',
    ],
    specs: [
      { label: 'Frameless Door', value: '10mm tempered, wall-mounted or glass-to-glass hinges' },
      { label: 'Semi-Frameless', value: '8mm tempered, aluminum frame on 2–3 sides' },
      { label: 'Sliding Door', value: '8mm tempered, top-hung or bottom-roller system' },
      { label: 'Walk-In Screen', value: '10mm tempered, fixed panel with support bar' },
      { label: 'Quadrant / Neo-Angle', value: '6–8mm tempered, framed or frameless corner' },
      { label: 'Max Door Width', value: '900mm (10mm), 1,000mm (12mm recommended)' },
      { label: 'Standard Heights', value: '1,900mm, 2,000mm, 2,100mm (custom available)' },
      { label: 'Surface Treatments', value: 'Easy-clean nano, frosted, patterned, tinted, logo etched' },
      { label: 'Hardware Material', value: '304 Stainless Steel (316 available)' },
      { label: 'Hole Tolerance', value: '±0.5mm (CNC drilled)' },
      { label: 'Certification', value: '3C (CCC), EN 12150, AS/NZS 2208' },
      { label: 'MOQ', value: '50 panels or project-based' },
      { label: 'Lead Time', value: '10-15 working days' },
    ],
    applications: [
      {
        title: 'Hotel Bathrooms',
        description:
          'Frameless and semi-frameless shower enclosures for hotel chains. Easy-clean nano coating reduces housekeeping time. Logo etching available for branded bathroom experiences.',
      },
      {
        title: 'Apartment & Residential Developments',
        description:
          'Sliding and hinged shower doors for multi-unit residential projects. Standard sizes reduce costs. Custom sizes available for penthouse and luxury units.',
      },
      {
        title: 'Luxury Homes & Villas',
        description:
          'Custom walk-in screens and frameless enclosures for high-end residential bathrooms. Tinted and frosted glass options for designer interiors.',
      },
      {
        title: 'Bathroom Fixture Export',
        description:
          'Shower enclosure glass supplied to bathroom fixture manufacturers and exporters. Glass + hardware kits with installation instructions for DIY and contractor markets.',
      },
      {
        title: 'Spa & Wellness Centers',
        description:
          'Large-format tempered glass for spa showers, steam rooms, and hydrotherapy areas. Frosted and patterned glass for privacy in shared wellness spaces.',
      },
      {
        title: 'Commercial & Public Facilities',
        description:
          'Heavy-duty tempered glass for gym showers, swimming pool changing rooms, and public restrooms. Safety corners and polished edges standard on all panels.',
      },
    ],
    faq: [
      {
        question: 'What is the standard thickness for frameless shower doors?',
        answer:
          '10mm tempered glass is the global standard for frameless shower doors. For very large doors (over 900mm wide), 12mm is recommended to prevent flex.',
      },
      {
        question: 'Do you supply the complete shower enclosure or just the glass?',
        answer:
          'We can supply glass only (cut to your hardware specifications) or glass + hardware as a complete kit. Complete kits include installation instructions and silicone sealant.',
      },
      {
        question: 'What is easy-clean coating and how long does it last?',
        answer:
          'Easy-clean coating is a hydrophobic nano-layer applied to the glass surface. It causes water to bead up and run off, carrying soap and minerals with it. Under normal residential use, the coating remains effective for 3–5 years. It can be reapplied with aftermarket sprays.',
      },
      {
        question: 'Can you match hole patterns to my existing hardware?',
        answer:
          'Yes. Send us your hardware specifications, CAD drawings, or physical samples. We CNC-machine holes to ±0.5mm tolerance to ensure perfect alignment with your hinges, handles, and rollers.',
      },
      {
        question: 'What is your MOQ and lead time for shower enclosure glass?',
        answer:
          'Standard MOQ is 50 panels per size/configuration. Lead time is 10-15 working days for standard orders. Large hotel or apartment projects may require 20-25 working days. Samples are available for quality verification.',
      },
      {
        question: 'Do you offer curved or shaped shower glass?',
        answer:
          'Yes. We supply curved tempered glass for quadrant, neo-angle, and custom-shaped shower enclosures. Please provide the radius, dimensions, and hardware specifications for a custom quote.',
      },
      {
        question: 'How do you protect glass panels during shipping?',
        answer:
          'Each panel is individually wrapped in EPE foam with plastic corner protectors. Panels are separated by cork spacers in reinforced plywood crates. Edge protection strips prevent chipping during transit.',
      },
    ],
    relatedProducts: [
      {
        name: 'Tempered Glass',
        slug: 'tempered-glass',
        description:
          'The foundation of shower enclosures. 8-10mm tempered glass with CNC precision drilling and polished edges.',
      },
      {
        name: 'Glass Railing & Balustrade',
        slug: 'glass-railing-balustrade',
        description:
          'Matching glass systems for bathroom grab bars, shower screens, and wet-room dividers with 304/316 hardware.',
      },
      {
        name: 'Craft Glass',
        slug: 'craft-glass',
        description:
          'Frosted, patterned, and digitally printed glass for decorative shower enclosures and privacy screens.',
      },
    ],
    imagePath: '/images/products/glass-shower-enclosure.webp',
  },
];

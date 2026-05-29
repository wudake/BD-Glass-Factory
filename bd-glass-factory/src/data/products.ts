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
    imagePath: '/images/products/tempered-glass.jpg',
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
    imagePath: '/images/products/insulating-glass.jpg',
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
    imagePath: '/images/products/laminated-glass.jpg',
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
    imagePath: '/images/products/craft-glass.jpg',
  },
];

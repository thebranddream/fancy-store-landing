/**
 * Mock Data for Fancy Store
 * Contains all product, collection, and content data
 */

export type ProductCategory = 'jewelry' | 'accessories' | 'home-decor' | 'stationery';

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  images: string[];
  priceINR: number;
  priceDisplay: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  material: string;
  dimensions: string;
  stock: number;
  featured: boolean;
  giftable: boolean;
  leadTimeDays: number;
  altText: string;
}

export interface Collection {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  productCount: number;
}

export interface LifestyleVignette {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

// Collections data
export const collections: Collection[] = [
  {
    id: 'col-jewelry',
    name: 'Fine Jewelry',
    category: 'jewelry',
    description: 'Handcrafted pieces with timeless elegance',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
    productCount: 8,
  },
  {
    id: 'col-accessories',
    name: 'Refined Accessories',
    category: 'accessories',
    description: 'Statement pieces for the discerning individual',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
    productCount: 7,
  },
  {
    id: 'col-decor',
    name: 'Home Décor',
    category: 'home-decor',
    description: 'Transform spaces into sanctuaries',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=800&fit=crop',
    productCount: 6,
  },
  {
    id: 'col-stationery',
    name: 'Specialty Stationery',
    category: 'stationery',
    description: 'The art of written expression',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJXN0r-B41naQcJ7rrTV1dFnwad03VhsEwQ&s",
    productCount: 6,
  },
];

// Products data
export const products: Product[] = [
  // Jewelry
  {
    id: 'prod-001',
    title: 'Golden Crescent Pendant',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=600&fit=crop',
    ],
    priceINR: 12500,
    priceDisplay: '₹12,500',
    shortDescription: 'Elegant crescent moon pendant in brushed gold finish',
    longDescription: 'This exquisite crescent pendant captures the ethereal beauty of the moon in a minimalist design. Hand-finished in 18K gold plating over sterling silver, each piece undergoes meticulous polishing to achieve its signature brushed texture. Perfect for both everyday elegance and special occasions.',
    tags: ['handmade', 'limited', 'bestseller'],
    material: '18K Gold Plated Sterling Silver',
    dimensions: 'Pendant: 2.5cm x 1.5cm, Chain: 45cm',
    stock: 12,
    featured: true,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Golden crescent moon pendant necklace on delicate chain',
  },
  {
    id: 'prod-002',
    title: 'Pearl Drop Earrings',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    ],
    priceINR: 8900,
    priceDisplay: '₹8,900',
    shortDescription: 'Classic freshwater pearl drops with gold accents',
    longDescription: 'Timeless elegance meets modern craftsmanship in these stunning pearl drop earrings. Each freshwater pearl is hand-selected for its lustrous quality and paired with 14K gold-filled hooks designed for all-day comfort.',
    tags: ['classic', 'giftable'],
    material: 'Freshwater Pearls, 14K Gold-Filled',
    dimensions: 'Drop length: 3cm',
    stock: 20,
    featured: true,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Elegant pearl drop earrings with gold hooks',
  },
  {
    id: 'prod-003',
    title: 'Minimalist Gold Bangle',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
    ],
    priceINR: 15800,
    priceDisplay: '₹15,800',
    shortDescription: 'Sleek, stackable bangle in polished gold',
    longDescription: 'A modern interpretation of the classic bangle, this piece features clean lines and a mirror-polished finish. Designed for stacking or standalone wear, its ergonomic design ensures comfortable all-day wear.',
    tags: ['minimalist', 'bestseller'],
    material: '18K Gold Vermeil over Sterling Silver',
    dimensions: 'Internal diameter: 6.5cm, Width: 4mm',
    stock: 15,
    featured: true,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Polished gold bangle bracelet with minimalist design',
  },
  {
    id: 'prod-004',
    title: 'Sapphire Constellation Ring',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    ],
    priceINR: 28500,
    priceDisplay: '₹28,500',
    shortDescription: 'Blue sapphire cluster inspired by the night sky',
    longDescription: 'Inspired by celestial constellations, this ring features ethically sourced blue sapphires arranged in a unique cluster setting. The handcrafted band in recycled 14K gold makes this piece both beautiful and sustainable.',
    tags: ['artisan', 'limited', 'ethical'],
    material: 'Recycled 14K Gold, Blue Sapphires',
    dimensions: 'Band width: 2mm, Setting: 8mm',
    stock: 5,
    featured: true,
    giftable: true,
    leadTimeDays: 7,
    altText: 'Gold ring with blue sapphire constellation cluster',
  },
  {
    id: 'prod-005',
    title: 'Vintage Locket Necklace',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    ],
    priceINR: 9200,
    priceDisplay: '₹9,200',
    shortDescription: 'Romantic oval locket with floral engraving',
    longDescription: 'A treasured keepsake reimagined. This vintage-inspired locket opens to hold two small photos, making it the perfect sentimental gift. The intricate floral engraving is hand-finished by skilled artisans.',
    tags: ['vintage', 'sentimental', 'giftable'],
    material: 'Rose Gold Plated Brass',
    dimensions: 'Locket: 2cm x 1.5cm, Chain: 50cm',
    stock: 18,
    featured: false,
    giftable: true,
    leadTimeDays: 4,
    altText: 'Rose gold locket necklace with floral engraving',
  },
  {
    id: 'prod-006',
    title: 'Crystal Quartz Studs',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop',
    ],
    priceINR: 4500,
    priceDisplay: '₹4,500',
    shortDescription: 'Raw crystal quartz in gold bezel setting',
    longDescription: 'These raw crystal quartz studs celebrate the beauty of natural imperfection. Each stone is unique, set in a minimal gold bezel that lets the crystal shine.',
    tags: ['natural', 'unique'],
    material: 'Raw Crystal Quartz, Gold-Plated Setting',
    dimensions: 'Stone: 6mm approx.',
    stock: 25,
    featured: false,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Raw crystal quartz stud earrings in gold setting',
  },
  {
    id: 'prod-007',
    title: 'Layered Chain Necklace',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=600&fit=crop',
    ],
    priceINR: 7800,
    priceDisplay: '₹7,800',
    shortDescription: 'Three-tier delicate gold chain set',
    longDescription: 'Achieve the perfectly layered look with this pre-styled three-chain set. Different chain weights and lengths create visual interest while the integrated clasp keeps everything tangle-free.',
    tags: ['trendy', 'layered'],
    material: '14K Gold-Filled',
    dimensions: 'Lengths: 40cm, 45cm, 50cm',
    stock: 14,
    featured: false,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Three layered gold chain necklaces of varying lengths',
  },
  {
    id: 'prod-008',
    title: 'Emerald Teardrop Pendant',
    category: 'jewelry',
    images: [
      'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=600&h=600&fit=crop',
    ],
    priceINR: 32000,
    priceDisplay: '₹32,000',
    shortDescription: 'Colombian emerald in handcrafted gold setting',
    longDescription: 'A statement piece featuring a genuine Colombian emerald in a teardrop cut. The handcrafted gold setting frames the stone beautifully, creating a piece that commands attention.',
    tags: ['luxury', 'limited', 'statement'],
    material: 'Colombian Emerald, 18K Gold',
    dimensions: 'Pendant: 1.5cm x 1cm, Chain: 42cm',
    stock: 3,
    featured: true,
    giftable: true,
    leadTimeDays: 10,
    altText: 'Emerald teardrop pendant necklace in gold setting',
  },
  // Accessories
  {
    id: 'prod-009',
    title: 'Italian Leather Card Holder',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop',
    ],
    priceINR: 3500,
    priceDisplay: '₹3,500',
    shortDescription: 'Slim card holder in premium Italian leather',
    longDescription: 'Crafted from full-grain Italian leather, this minimalist card holder develops a beautiful patina over time. Features four card slots and a central pocket for folded bills.',
    tags: ['leather', 'minimalist', 'bestseller'],
    material: 'Full-Grain Italian Leather',
    dimensions: '10cm x 7.5cm x 0.5cm',
    stock: 30,
    featured: true,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Brown Italian leather card holder with minimal design',
  },
  {
    id: 'prod-010',
    title: 'Silk Scarf - Abstract Flora',
    category: 'accessories',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDPm0vUXJp8YkDAL0XOmRyf73BLKYW3Hh7ig&s',
    ],
    priceINR: 6500,
    priceDisplay: '₹6,500',
    shortDescription: 'Hand-rolled silk scarf with botanical print',
    longDescription: 'This luxurious silk scarf features an original abstract floral design exclusive to Fancy Store. The hand-rolled edges are a mark of true craftsmanship, while the pure mulberry silk ensures lasting beauty.',
    tags: ['silk', 'exclusive', 'artisan'],
    material: '100% Mulberry Silk',
    dimensions: '90cm x 90cm',
    stock: 12,
    featured: true,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Colorful silk scarf with abstract floral pattern',
  },
  {
    id: 'prod-011',
    title: 'Designer Sunglasses Case',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=600&fit=crop',
    ],
    priceINR: 2800,
    priceDisplay: '₹2,800',
    shortDescription: 'Hardshell case in velvet-lined leather',
    longDescription: 'Protect your eyewear in style with this premium hardshell case. The exterior features scratch-resistant leather while the plush velvet interior cradles your glasses safely.',
    tags: ['protective', 'premium'],
    material: 'Leather Exterior, Velvet Interior',
    dimensions: '16cm x 6cm x 4cm',
    stock: 22,
    featured: false,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Leather sunglasses case with velvet lining',
  },
  {
    id: 'prod-012',
    title: 'Cashmere Travel Wrap',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=600&h=600&fit=crop',
    ],
    priceINR: 18500,
    priceDisplay: '₹18,500',
    shortDescription: 'Oversized cashmere wrap for luxury travel',
    longDescription: 'The ultimate travel companion. This generously sized cashmere wrap doubles as a blanket, scarf, or shawl. The ultra-fine cashmere is ethically sourced from Mongolian goats.',
    tags: ['cashmere', 'luxury', 'travel'],
    material: '100% Pure Mongolian Cashmere',
    dimensions: '200cm x 70cm',
    stock: 8,
    featured: true,
    giftable: true,
    leadTimeDays: 5,
    altText: 'Beige cashmere travel wrap draped elegantly',
  },
  {
    id: 'prod-013',
    title: 'Vintage Watch Strap',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=600&h=600&fit=crop',
    ],
    priceINR: 4200,
    priceDisplay: '₹4,200',
    shortDescription: 'Hand-stitched leather watch strap',
    longDescription: 'Transform your timepiece with this artisan-crafted watch strap. Hand-stitched using traditional techniques, the vegetable-tanned leather ages beautifully with wear.',
    tags: ['handmade', 'vintage'],
    material: 'Vegetable-Tanned Leather',
    dimensions: 'Available in 18mm, 20mm, 22mm',
    stock: 15,
    featured: false,
    giftable: true,
    leadTimeDays: 4,
    altText: 'Brown leather watch strap with hand stitching',
  },
  {
    id: 'prod-014',
    title: 'Mother of Pearl Cufflinks',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&h=600&fit=crop',
    ],
    priceINR: 5800,
    priceDisplay: '₹5,800',
    shortDescription: 'Iridescent mother of pearl in silver setting',
    longDescription: 'Elevate formal attire with these sophisticated cufflinks. The natural mother of pearl faces catch light beautifully, while the rhodium-plated silver setting ensures lasting shine.',
    tags: ['formal', 'elegant'],
    material: 'Mother of Pearl, Rhodium-Plated Silver',
    dimensions: 'Face: 1.5cm diameter',
    stock: 10,
    featured: false,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Mother of pearl cufflinks with silver setting',
  },
  {
    id: 'prod-015',
    title: 'Monogrammed Key Fob',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1602273660127-a0000560a4c1?w=600&h=600&fit=crop',
    ],
    priceINR: 2200,
    priceDisplay: '₹2,200',
    shortDescription: 'Personalized leather key holder',
    longDescription: 'A thoughtful personalized gift. This leather key fob can be embossed with up to three initials, making it uniquely yours. The solid brass hardware is built to last.',
    tags: ['personalized', 'giftable'],
    material: 'Full-Grain Leather, Brass Hardware',
    dimensions: '8cm x 3cm',
    stock: 50,
    featured: false,
    giftable: true,
    leadTimeDays: 5,
    altText: 'Brown leather key fob with brass ring',
  },
  // Home Decor
  {
    id: 'prod-016',
    title: 'Artisan Ceramic Vase',
    category: 'home-decor',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop',
    ],
    priceINR: 8500,
    priceDisplay: '₹8,500',
    shortDescription: 'Hand-thrown ceramic vase with organic glaze',
    longDescription: 'Each vase is individually wheel-thrown by master ceramicists, ensuring no two pieces are identical. The reactive glaze creates unique patterns during firing, making each piece a one-of-a-kind artwork.',
    tags: ['handmade', 'artisan', 'unique'],
    material: 'Stoneware Ceramic',
    dimensions: 'Height: 25cm, Diameter: 12cm',
    stock: 6,
    featured: true,
    giftable: true,
    leadTimeDays: 5,
    altText: 'Handmade ceramic vase with cream and brown glaze',
  },
  {
    id: 'prod-017',
    title: 'Brass Candle Holder Set',
    category: 'home-decor',
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&h=600&fit=crop',
    ],
    priceINR: 6200,
    priceDisplay: '₹6,200',
    shortDescription: 'Set of three graduated brass candlesticks',
    longDescription: 'Create ambiance with this trio of solid brass candleholders. The graduated heights create visual interest when grouped together, and the weighted bases ensure stability.',
    tags: ['brass', 'set', 'elegant'],
    material: 'Solid Brass with Brushed Finish',
    dimensions: 'Heights: 15cm, 20cm, 25cm',
    stock: 10,
    featured: true,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Three brass candle holders of varying heights',
  },
  {
    id: 'prod-018',
    title: 'Marble Serving Board',
    category: 'home-decor',
    images: [
      'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=600&h=600&fit=crop',
    ],
    priceINR: 4800,
    priceDisplay: '₹4,800',
    shortDescription: 'Genuine marble board with brass handles',
    longDescription: 'Perfect for entertaining, this stunning serving board features genuine white marble with natural grey veining. The brass handles add a touch of elegance and make carrying easy.',
    tags: ['marble', 'entertaining'],
    material: 'White Marble, Brass Handles',
    dimensions: '40cm x 20cm x 2cm',
    stock: 14,
    featured: false,
    giftable: true,
    leadTimeDays: 3,
    altText: 'White marble serving board with brass handles',
  },
  {
    id: 'prod-019',
    title: 'Linen Table Runner',
    category: 'home-decor',
    images: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=600&fit=crop',
    ],
    priceINR: 3200,
    priceDisplay: '₹3,200',
    shortDescription: 'Stonewashed Belgian linen runner',
    longDescription: 'Add understated elegance to your table with this premium linen runner. Stonewashed for softness, the natural flax color complements any dining aesthetic.',
    tags: ['linen', 'natural', 'sustainable'],
    material: '100% Belgian Linen',
    dimensions: '180cm x 40cm',
    stock: 20,
    featured: false,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Natural linen table runner on wooden table',
  },
  {
    id: 'prod-020',
    title: 'Crystal Photo Frame',
    category: 'home-decor',
    images: [
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=600&h=600&fit=crop',
    ],
    priceINR: 5500,
    priceDisplay: '₹5,500',
    shortDescription: 'Beveled crystal frame with velvet backing',
    longDescription: 'Display cherished memories in this exquisite crystal frame. The beveled edges catch and refract light beautifully, while the velvet backing adds a luxury touch.',
    tags: ['crystal', 'sentimental', 'giftable'],
    material: 'Lead-Free Crystal, Velvet',
    dimensions: 'For 5x7 inch photos',
    stock: 12,
    featured: false,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Crystal photo frame with beveled edges',
  },
  {
    id: 'prod-021',
    title: 'Scented Candle Collection',
    category: 'home-decor',
    images: [
      'data:image/jpeg;base64,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',
    ],
    priceINR: 4200,
    priceDisplay: '₹4,200',
    shortDescription: 'Three luxury soy candles in signature scents',
    longDescription: 'Experience our signature scent collection: Velvet Noir (amber & sandalwood), Golden Hour (bergamot & jasmine), and Blush Garden (rose & peony). Clean-burning soy wax in reusable vessels.',
    tags: ['scented', 'set', 'luxury'],
    material: 'Soy Wax, Essential Oils, Glass Vessel',
    dimensions: 'Each: 8cm x 8cm, 40hr burn time',
    stock: 16,
    featured: true,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Three luxury scented candles in glass vessels',
  },
  // Stationery
  {
    id: 'prod-022',
    title: 'Leather Bound Journal',
    category: 'stationery',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop',
    ],
    priceINR: 4500,
    priceDisplay: '₹4,500',
    shortDescription: 'Handcrafted leather journal with gilt edges',
    longDescription: 'A journal worthy of your thoughts. Handbound in genuine leather with gold gilt page edges, this journal features 200 pages of premium cotton paper perfect for fountain pens.',
    tags: ['leather', 'handmade', 'premium'],
    material: 'Full-Grain Leather, Cotton Paper',
    dimensions: '15cm x 21cm, 200 pages',
    stock: 18,
    featured: true,
    giftable: true,
    leadTimeDays: 3,
    altText: 'Brown leather journal with gilt gold edges',
  },
  {
    id: 'prod-023',
    title: 'Brass Letter Opener',
    category: 'stationery',
    images: [
      'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&h=600&fit=crop',
    ],
    priceINR: 2800,
    priceDisplay: '₹2,800',
    shortDescription: 'Vintage-style solid brass letter opener',
    longDescription: 'Bring elegance to everyday correspondence with this weighty brass letter opener. The ergonomic handle is perfectly balanced, making opening mail a pleasure rather than a chore.',
    tags: ['brass', 'vintage', 'desk'],
    material: 'Solid Brass',
    dimensions: '20cm length',
    stock: 25,
    featured: false,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Brass letter opener with decorative handle',
  },
  {
    id: 'prod-024',
    title: 'Wax Seal Stamp Set',
    category: 'stationery',
    images: [
      'https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=600&h=600&fit=crop',
    ],
    priceINR: 3800,
    priceDisplay: '₹3,800',
    shortDescription: 'Complete wax seal kit with custom stamp',
    longDescription: 'Elevate your correspondence with this complete wax seal set. Includes a brass stamp with interchangeable designs, three wax sticks in coordinating colors, and a melting spoon.',
    tags: ['set', 'traditional', 'giftable'],
    material: 'Brass Stamp, Sealing Wax',
    dimensions: 'Stamp: 2.5cm diameter',
    stock: 14,
    featured: true,
    giftable: true,
    leadTimeDays: 4,
    altText: 'Wax seal stamp set with multiple color wax sticks',
  },
  {
    id: 'prod-025',
    title: 'Fountain Pen - Rosewood',
    category: 'stationery',
    images: [
      'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&h=600&fit=crop',
    ],
    priceINR: 12500,
    priceDisplay: '₹12,500',
    shortDescription: 'Handturned rosewood fountain pen with gold nib',
    longDescription: 'A writing instrument of distinction. Each pen is individually hand-turned from reclaimed rosewood, fitted with a smooth 18K gold-plated nib. Comes in a presentation box.',
    tags: ['handmade', 'wood', 'luxury'],
    material: 'Rosewood, 18K Gold-Plated Nib',
    dimensions: '14cm length',
    stock: 8,
    featured: true,
    giftable: true,
    leadTimeDays: 5,
    altText: 'Rosewood fountain pen with gold accents',
  },
  {
    id: 'prod-026',
    title: 'Correspondence Card Set',
    category: 'stationery',
    images: [
      'https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?w=600&h=600&fit=crop',
    ],
    priceINR: 2200,
    priceDisplay: '₹2,200',
    shortDescription: 'Letterpress cards with lined envelopes',
    longDescription: 'Express yourself with elegance using these letterpress printed correspondence cards. The deep impression of traditional letterpress creates a tactile experience. Includes 20 cards and lined envelopes.',
    tags: ['letterpress', 'traditional'],
    material: '300gsm Cotton Paper',
    dimensions: '10cm x 15cm, 20 cards',
    stock: 30,
    featured: false,
    giftable: true,
    leadTimeDays: 2,
    altText: 'Stack of letterpress correspondence cards with envelopes',
  },
];

// Lifestyle Vignettes
export const lifestyleVignettes: LifestyleVignette[] = [
  {
    id: 'vignette-1',
    title: 'Elevated Living Room',
    description: 'Curated pieces that transform your living space into a sanctuary of refined taste.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
  },
  {
    id: 'vignette-2',
    title: 'Refined Entryway',
    description: 'First impressions that speak volumes about your attention to detail.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
  },
  {
    id: 'vignette-3',
    title: 'Gift Desk: Specialty Stationery',
    description: 'Where thoughtful correspondence begins with premium writing essentials.',
    image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&h=600&fit=crop',
  },
];

// Resources/Guides
export const resources: Resource[] = [
  {
    id: 'resource-1',
    title: 'How to Choose a Meaningful Gift',
    excerpt: 'Discover the art of thoughtful gifting with our curated guide to selecting presents that resonate.',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 'resource-2',
    title: 'Styling Tips for Premium Decor',
    excerpt: 'Transform your space with expert advice on arranging and showcasing luxury home pieces.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop',
    readTime: '7 min read',
  },
  {
    id: 'resource-3',
    title: 'Jewelry Care Essentials',
    excerpt: 'Preserve the beauty and longevity of your precious pieces with proper care techniques.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
    readTime: '4 min read',
  },
];

// Helper functions
export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category: ProductCategory) => 
  products.filter(p => p.category === category);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const filterProducts = (filters: {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  giftable?: boolean;
  query?: string;
}) => {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.minPrice && product.priceINR < filters.minPrice) return false;
    if (filters.maxPrice && product.priceINR > filters.maxPrice) return false;
    if (filters.giftable && !product.giftable) return false;
    if (filters.tags && filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(tag => product.tags.includes(tag));
      if (!hasMatchingTag) return false;
    }
    if (filters.query) {
      const searchLower = filters.query.toLowerCase();
      const matchesQuery = 
        product.title.toLowerCase().includes(searchLower) ||
        product.shortDescription.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower);
      if (!matchesQuery) return false;
    }
    return true;
  });
};

// Stats for hero section
export const heroStats = {
  collectionsCount: collections.length,
  customerFavorites: products.filter(p => p.tags.includes('bestseller')).length,
  avgStylingDays: 7,
};

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
    image: data:image/jpeg;base64,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,
    productCount: 5,
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

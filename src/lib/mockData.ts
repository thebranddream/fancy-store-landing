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
      'https://images.unsplash.com/photo-1601379329542-31a0b206f1ab?w=600&h=600&fit=crop',
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
      'https://images.unsplash.com/photo-1602607434953-256fde4f6be3?w=600&h=600&fit=crop',
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

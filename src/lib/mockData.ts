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
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=800&fit=crop',
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

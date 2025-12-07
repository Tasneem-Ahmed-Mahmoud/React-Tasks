import { Product, Category, Brand, Subcategory, CartItem, WishlistItem, Address, Order } from "@/types";

export const categories: Category[] = [
  { id: "1", name: "Electronics", slug: "electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400" },
  { id: "2", name: "Fashion", slug: "fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400" },
  { id: "3", name: "Home & Living", slug: "home-living", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400" },
  { id: "4", name: "Sports", slug: "sports", image: "https://images.unsplash.com/photo-1461896836934- voices-8c0e?w=400" },
  { id: "5", name: "Beauty", slug: "beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400" },
  { id: "6", name: "Books", slug: "books", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400" },
];

export const subcategories: Subcategory[] = [
  { id: "1", name: "Smartphones", slug: "smartphones", category: "1" },
  { id: "2", name: "Laptops", slug: "laptops", category: "1" },
  { id: "3", name: "Men's Clothing", slug: "mens-clothing", category: "2" },
  { id: "4", name: "Women's Clothing", slug: "womens-clothing", category: "2" },
  { id: "5", name: "Furniture", slug: "furniture", category: "3" },
  { id: "6", name: "Running", slug: "running", category: "4" },
];

export const brands: Brand[] = [
  { id: "1", name: "Apple", slug: "apple", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200" },
  { id: "2", name: "Samsung", slug: "samsung", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200" },
  { id: "3", name: "Nike", slug: "nike", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" },
  { id: "4", name: "Adidas", slug: "adidas", image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=200" },
  { id: "5", name: "Sony", slug: "sony", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200" },
  { id: "6", name: "LG", slug: "lg", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=200" },
];

export const products: Product[] = [
  {
    id: "1",
    title: "iPhone 15 Pro Max",
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and 48MP camera system.",
    price: 1199,
    priceBeforeDiscount: 1299,
    quantity: 50,
    sold: 120,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600",
    ],
    category: categories[0],
    subcategory: subcategories[0],
    brand: brands[0],
    ratingsAverage: 4.8,
    ratingsQuantity: 245,
    slug: "iphone-15-pro-max",
  },
  {
    id: "2",
    title: "Samsung Galaxy S24 Ultra",
    description: "Ultimate smartphone with S Pen, advanced AI features, and 200MP camera.",
    price: 1099,
    quantity: 75,
    sold: 89,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600",
    ],
    category: categories[0],
    subcategory: subcategories[0],
    brand: brands[1],
    ratingsAverage: 4.7,
    ratingsQuantity: 178,
    slug: "samsung-galaxy-s24-ultra",
  },
  {
    id: "3",
    title: "Nike Air Max 270",
    description: "Iconic lifestyle sneaker with large Air unit for exceptional comfort.",
    price: 150,
    priceBeforeDiscount: 180,
    quantity: 200,
    sold: 450,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    ],
    category: categories[3],
    subcategory: subcategories[5],
    brand: brands[2],
    ratingsAverage: 4.6,
    ratingsQuantity: 892,
    slug: "nike-air-max-270",
  },
  {
    id: "4",
    title: "MacBook Pro 16\"",
    description: "Supercharged by M3 Pro or M3 Max chip for exceptional performance.",
    price: 2499,
    quantity: 30,
    sold: 67,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
    ],
    category: categories[0],
    subcategory: subcategories[1],
    brand: brands[0],
    ratingsAverage: 4.9,
    ratingsQuantity: 156,
    slug: "macbook-pro-16",
  },
  {
    id: "5",
    title: "Adidas Ultraboost 23",
    description: "Premium running shoes with BOOST midsole for energy return.",
    price: 190,
    quantity: 150,
    sold: 320,
    images: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600",
    ],
    category: categories[3],
    subcategory: subcategories[5],
    brand: brands[3],
    ratingsAverage: 4.5,
    ratingsQuantity: 567,
    slug: "adidas-ultraboost-23",
  },
  {
    id: "6",
    title: "Sony WH-1000XM5",
    description: "Industry-leading noise canceling headphones with exceptional sound.",
    price: 350,
    priceBeforeDiscount: 400,
    quantity: 80,
    sold: 234,
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600",
    ],
    category: categories[0],
    brand: brands[4],
    ratingsAverage: 4.8,
    ratingsQuantity: 423,
    slug: "sony-wh-1000xm5",
  },
  {
    id: "7",
    title: "LG OLED C3 65\"",
    description: "Perfect blacks and infinite contrast with self-lit OLED pixels.",
    price: 1799,
    quantity: 25,
    sold: 45,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600",
    ],
    category: categories[0],
    brand: brands[5],
    ratingsAverage: 4.7,
    ratingsQuantity: 189,
    slug: "lg-oled-c3-65",
  },
  {
    id: "8",
    title: "Modern Leather Sofa",
    description: "Elegant 3-seater leather sofa with premium craftsmanship.",
    price: 1299,
    quantity: 15,
    sold: 28,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    ],
    category: categories[2],
    subcategory: subcategories[4],
    ratingsAverage: 4.4,
    ratingsQuantity: 67,
    slug: "modern-leather-sofa",
  },
];

export const mockCartItems: CartItem[] = [
  { id: "1", product: products[0], quantity: 1, price: products[0].price },
  { id: "2", product: products[2], quantity: 2, price: products[2].price * 2 },
];

export const mockWishlist: WishlistItem[] = [
  { id: "1", product: products[1] },
  { id: "2", product: products[5] },
  { id: "3", product: products[3] },
];

export const mockAddresses: Address[] = [
  {
    id: "1",
    alias: "Home",
    details: "123 Main Street, Apt 4B",
    phone: "+1 234 567 8900",
    city: "New York",
    postalCode: "10001",
  },
  {
    id: "2",
    alias: "Work",
    details: "456 Business Ave, Floor 12",
    phone: "+1 234 567 8901",
    city: "New York",
    postalCode: "10002",
  },
];

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    user: "1",
    cartItems: mockCartItems,
    totalOrderPrice: 1499,
    paymentMethodType: "card",
    isPaid: true,
    paidAt: "2024-01-15T10:30:00Z",
    isDelivered: true,
    deliveredAt: "2024-01-18T14:00:00Z",
    shippingAddress: mockAddresses[0],
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "ORD-002",
    user: "1",
    cartItems: [{ id: "3", product: products[5], quantity: 1, price: products[5].price }],
    totalOrderPrice: 350,
    paymentMethodType: "cash",
    isPaid: false,
    isDelivered: false,
    shippingAddress: mockAddresses[1],
    createdAt: "2024-01-20T09:00:00Z",
  },
];

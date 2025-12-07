export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  priceBeforeDiscount?: number;
  quantity: number;
  sold: number;
  images: string[];
  category: Category;
  subcategory?: Subcategory;
  brand?: Brand;
  ratingsAverage: number;
  ratingsQuantity: number;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}

export interface WishlistItem {
  id: string;
  product: Product;
}

export interface Address {
  id: string;
  alias: string;
  details: string;
  phone: string;
  city: string;
  postalCode: string;
}

export interface Order {
  id: string;
  user: string;
  cartItems: CartItem[];
  totalOrderPrice: number;
  paymentMethodType: 'card' | 'cash';
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  shippingAddress: Address;
  createdAt: string;
}

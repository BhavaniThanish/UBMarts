// Mock data for UB Mart premium redesign

export const LOGO_URL = "/logo.png";

export const CATEGORIES = [
  {
    slug: "plant-based-meat-products",
    name: "Plant Based Meat",
    tagline: "0% Animal Death, 100% Healthy",
    description: "Delicious meat alternatives crafted from plants. Same taste, better ethics.",
    image: "https://images.unsplash.com/photo-1633436375795-12b3b339712f?w=800",
    color: "#4a7c2a",
  },
  {
    slug: "organic-grocery",
    name: "Organic Grocery",
    tagline: "Premium range of organic essentials",
    description: "Farm-fresh, chemical-free groceries sourced directly from certified organic farms.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    color: "#2f6a2d",
  },
  {
    slug: "frozen-food-ready-to-eat",
    name: "Frozen & Ready to Eat",
    tagline: "Fresh, tasty & ready to eat",
    description: "Wholesome meals ready in minutes. No preservatives, just goodness.",
    image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?w=800",
    color: "#5a4e2f",
  },
  {
    slug: "organic-bakery-products",
    name: "Organic Bakery",
    tagline: "Freshly baked with love",
    description: "Artisanal breads, cakes and pastries baked with organic wholegrain flours.",
    image: "https://images.unsplash.com/photo-1534432182912-63863115e106?w=800",
    color: "#8b5a2b",
  },
  {
    slug: "herbal-products",
    name: "Herbal Products",
    tagline: "100% Herbal, 100% Organic",
    description: "Ancient Ayurvedic wisdom in every product. Pure herbs. Pure wellness.",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=800",
    color: "#6b8e23",
  },
];

export const PRODUCTS = [
  // Plant Based Meat
  { id: "all-day-sausages", name: "All Day Sausages", category: "plant-based-meat-products", price: 349, oldPrice: 399, image: "https://ubmarts.com/wp-content/uploads/2023/03/All-Day-Sausages-Uph-300x300.jpg", rating: 4.7, badge: "Best Seller", description: "Juicy plant-based sausages perfect for breakfast or grilling. High in protein, zero cholesterol.", weight: "200g" },
  { id: "breaded-patty", name: "Breaded Patty", category: "plant-based-meat-products", price: 299, oldPrice: 349, image: "https://ubmarts.com/wp-content/uploads/2023/03/Breaded-Patty-Uph-300x300.jpg", rating: 4.5, badge: "New", description: "Crispy breaded patties with a tender, savoury plant-based centre.", weight: "250g" },
  { id: "chic-chic-nuggets", name: "Chic-Chic Nuggets", category: "plant-based-meat-products", price: 279, oldPrice: 329, image: "https://ubmarts.com/wp-content/uploads/2023/03/Chic-Chic-Nuggets-UPh-300x300.jpg", rating: 4.8, badge: "Popular", description: "Kids-favourite plant-based nuggets. Crunchy outside, tender inside.", weight: "250g" },
  { id: "chicn-pop", name: "Chic'n Pop", category: "plant-based-meat-products", price: 259, oldPrice: 299, image: "https://ubmarts.com/wp-content/uploads/2023/03/Chic-n-Pop-Uph-300x300.jpg", rating: 4.6, description: "Bite-sized plant popcorn chicken. Perfect party snack.", weight: "200g" },
  { id: "classic-keema", name: "Classic Keema", category: "plant-based-meat-products", price: 329, oldPrice: 379, image: "https://ubmarts.com/wp-content/uploads/2023/03/Classic-Keema-Uph-300x300.jpg", rating: 4.7, description: "Traditional Indian keema, reimagined with plants. Rich, aromatic, guilt-free.", weight: "250g" },
  { id: "grilled-patty", name: "Grilled Patty", category: "plant-based-meat-products", price: 289, oldPrice: 339, image: "https://ubmarts.com/wp-content/uploads/2023/03/Grilled-Patty-Uph-300x300.jpg", rating: 4.5, description: "Flame-grilled plant patty with smoky char and juicy centre.", weight: "200g" },
  { id: "tandoori-patty", name: "Tandoori Patty", category: "plant-based-meat-products", price: 319, oldPrice: 369, image: "https://ubmarts.com/wp-content/uploads/2023/03/Tandoori-Patty-Uph-300x300.jpg", rating: 4.9, badge: "Chef's Pick", description: "Spice-marinated patties with authentic tandoori flavour.", weight: "250g" },
  { id: "the-royal-seekh", name: "The Royal Seekh", category: "plant-based-meat-products", price: 379, oldPrice: 449, image: "https://ubmarts.com/wp-content/uploads/2023/03/The-Royal-Seekh-2-300x300.jpg", rating: 4.8, badge: "Premium", description: "Royal seekh kebabs bursting with Mughlai spices. 100% plant-based.", weight: "300g" },

  // Organic Grocery
  { id: "organic-basmati-rice", name: "Organic Basmati Rice", category: "organic-grocery", price: 249, oldPrice: 299, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400", rating: 4.8, badge: "Best Seller", description: "Long-grain aromatic basmati, aged for perfect fluff.", weight: "1kg" },
  { id: "cold-pressed-oil", name: "Cold Pressed Mustard Oil", category: "organic-grocery", price: 349, oldPrice: 399, image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400", rating: 4.6, description: "Traditionally extracted, unrefined mustard oil.", weight: "1L" },
  { id: "jaggery-powder", name: "Organic Jaggery Powder", category: "organic-grocery", price: 179, oldPrice: 219, image: "https://images.unsplash.com/photo-1610725663727-08695a1ac3ff?w=400", rating: 4.7, description: "Chemical-free jaggery from sugarcane farms.", weight: "500g" },
  { id: "quinoa", name: "Organic Quinoa", category: "organic-grocery", price: 429, oldPrice: 499, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400", rating: 4.5, description: "Protein-rich superfood grain.", weight: "500g" },
  { id: "organic-honey", name: "Wild Forest Honey", category: "organic-grocery", price: 549, oldPrice: 649, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400", rating: 4.9, badge: "Premium", description: "Raw, unpasteurised honey harvested from Himalayan forests.", weight: "500g" },
  { id: "organic-atta", name: "Whole Wheat Atta", category: "organic-grocery", price: 299, oldPrice: 349, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", rating: 4.7, description: "Stone-ground whole wheat flour.", weight: "5kg" },

  // Frozen / Ready to eat
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", category: "frozen-food-ready-to-eat", price: 189, oldPrice: 229, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400", rating: 4.8, badge: "Popular", description: "Restaurant-style paneer in creamy tomato gravy. Ready in 3 minutes.", weight: "300g" },
  { id: "dal-makhani", name: "Dal Makhani", category: "frozen-food-ready-to-eat", price: 149, oldPrice: 179, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400", rating: 4.7, description: "Slow-cooked black lentils with butter and cream.", weight: "300g" },
  { id: "veg-biryani", name: "Veg Biryani", category: "frozen-food-ready-to-eat", price: 219, oldPrice: 259, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400", rating: 4.6, description: "Aromatic biryani with basmati rice and fresh veggies.", weight: "400g" },
  { id: "palak-paneer", name: "Palak Paneer", category: "frozen-food-ready-to-eat", price: 169, oldPrice: 199, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400", rating: 4.5, description: "Cottage cheese in spinach gravy. Iron-rich comfort food.", weight: "300g" },

  // Bakery
  { id: "multigrain-bread", name: "Multigrain Sourdough", category: "organic-bakery-products", price: 129, oldPrice: 149, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", rating: 4.8, badge: "Fresh", description: "Slow-fermented sourdough with 7 wholegrains.", weight: "400g" },
  { id: "oat-cookies", name: "Organic Oat Cookies", category: "organic-bakery-products", price: 199, oldPrice: 249, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400", rating: 4.6, description: "Crunchy oat cookies sweetened with jaggery.", weight: "250g" },
  { id: "banana-cake", name: "Banana Walnut Cake", category: "organic-bakery-products", price: 349, oldPrice: 399, image: "https://images.unsplash.com/photo-1534432182912-63863115e106?w=400", rating: 4.9, badge: "Chef's Pick", description: "Moist banana cake loaded with walnuts.", weight: "500g" },
  { id: "whole-wheat-buns", name: "Whole Wheat Buns", category: "organic-bakery-products", price: 89, oldPrice: 109, image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=400", rating: 4.5, description: "Soft whole wheat burger buns. Pack of 6.", weight: "300g" },

  // Herbal
  { id: "ashwagandha", name: "Ashwagandha Root Powder", category: "herbal-products", price: 349, oldPrice: 429, image: "https://images.unsplash.com/photo-1606951443958-5563274417a7?w=400", rating: 4.8, badge: "Best Seller", description: "Reduce stress and boost immunity.", weight: "200g" },
  { id: "triphala", name: "Triphala Churna", category: "herbal-products", price: 249, oldPrice: 299, image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=400", rating: 4.7, description: "Classical Ayurvedic digestive blend.", weight: "200g" },
  { id: "turmeric-powder", name: "Organic Turmeric Powder", category: "herbal-products", price: 149, oldPrice: 179, image: "https://images.unsplash.com/photo-1606951443958-5563274417a7?w=400", rating: 4.9, badge: "Popular", description: "High-curcumin turmeric from Andhra farms.", weight: "250g" },
  { id: "moringa", name: "Moringa Leaf Powder", category: "herbal-products", price: 299, oldPrice: 349, image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400", rating: 4.6, description: "Nutrient-dense green superfood.", weight: "200g" },
];

export const HERO_SLIDES = [
  {
    tagline: "Whenever, Whatever, Wherever",
    title: "Plant Based Meat",
    subtitle: "0% Animal Death \u2022 100% Healthy \u2022 Pure Goodness",
    cta: "Shop Plant-Based",
    href: "/products/plant-based-meat-products",
    image: "https://images.unsplash.com/photo-1633436375795-12b3b339712f?w=1600",
    accent: "#4a7c2a",
  },
  {
    tagline: "Farm to your Plate",
    title: "Premium Organic Grocery",
    subtitle: "Sourced from 13 states \u2022 Over 300+ certified organic products",
    cta: "Explore Grocery",
    href: "/products/organic-grocery",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600",
    accent: "#2f6a2d",
  },
  {
    tagline: "Fresh, Tasty & Ready to Eat",
    title: "Order Your Meal Today",
    subtitle: "Restaurant-quality meals delivered in minutes",
    cta: "Order Now",
    href: "/products/frozen-food-ready-to-eat",
    image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?w=1600",
    accent: "#8b5a2b",
  },
];

export const FEATURES = [
  { icon: "Truck", title: "Fastest Delivery", subtitle: "Order with UB Mart" },
  { icon: "Phone", title: "Have a Question?", subtitle: "+91 9311223026" },
  { icon: "ShieldCheck", title: "Safe & Secure Payment", subtitle: "Pay safely with Razorpay" },
  { icon: "Infinity", title: "Unlimited Orders", subtitle: "No order limitation" },
];

export const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Yoga Instructor, Delhi", avatar: "https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?w=200", text: "UB Mart's plant-based range has completely transformed my family's meals. Delicious, healthy and delivered fresh every single time.", rating: 5 },
  { name: "Anita Reddy", role: "Homemaker, Bangalore", avatar: "https://images.unsplash.com/photo-1713078582993-fdd86b1a2c1f?w=200", text: "Finally an organic mart I can trust. Their herbal products are pure and the ready-to-eat meals taste homemade.", rating: 5 },
  { name: "Rahul Verma", role: "Fitness Coach, Mumbai", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", text: "High-protein plant-based sausages and nuggets are my post-workout staple. Better than any brand I've tried.", rating: 5 },
  { name: "Meera Iyer", role: "Doctor, Chennai", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200", text: "I recommend UB Mart's organic grocery to all my patients. Chemical-free food is the foundation of good health.", rating: 5 },
];

export const HISTORY = [
  { year: "2012", title: "The Beginning", text: "UB Mart founded with a mission to bring organic and safe food to every Indian home. Started with a handful of farmers and 20 products." },
  { year: "2016", title: "Expanding Roots", text: "Partnered with 100+ farmers across North India. Launched our own line of organic grocery essentials." },
  { year: "2020", title: "Plant-Based Revolution", text: "Introduced India's premium plant-based meat range. First to offer authentic Indian flavours without animals." },
  { year: "2024", title: "300+ Products, 13 States", text: "Today we source from 13 states, offer 300+ certified organic products and deliver across India with Razorpay-secure payments." },
];

export const STATS = [
  { value: "300+", label: "Organic Products" },
  { value: "13", label: "States Sourced From" },
  { value: "12+", label: "Years of Trust" },
  { value: "50K+", label: "Happy Families" },
];

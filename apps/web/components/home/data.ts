import { Manufacturer, Product } from "./types";

export const subscribedManufacturers: Manufacturer[] = [
  {
    id: 1,
    name: "TechGear Pro",
    location: "San Francisco, CA",
    rating: 4.8,
    followers: "12.5K",
    verified: true,
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: 2,
    name: "StyleCraft Co.",
    location: "New York, NY",
    rating: 4.6,
    followers: "8.2K",
    verified: true,
    gradient: "from-blue-400 to-purple-400"
  },
  {
    id: 3,
    name: "EcoMakers",
    location: "Portland, OR",
    rating: 4.9,
    followers: "15.7K",
    verified: false,
    gradient: "from-green-400 to-blue-400"
  },
  {
    id: 4,
    name: "Urban Style",
    location: "Los Angeles, CA",
    rating: 4.7,
    followers: "9.8K",
    verified: true,
    gradient: "from-orange-400 to-red-400"
  },
  {
    id: 5,
    name: "TechFlow",
    location: "Seattle, WA",
    rating: 4.5,
    followers: "6.3K",
    verified: false,
    gradient: "from-indigo-400 to-purple-400"
  },
  {
    id: 6,
    name: "StyleCraft Co.",
    location: "New York, NY",
    rating: 4.6,
    followers: "8.2K",
    verified: true,
    gradient: "from-blue-400 to-purple-400"
  },
  {
    id: 7,
    name: "EcoMakers",
    location: "Portland, OR",
    rating: 4.9,
    followers: "15.7K",
    verified: false,
    gradient: "from-green-400 to-blue-400"
  },
  {
    id: 8,
    name: "Urban Style",
    location: "Los Angeles, CA",
    rating: 4.7,
    followers: "9.8K",
    verified: true,
    gradient: "from-orange-400 to-red-400"
  },
  {
    id: 9,
    name: "TechFlow",
    location: "Seattle, WA",
    rating: 4.5,
    followers: "6.3K",
    verified: false,
    gradient: "from-indigo-400 to-purple-400"
  }
];

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Classic Black T-Shirt",
    manufacturer: "TechGear Pro",
    price: 29.99,
    originalPrice: 39.99,
    image: "/black-tshirt.png",
    rating: 4.8,
    reviews: 324,
    isNew: true,
    colors: ["#000000", "#FFFFFF", "#FF0000"]
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    manufacturer: "StyleCraft Co.",
    price: 89.99,
    originalPrice: null,
    image: "/black-tshirt.png",
    rating: 4.6,
    reviews: 156,
    isNew: false,
    colors: ["#000080", "#000000", "#808080"]
  },
  {
    id: 3,
    name: "Casual White Shirt",
    manufacturer: "EcoMakers",
    price: 49.99,
    originalPrice: 59.99,
    image: "/black-tshirt.png",
    rating: 4.9,
    reviews: 892,
    isNew: true,
    colors: ["#FFFFFF", "#F5F5F5", "#E8E8E8"]
  },
  {
    id: 4,
    name: "Vintage Denim Jacket",
    manufacturer: "TechGear Pro",
    price: 129.99,
    originalPrice: 149.99,
    image: "/black-tshirt.png",
    rating: 4.7,
    reviews: 567,
    isNew: false,
    colors: ["#000080", "#000000", "#4169E1"]
  },
  {
    id: 5,
    name: "Premium Cotton Hoodie",
    manufacturer: "StyleCraft Co.",
    price: 79.99,
    originalPrice: null,
    image: "/black-tshirt.png",
    rating: 4.5,
    reviews: 234,
    isNew: false,
    colors: ["#000000", "#808080", "#A9A9A9"]
  },
  {
    id: 6,
    name: "Summer Shorts",
    manufacturer: "EcoMakers",
    price: 39.99,
    originalPrice: 49.99,
    image: "/black-tshirt.png",
    rating: 4.8,
    reviews: 445,
    isNew: true,
    colors: ["#000000", "#808080", "#A9A9A9"]
  }
]; 
"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Heart, Truck, RotateCcw, Shield, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "@redb/db";



const ProductPageContainer = ({ productss }: { productss: Product[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("ceramic-white");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedFit, setSelectedFit] = useState("custom");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in real app this would come from API/database
  const product = {
    id: "custom-fit-linen-shirt",
    name: "Custom Fit Linen Shirt",
    brand: "Polo Ralph Lauren",
    price: 138.00,
    originalPrice: 165.00,
    rating: 4.5,
    reviewCount: 226,
    description: "This striped shirt is crafted from breathable, lightweight linen and finished with genuine mother-of-pearl buttons. At the left cuff, the iconic Polo Pony adds a signature touch.",
    features: [
      "Custom Fit: a trim silhouette in between our Classic Fit and Slim Fit. Tailored through the waist.",
      "Size medium has a 32½\" back body length, an 18½\" shoulder, a 44½\" chest, and a 35\" sleeve length.",
      "Point collar. Buttoned placket. Genuine mother-of-pearl buttons.",
      "Long sleeves with buttoned barrel cuffs.",
      "Left chest patch pocket.",
      "Split pleated back yoke with shoulder pleats ensures smooth, contoured shoulders.",
      "100% linen. Machine washable. Imported.",
      "Model is 6'1\"/185 cm and wears a size medium."
    ],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=600&h=800&fit=crop&crop=center"
    ],
    colors: [
      { id: "ceramic-white", name: "Ceramic White", hex: "#F8F8FF" },
      { id: "coastal-beige", name: "Coastal Beige", hex: "#F5F5DC" },
      { id: "polo-black", name: "Polo Black", hex: "#000000" },
      { id: "newport-navy", name: "Newport Navy", hex: "#1E3A8A" },
      { id: "office-blue", name: "Office Blue", hex: "#3B82F6" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    fits: [
      { id: "classic", name: "Classic Fit", description: "Cut fuller through the chest, waist, and sleeve" },
      { id: "custom", name: "Custom Fit", description: "Trim silhouette between Classic and Slim Fit" },
      { id: "slim", name: "Slim Fit", description: "Tailored close to the body" }
    ]
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      fit: selectedFit,
      quantity
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-500">
            <span>Men</span> / <span>Clothing</span> / <span>Casual Shirts</span> / <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="mb-8 lg:mb-0">
            <div className="relative">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage] || "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&crop=center"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              
              {/* Image Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={64}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-lg text-gray-600 mb-2">{product.brand}</p>
              <h1 className="text-3xl font-light text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl font-medium text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.originalPrice > product.price && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <Separator />

            {/* Fit Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">FIT:</h3>
              <RadioGroup value={selectedFit} onValueChange={setSelectedFit} className="space-y-2">
                {product.fits.map((fit) => (
                  <div key={fit.id} className="flex items-center space-x-3">
                    <RadioGroupItem value={fit.id} id={fit.id} />
                    <Label htmlFor={fit.id} className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-medium">{fit.name}</div>
                        <div className="text-sm text-gray-500">{fit.description}</div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Color: {product.colors.find(c => c.id === selectedColor)?.name}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-8 h-8 rounded-md border-2 transition-all ${
                      selectedColor === color.id
                        ? 'border-gray-900 ring-2 ring-gray-900 ring-offset-2'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <Separator />

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900">Size:</h3>
                <button className="text-sm text-blue-600 hover:underline">Size Chart</button>
              </div>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-900">Quantity:</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleAddToCart}
                className="w-full bg-black text-white hover:bg-gray-800 py-3"
                disabled={!selectedSize}
              >
                Add to Cart
              </Button>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="flex-1">
                  Find In Store
                </Button>
              </div>
            </div>

            <Separator />

            {/* Shipping Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="h-4 w-4" />
                <span>Free shipping with RL Account</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="h-4 w-4" />
                <span>Free returns & exchanges</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="h-4 w-4" />
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-8">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">{product.description}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Details</h3>
                <ul className="space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-light text-gray-900">{product.rating}</div>
                  <div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Based on {product.reviewCount} reviews</p>
                  </div>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-medium text-gray-900 mb-2">Perfect summer shirt</p>
                    <p className="text-gray-600 text-sm mb-2">
                      The linen is exactly what I was looking for - lightweight and breathable. 
                      The custom fit is perfect, not too tight but still tailored. Great quality construction.
                    </p>
                    <p className="text-xs text-gray-500">John D. - Verified Purchase</p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <p className="font-medium text-gray-900 mb-2">Great quality, runs slightly large</p>
                    <p className="text-gray-600 text-sm mb-2">
                      Beautiful shirt with excellent attention to detail. The mother-of-pearl buttons 
                      are a nice touch. Size M was a bit loose on me, would recommend sizing down.
                    </p>
                    <p className="text-xs text-gray-500">Sarah M. - Verified Purchase</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Shipping</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free shipping with Ralph Lauren Account</li>
                    <li>• Orders typically arrive within 5 business days</li>
                    <li>• Same Day Delivery available in select locations</li>
                    <li>• Express shipping available for an additional fee</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Returns & Exchanges</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free returns and exchanges within 30 days</li>
                    <li>• Items must be unwashed, unworn, and unaltered</li>
                    <li>• Original tags must be attached</li>
                    <li>• Personalized items cannot be returned</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductPageContainer; 
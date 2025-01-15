import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categories = ["All", "Cooling", "Gaming", "Audio", "Storage", "Accessories"];

const products = [
  {
    id: 1,
    name: "5-Finger Glove",
    price: 600,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1551578657-a7e74acb0135?w=800&auto=format&fit=crop&q=60",
    description: "High-quality gaming gloves designed for maximum comfort and grip during intense gaming sessions.",
  },
  {
    id: 2,
    name: "GT29 Magnetic Cooler",
    price: 2700,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "Advanced magnetic cooling system for optimal device temperature control.",
  },
  {
    id: 3,
    name: "Thumb Sleeves",
    price: 250,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1625061770820-5f7a53a6cf26?w=800&auto=format&fit=crop&q=60",
    description: "Comfortable thumb sleeves for enhanced grip and control during mobile gaming.",
  },
  {
    id: 4,
    name: "Cooling Fan",
    price: 1600,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "High-performance cooling fan for maintaining optimal device temperature.",
  },
  {
    id: 5,
    name: "JAK Gaming Headphones",
    price: 1900,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=60",
    description: "Premium gaming headphones with immersive sound quality and comfort.",
  },
  {
    id: 6,
    name: "Bluetooth Gaming Pad",
    price: 2700,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&auto=format&fit=crop&q=60",
    description: "Wireless gaming controller for seamless gaming experience.",
  },
  {
    id: 7,
    name: "Magnetic Ice Phone Cooler",
    price: 2700,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "Innovative magnetic cooling solution for mobile devices.",
  },
  {
    id: 8,
    name: "iPad Magnetic Iced Cooling Machine",
    price: 3600,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "Specialized cooling system designed for iPads and tablets.",
  },
  {
    id: 9,
    name: "Gaming Triggers",
    price: 1300,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1625061770820-5f7a53a6cf26?w=800&auto=format&fit=crop&q=60",
    description: "Responsive gaming triggers for enhanced mobile gaming control.",
  },
  {
    id: 10,
    name: "3-Gear Mobile Cooling Fan + Triggers + Thumb Sleeves",
    price: 3300,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "Complete gaming accessory set including cooling fan, triggers, and thumb sleeves.",
  },
  {
    id: 11,
    name: "Flash Disk 64GB",
    price: 1350,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1625061770820-5f7a53a6cf26?w=800&auto=format&fit=crop&q=60",
    description: "High-speed 64GB flash drive for reliable storage.",
  },
  {
    id: 12,
    name: "4-Finger Mobile Triggers",
    price: 1000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1625061770820-5f7a53a6cf26?w=800&auto=format&fit=crop&q=60",
    description: "Advanced 4-finger trigger system for precise gaming control.",
  },
  {
    id: 13,
    name: "iPad Stand",
    price: 1500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625061770820-5f7a53a6cf26?w=800&auto=format&fit=crop&q=60",
    description: "Adjustable stand for comfortable iPad viewing and gaming.",
  },
  {
    id: 14,
    name: "EDK Airpods",
    price: 1500,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=60",
    description: "Wireless earbuds for immersive gaming audio experience.",
  },
  {
    id: 15,
    name: "Home 360 TV",
    price: 4500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60",
    description: "360-degree rotating TV mount for optimal viewing angles.",
  },
  {
    id: 16,
    name: "USB Plug-In Fan with Triggers",
    price: 2500,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "USB-powered cooling fan with integrated gaming triggers.",
  },
  {
    id: 17,
    name: "Mobile Cooling Fan with Triggers (2500mAh)",
    price: 3500,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "Rechargeable cooling fan with 2500mAh battery and gaming triggers.",
  },
  {
    id: 18,
    name: "Cooling Fan Triggers (500mAh)",
    price: 3500,
    category: "Cooling",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
    description: "Compact cooling fan with 500mAh battery and integrated triggers.",
  },
  {
    id: 24,
    name: "LED Gaming Monitor",
    price: 12000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1603791444400-47f2d9f5f2db?w=800&auto=format&fit=crop&q=60",
    description: "A high-definition LED gaming monitor with fast refresh rates for smoother gameplay.",
  },
  {
    id: 25,
    name: "Bluetooth Gaming Speaker",
    price: 4500,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1603665642659-2abf28b9db90?w=800&auto=format&fit=crop&q=60",
    description: "Portable Bluetooth speaker with deep bass and clear sound for gaming.",
  },
  {
    id: 26,
    name: "Gaming Mouse Pad XXL",
    price: 2500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1580425287378-0c951e7325b7?w=800&auto=format&fit=crop&q=60",
    description: "Large mouse pad with a smooth surface for precision gaming control.",
  },
  {
    id: 27,
    name: "Mobile Game Controller",
    price: 3500,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1600852389709-9c7b4b3c64ea?w=800&auto=format&fit=crop&q=60",
    description: "Wireless mobile game controller for seamless gaming on the go.",
  },
  {
    id: 28,
    name: "4K UHD TV",
    price: 55000,
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1603791444400-47f2d9f5f2db?w=800&auto=format&fit=crop&q=60",
    description: "Stunning 4K Ultra High Definition TV with vibrant picture quality.",
  },
  {
    id: 29,
    name: "Gaming Laptop Razer Blade",
    price: 150000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1603638051069-b8795fe8064c?w=800&auto=format&fit=crop&q=60",
    description: "High-performance gaming laptop with advanced cooling and powerful graphics.",
  },
  {
    id: 30,
    name: "Pro Gaming Headset",
    price: 4500,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1610560701683-c50d697a9a0c?w=800&auto=format&fit=crop&q=60",
    description: "Comfortable gaming headset with surround sound for immersive gaming experience.",
  },
  {
    id: 31,
    name: "RGB Gaming Keyboard",
    price: 6500,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1610560701683-c50d697a9a0c?w=800&auto=format&fit=crop&q=60",
    description: "Customizable RGB mechanical keyboard with responsive key switches.",
  },
  {
    id: 32,
    name: "PS5 DualSense Wireless Controller",
    price: 8000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1603880379069-2835181bcd3a?w=800&auto=format&fit=crop&q=60",
    description: "Official wireless controller for the PlayStation 5 with adaptive triggers and haptic feedback.",
  },
  {
    id: 33,
    name: "HDMI Cable 10ft",
    price: 600,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1603880451503-8b4f98703c4c?w=800&auto=format&fit=crop&q=60",
    description: "High-quality HDMI cable for seamless video and audio connection.",
  },
  {
    id: 34,
    name: "Gaming Mouse with RGB Lighting",
    price: 3000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1600852681131-7ba44e0388e9?w=800&auto=format&fit=crop&q=60",
    description: "Customizable gaming mouse with RGB lighting and precision tracking.",
  },
  {
    id: 35,
    name: "Wireless Bluetooth Gaming Headset",
    price: 5500,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1610560701683-c50d697a9a0c?w=800&auto=format&fit=crop&q=60",
    description: "Wireless Bluetooth gaming headset with clear sound and microphone.",
  },
  {
    id: 36,
    name: "PlayStation VR Headset",
    price: 22000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1593491047240-3b7b5b21d327?w=800&auto=format&fit=crop&q=60",
    description: "Virtual reality headset for PlayStation 4 with immersive gaming experience.",
  },
  {
    id: 37,
    name: "Mobile Phone Stand for Gaming",
    price: 1000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1610560701683-c50d697a9a0c?w=800&auto=format&fit=crop&q=60",
    description: "Adjustable phone stand for mobile gaming, providing the perfect angle.",
  },
  {
    id: 38,
    name: "Portable Gaming Console",
    price: 12000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1600852389709-9c7b4b3c64ea?w=800&auto=format&fit=crop&q=60",
    description: "Handheld portable gaming console with a wide range of games.",
  },
  {
    id: 39,
    name: "Gaming Mouse with Adjustable DPI",
    price: 3500,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1603791444400-47f2d9f5f2db?w=800&auto=format&fit=crop&q=60",
    description: "Gaming mouse with customizable DPI settings for precision and control.",
  },
  {
    id: 40,
    name: "Desktop Gaming PC",
    price: 100000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1603665642659-2abf28b9db90?w=800&auto=format&fit=crop&q=60",
    description: "High-performance gaming PC with powerful CPU and GPU for smooth gameplay.",
  },
  {
    id: 41,
    name: "Customizable RGB Gaming Desk",
    price: 15000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1603791444400-47f2d9f5f2db?w=800&auto=format&fit=crop&q=60",
    description: "Gaming desk with built-in RGB lighting and ample space for all your gaming gear.",
  },
  {
    id: 42,
    name: "Ergonomic Gaming Chair",
    price: 16000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1603665642659-2abf28b9db90?w=800&auto=format&fit=crop&q=60",
    description: "Comfortable and ergonomic gaming chair for long gaming sessions.",
  },
  {
    id: 43,
    name: "Xbox Wireless Controller",
    price: 5000,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1600852389709-9c7b4b3c64ea?w=800&auto=format&fit=crop&q=60",
    description: "Official wireless controller for Xbox series with enhanced grip and comfort.",
  },
  {
    id: 44,
    name: "Bluetooth Speaker with RGB Lights",
    price: 3500,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1600852389709-9c7b4b3c64ea?w=800&auto=format&fit=crop&q=60",
    description: "Portable Bluetooth speaker with RGB lights for a vibrant audio experience.",
  },
  {
    id: 45,
    name: "Gaming Chair with Footrest",
    price: 18000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=60",
    description: "Ergonomic gaming chair with adjustable footrest for comfort.",
  },
 
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
            Welcome to Kenya Universities Esports Shop
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
            Level up your game with professional gaming gear
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-fade-in"
            onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Now
          </Button>
        </div>
      </div>

      {/* Shop Section */}
      <div id="shop-section" className="scroll-mt-16">
        <header className="py-6 px-4 border-b border-secondary">
          <h2 className="text-3xl font-bold text-center">Our Products</h2>
        </header>

        <main className="container py-8">
          {/* Search and Categories */}
          <div className="space-y-6 mb-8">
            <div className="max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                description={product.description}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found matching your search criteria.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
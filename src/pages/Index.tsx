import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Chairs", "Cooling Fans", "Gloves", "Accessories"];

const products = [
  {
    id: 1,
    name: "Pro Gaming Chair",
    price: 25000,
    category: "Chairs",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "RGB Cooling Fan",
    price: 3500,
    category: "Cooling Fans",
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Gaming Gloves",
    price: 2000,
    category: "Gloves",
    image: "https://images.unsplash.com/photo-1551578657-a7e74acb0135?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "RGB Mousepad",
    price: 1500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625061770820-5f7a53a6cf26?w=800&auto=format&fit=crop&q=60",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60')",
          backgroundBlendMode: "overlay",
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
      <div id="shop-section">
        <header className="py-6 px-4 border-b border-secondary">
          <h2 className="text-3xl font-bold text-center">Our Products</h2>
        </header>

        <main className="container py-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
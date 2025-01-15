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
      <header className="py-6 px-4 border-b border-secondary">
        <h1 className="text-3xl font-bold text-center">Kenya Universities Esports Shop</h1>
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
  );
};

export default Index;
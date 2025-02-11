
import Hero from "@/components/Hero";
import { NavigationButtons } from "@/components/NavigationButtons";
import GamingDevices from "@/components/GamingDevices";
import ProductGrid from "@/components/ProductGrid";

const browsergamingProducts = [
  {
    id: 101,
    name: "Gaming Mouse Pad",
    price: 1200,
    category: "Browser Gaming",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "High-quality gaming mouse pad for precise control"
  },
  // ... Add more browser gaming products here
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <NavigationButtons />
      
      {/* Browser Gaming Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Browser Gaming Products
          </h2>
          <ProductGrid products={browsergamingProducts} />
        </div>
      </section>
      
      {/* Gaming Phones Section */}
      <GamingDevices />
    </div>
  );
};

export default Index;

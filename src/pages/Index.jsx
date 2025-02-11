
import Hero from "@/components/Hero";
import { NavigationButtons } from "@/components/NavigationButtons";
import ProductGrid from "@/components/ProductGrid";

const browsergamingProducts = [
  {
    id: 1,
    name: "RedMagic 6",
    price: 37000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 2,
    name: "RedMagic 7",
    price: 46000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 3,
    name: "RedMagic 7S Pro",
    price: 53000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 4,
    name: "RedMagic 8 Pro",
    price: 65000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 5,
    name: "RedMagic 8S Pro",
    price: 69000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 6,
    name: "RedMagic 8S Pro+",
    price: 73000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 7,
    name: "RedMagic 9 Pro",
    price: 82000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 8,
    name: "RedMagic 9 Pro+",
    price: 87000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 9,
    name: "RedMagic 9S Pro",
    price: 86000,
    category: "Gaming Phones",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "Storage: 12GB + 256GB and 16GB + 512GB | Performance: Smooth 90fps, can be modded to 144fps"
  },
  {
    id: 101,
    name: "Gaming Mouse Pad",
    price: 1200,
    category: "Browser Gaming",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg",
    description: "High-quality gaming mouse pad for precise control"
  }
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
    </div>
  );
};

export default Index;

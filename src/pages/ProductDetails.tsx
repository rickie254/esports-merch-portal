import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductGrid from "@/components/ProductGrid";
import SearchAndFilter from "@/components/SearchAndFilter";
import { Pagination } from "@/components/ui/pagination";
import { NavigationButtons } from "@/components/NavigationButtons";
import { Button } from "@/components/ui/button";

const categories = ["All", "Cooling", "Gaming", "Audio", "Storage", "Accessories"];

const products = [
  { 
    id: 1, 
    name: "Gaming Mouse", 
    category: "Gaming",
    price: 2999,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    description: "Professional gaming mouse featuring advanced optical sensor, customizable RGB lighting, and ergonomic design with 8 programmable buttons for ultimate gaming precision."
  },
  { 
    id: 2, 
    name: "Mechanical Keyboard", 
    category: "Gaming",
    price: 5999,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800",
    description: "Premium mechanical gaming keyboard with Cherry MX switches, per-key RGB backlighting, dedicated media controls, and durable aluminum frame construction."
  },
  { 
    id: 3, 
    name: "Headset", 
    category: "Audio",
    price: 3999,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800",
    description: "Professional gaming headset with 7.1 surround sound, noise-canceling microphone, memory foam ear cushions, and multi-platform compatibility."
  },
  { 
    id: 4, 
    name: "External Hard Drive", 
    category: "Storage",
    price: 4999,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800",
    description: "High-speed 1TB external hard drive with USB 3.0 connectivity, automatic backup software, and shock-resistant design for reliable data storage."
  },
  { 
    id: 5, 
    name: "Cooling Pad", 
    category: "Cooling",
    price: 1999,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800",
    description: "Advanced laptop cooling pad featuring five high-speed fans, adjustable height settings, and blue LED lighting for optimal thermal management."
  },
  { 
    id: 6, 
    name: "Mouse Pad", 
    category: "Accessories",
    price: 999,
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=800",
    description: "Extended gaming mouse pad with micro-woven cloth surface, anti-slip rubber base, and stitched edges for durability and precise mouse tracking."
  },
  { 
    id: 7, 
    name: "Gaming Chair", 
    category: "Accessories",
    price: 15999,
    image: "https://images.unsplash.com/photo-1610395219791-21b0353e43c3?w=800",
    description: "Ergonomic gaming chair with 4D adjustable armrests, 180° reclining, lumbar support cushion, and premium PU leather upholstery."
  },
  { 
    id: 8, 
    name: "Webcam", 
    category: "Audio",
    price: 2999,
    image: "https://images.unsplash.com/photo-1587826154528-f1adec0a4653?w=800",
    description: "Full HD 1080p webcam with auto-focus, low-light correction, built-in dual microphones, and privacy shutter for professional streaming."
  },
];

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const productsPerPage = 4;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div 
      className="min-h-screen bg-background text-foreground pb-8"
      style={{
        backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
      }}
    >
      <NavigationButtons />
      
      <div className="container mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6 mt-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          Back to Home
        </Button>

        <SearchAndFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ProductGrid products={currentProducts} />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
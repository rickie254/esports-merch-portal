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
    image: "/placeholder.svg",
    description: "High-performance gaming mouse with RGB lighting"
  },
  { 
    id: 2, 
    name: "Mechanical Keyboard", 
    category: "Gaming",
    price: 5999,
    image: "/placeholder.svg",
    description: "Mechanical gaming keyboard with customizable switches"
  },
  { 
    id: 3, 
    name: "Headset", 
    category: "Audio",
    price: 3999,
    image: "/placeholder.svg",
    description: "Premium gaming headset with surround sound"
  },
  { 
    id: 4, 
    name: "External Hard Drive", 
    category: "Storage",
    price: 4999,
    image: "/placeholder.svg",
    description: "1TB external hard drive for extra storage"
  },
  { 
    id: 5, 
    name: "Cooling Pad", 
    category: "Cooling",
    price: 1999,
    image: "/placeholder.svg",
    description: "Laptop cooling pad with multiple fans"
  },
  { 
    id: 6, 
    name: "Mouse Pad", 
    category: "Accessories",
    price: 999,
    image: "/placeholder.svg",
    description: "Large gaming mouse pad with stitched edges"
  },
  { 
    id: 7, 
    name: "Gaming Chair", 
    category: "Accessories",
    price: 15999,
    image: "/placeholder.svg",
    description: "Ergonomic gaming chair with lumbar support"
  },
  { 
    id: 8, 
    name: "Webcam", 
    category: "Audio",
    price: 2999,
    image: "/placeholder.svg",
    description: "HD webcam for streaming and video calls"
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
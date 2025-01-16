import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchAndFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchAndFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
}: SearchAndFilterProps) => (
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
);

export default SearchAndFilter;
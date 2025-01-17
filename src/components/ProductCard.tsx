import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export function ProductCard({ id, name, price, image, category, description }: ProductCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${id}`, { state: { product: { id, name, price, image, category, description } } });
  };

  return (
    <div className="bg-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs text-primary uppercase tracking-wider">{category}</span>
        <h3 className="text-lg font-bold mt-1">{name}</h3>
        <p className="text-xl font-bold text-primary mt-2">KES {price.toLocaleString()}</p>
        <Button 
          onClick={handleViewDetails}
          className="w-full mt-4 bg-primary hover:bg-primary/90"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    navigate(`/product/${id}`, { 
      state: { 
        product: { id, name, price, image, category, description } 
      } 
    });
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <span className="absolute top-2 right-2 bg-primary px-2 py-1 rounded text-xs text-white">
            {category}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg text-white mb-2">{name}</CardTitle>
        <CardDescription className="text-gray-300 line-clamp-2 mb-2">
          {description}
        </CardDescription>
        <p className="text-2xl font-bold text-primary">KES {price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleViewDetails}
          className="w-full bg-primary hover:bg-primary/90"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
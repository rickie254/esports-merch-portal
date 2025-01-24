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
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

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
  const { addToCart } = useCart();

  const handleViewDetails = () => {
    navigate(`/product/${id}`, { 
      state: { 
        product: { id, name, price, image, category, description } 
      } 
    });
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image,
    });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer" onClick={handleViewDetails}>
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
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          onClick={handleViewDetails}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          View Details
        </Button>
        <Button 
          onClick={handleAddToCart}
          variant="outline"
          className="bg-white/10 hover:bg-white/20"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

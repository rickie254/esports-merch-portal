import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export function ProductCard({ name, price, image, category }: ProductCardProps) {
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
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
          onClick={handleAddToCart}
          className="w-full mt-4 bg-primary hover:bg-primary/90 animate-pulse-red"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
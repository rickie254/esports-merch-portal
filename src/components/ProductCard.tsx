import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export function ProductCard({ name, price, image, category, description }: ProductCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="bg-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
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
              variant="outline"
              className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white"
            >
              View Details
            </Button>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="text-primary font-bold">
            KES {price.toLocaleString()}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <p className="text-sm text-foreground/90">
            {description || "Experience gaming excellence with this premium product."}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
              {category}
            </span>
          </div>
        </div>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 animate-pulse-red"
        >
          Add to Cart
        </Button>
      </DialogContent>
    </Dialog>
  );
}
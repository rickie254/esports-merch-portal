import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export function NavigationButtons() {
  const navigate = useNavigate();
  const { items } = useCart();

  return (
    <div className="w-full py-4 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/products')}
            >
              Products
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/events')}
            >
              Events
            </Button>
          </div>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 relative"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
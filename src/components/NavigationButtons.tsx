import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export function NavigationButtons() {
  const navigate = useNavigate();
  const { items } = useCart();

  return (
    <div className="container py-4 sm:py-6 lg:py-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            onClick={() => navigate('/products')}
          >
            Products
          </Button>
          <Button 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm text-sm sm:text-base"
            onClick={() => navigate('/events')}
          >
            Events
          </Button>
        </div>
        <Button 
          variant="outline" 
          className="bg-white/10 backdrop-blur-sm relative text-sm sm:text-base"
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
  );
}
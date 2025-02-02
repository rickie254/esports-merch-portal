import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroButtons = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-12 animate-fade-in w-full max-w-6xl mx-auto">
      <Button
        onClick={() => navigate("/products")}
        className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Browse Gaming Products
      </Button>
      <Button
        onClick={() => navigate("/cp-shop")}
        className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Buy CP Points
      </Button>
      <Button
        onClick={() => navigate("/events")}
        className="w-full bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Tournament Tickets
      </Button>
    </div>
  );
};

export default HeroButtons;
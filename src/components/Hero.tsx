import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
          Kenya Universities Esports Shop
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
          Level up your game with professional gaming gear
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-fade-in">
          <Button
            onClick={() => navigate("/products")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Browse Gaming Products
          </Button>
          <Button
            onClick={() => navigate("/cp-shop")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Buy CP Points
          </Button>
          <Button
            onClick={() => navigate("/events")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Tournament Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
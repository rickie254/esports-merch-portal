import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
          Welcome to Kenya Universities Esports Shop
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
          Level up your game with professional gaming gear
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <Button
            onClick={() => navigate("/shop")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded"
          >
            Shop Now for Products
          </Button>
          <Button
            onClick={() => navigate("/cp-purchase")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded"
          >
            Buy Codm Points from 254•CP-SHOP
          </Button>
          <Button
            onClick={() => navigate("/events")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded"
          >
            Buy Event Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
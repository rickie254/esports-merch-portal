import { useNavigate } from "react-router-dom";

const HeroButtons = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 animate-fade-in">
      <button
        onClick={() => navigate("/products")}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Browse Gaming Products
      </button>
      <button
        onClick={() => navigate("/cp-shop")}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Buy CP Points
      </button>
      <button
        onClick={() => navigate("/events")}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
      >
        Tournament Tickets
      </button>
    </div>
  );
};

export default HeroButtons;
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export function NavigationButtons() {
  const navigate = useNavigate();
  const { items } = useCart();

  return (
    <div className="container py-8">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4">
          <button 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded hover:bg-white/20 transition-colors"
            onClick={() => navigate('/products')}
          >
            Products
          </button>
          <button 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded hover:bg-white/20 transition-colors"
            onClick={() => navigate('/events')}
          >
            Events
          </button>
        </div>
        <button 
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded hover:bg-white/20 transition-colors relative"
          onClick={() => navigate('/cart')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Cart
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
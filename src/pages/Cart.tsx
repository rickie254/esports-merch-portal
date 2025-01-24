import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function Cart() {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div 
      className="min-h-screen py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container max-w-4xl mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-300 mb-4">Your cart is empty</p>
              <Button 
                onClick={() => navigate("/products")}
                className="bg-primary hover:bg-primary/90"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white/5 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-primary">KES {item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="bg-white/10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-white/10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-white">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    KES {total.toLocaleString()}
                  </span>
                </div>
                <Button
                  onClick={() => navigate("/payment")}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
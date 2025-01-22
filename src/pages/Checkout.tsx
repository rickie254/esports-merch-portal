import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Navigate to payment page with order details
    navigate("/product-payment", {
      state: {
        orderDetails: {
          items,
          total,
          totalItems: items.length,
          shippingDetails: formData
        }
      }
    });
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

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
      <div className="container">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8">
            <h1 className="text-3xl font-bold text-white mb-8">Order Summary</h1>

            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-primary">KES {item.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-300">Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-primary font-semibold">
                    KES {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    KES {total.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Full Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/20 text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/20 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/20 text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">
                  Shipping Address
                </label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-white/20 text-white"
                  placeholder="Enter your shipping address"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Proceed to Payment
              </Button>
            </form>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full bg-green-600/20 hover:bg-green-600/30"
                onClick={() => window.open("https://wa.me/message/XRDL2G3MT3GZD1", "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
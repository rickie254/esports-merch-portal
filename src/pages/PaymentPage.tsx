import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { MessageCircle } from "lucide-react";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { total, clearCart } = useCart();

  const handlePayment = () => {
    // Open WhatsApp with pre-filled message
    const message = `Hello! I would like to make a payment of KES ${total.toLocaleString()} for my order.`;
    window.open(`https://wa.me/254748376744?text=${encodeURIComponent(message)}`, "_blank");
    clearCart();
    navigate("/");
  };

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
          className="mb-6 bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          ← Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Complete Your Payment</h1>
          
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-white mb-2">Order Summary</h2>
              <p className="text-2xl font-bold text-primary">
                Total: KES {total.toLocaleString()}
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handlePayment}
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
              >
                Pay Now via WhatsApp
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">
                  Click the button above to complete your payment through WhatsApp.
                  Our team will assist you with the payment process.
                </p>
                <Button
                  variant="outline"
                  className="bg-green-600/20 hover:bg-green-600/30"
                  onClick={() => window.open("https://wa.me/254748376744", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Need Help? Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
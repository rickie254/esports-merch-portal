import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = location.state?.product;

  if (!product) {
    navigate("/products");
    return null;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
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
      <div className="container">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-white">{product.name}</h1>
              <p className="text-gray-300">{product.description}</p>
              <div className="space-y-4">
                <p className="text-3xl font-bold text-primary">
                  KES {product.price.toLocaleString()}
                </p>
                <div className="space-y-2">
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 hover:bg-white/20"
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Button
                  variant="outline"
                  className="w-full bg-green-600/20 hover:bg-green-600/30"
                  onClick={() => window.open("https://wa.me/c/254748376744", "_blank")}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
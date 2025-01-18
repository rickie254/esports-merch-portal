import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const handleSupport = () => {
    window.open('https://wa.me/message/XRDL2G3MT3GZD1', '_blank');
  };

  return (
    <div 
      className="min-h-screen py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/codm/COD-LAUNCH-TOUT.jpg)`,
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
        
        <div className="grid md:grid-cols-2 gap-8 bg-black/40 backdrop-blur-sm p-6 rounded-lg">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <span className="text-sm text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-white">{product.name}</h1>
            <p className="text-2xl font-bold text-primary">
              KES {product.price.toLocaleString()}
            </p>
            <p className="text-white/80">
              {product.description}
            </p>
            <div className="space-y-4">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Add to Cart
              </Button>
              <Button 
                onClick={handleSupport}
                variant="outline"
                className="w-full"
              >
                Contact Support on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
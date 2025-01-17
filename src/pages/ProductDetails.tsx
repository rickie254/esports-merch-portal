import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate("/");
    return null;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="container py-8">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        ← Back
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8">
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
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-primary">
            KES {product.price.toLocaleString()}
          </p>
          <p className="text-foreground/80">
            {product.description}
          </p>
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary/90"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
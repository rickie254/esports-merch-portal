import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

export default function CPPurchaseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle navigation in useEffect
  useEffect(() => {
    if (!location.state?.cpDetails) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const cpDetails = location.state?.cpDetails;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email && password) {
      navigate("/cp-payment", { 
        state: { 
          cpDetails,
          userDetails: { username, email }
        } 
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
    }
  };

  // If no cpDetails, return null (navigation will happen in useEffect)
  if (!cpDetails) {
    return null;
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png/v1/fill/w_480,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png)`,
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="max-w-md w-full">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Enter Game Details</h2>
          
          <div className="bg-primary/10 p-4 rounded-lg mb-6">
            <h3 className="text-lg text-white mb-2">Order Summary</h3>
            <p className="text-white/90">{cpDetails.points.toLocaleString()} CP</p>
            <p className="text-xl font-bold text-primary-foreground">
              {cpDetails.price.toLocaleString()} {cpDetails.currency}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1 text-white">
                Game Username
              </label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-white/20 text-white placeholder:text-white/50"
                placeholder="Enter your game username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                Game Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/20 text-white placeholder:text-white/50"
                placeholder="Enter your game email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1 text-white">
                Game Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/20 text-white placeholder:text-white/50"
                placeholder="Enter your game password"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Proceed to Payment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
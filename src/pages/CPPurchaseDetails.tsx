import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function CPPurchaseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const cpDetails = location.state?.cpDetails;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!cpDetails) {
    navigate("/");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted",
      description: "Your CP purchase request has been received. Please check your email for payment instructions.",
    });
    navigate("/");
  };

  return (
    <div className="container max-w-2xl py-8">
      <Button 
        variant="outline" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        ← Back
      </Button>

      <div className="bg-secondary p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold mb-2">Order Summary</h2>
        <p className="text-lg">{cpDetails.points.toLocaleString()} CP</p>
        <p className="text-xl font-bold text-primary">
          {cpDetails.price.toLocaleString()} {cpDetails.currency}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Game Username
          </label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Game Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Game Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Submit Order
        </Button>
      </form>
    </div>
  );
}
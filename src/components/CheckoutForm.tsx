import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface CheckoutFormProps {
  onSubmit: (formData: CheckoutFormData) => void;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CheckoutForm = ({ onSubmit }: CheckoutFormProps) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
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
    onSubmit(formData);
  };

  return (
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
  );
};

export default CheckoutForm;
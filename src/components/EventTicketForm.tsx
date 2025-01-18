import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export function EventTicketForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    game: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/cp-payment", { state: { type: "event-ticket", ...formData } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Full Name</label>
        <Input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-white/10 border-white/20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Email</label>
        <Input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-white/10 border-white/20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Phone Number</label>
        <Input
          required
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="bg-white/10 border-white/20"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Select Game</label>
        <select
          required
          name="game"
          value={formData.game}
          onChange={handleChange}
          className="w-full rounded-md bg-white/10 border-white/20 p-2"
        >
          <option value="">Select a game</option>
          <option value="fifa25">FIFA 25</option>
          <option value="pubg">PUBG Mobile</option>
          <option value="codm">Call of Duty Mobile</option>
          <option value="tekken">Tekken</option>
          <option value="efootball">eFootball Mobile</option>
        </select>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        Proceed to Payment
      </Button>
    </form>
  );
}
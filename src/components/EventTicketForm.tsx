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
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 rounded-lg bg-black/40 backdrop-blur-sm">
      <div className="text-center mb-6">
        <img
          src="https://res.cloudinary.com/djeyyn3yi/image/upload/v1737109851/WhatsApp_Image_2025-01-17_at_11.54.30_0981e75f_odxs91.jpg"
          alt="Security"
          className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4"
        />
        <p className="text-white/80 text-sm">
          Your account details are secure with us. We prioritize your privacy and security.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
            className="w-full rounded-md bg-white/10 border border-white/20 text-white p-2"
          >
            <option value="" className="bg-black">Select a game</option>
            <option value="fifa25" className="bg-black">FIFA 25</option>
            <option value="pubg" className="bg-black">PUBG Mobile</option>
            <option value="codm" className="bg-black">Call of Duty Mobile</option>
            <option value="tekken" className="bg-black">Tekken</option>
            <option value="efootball" className="bg-black">eFootball Mobile</option>
          </select>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Pay with M-Pesa
        </Button>
      </form>
    </div>
  );
}
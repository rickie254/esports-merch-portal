import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const cpPricing = {
  Kenya: [
    { points: 880, price: 1250, currency: "KSH" },
    { points: 2400, price: 3500, currency: "KSH" },
    { points: 5000, price: 6000, currency: "KSH" },
    { points: 5880, price: 6800, currency: "KSH" },
    { points: 10800, price: 10800, currency: "KSH" },
  ],
  Nigeria: [
    { points: 5000, price: 60000, currency: "NGN" },
    { points: 5880, price: 70000, currency: "NGN" },
    { points: 10800, price: 120000, currency: "NGN" },
  ],
  Uganda: [
    { points: 5000, price: 86000, currency: "UGX" },
    { points: 5880, price: 169000, currency: "UGX" },
    { points: 10800, price: 265000, currency: "UGX" },
  ],
  Tanzania: [
    { points: 5000, price: 105000, currency: "TSH" },
    { points: 5880, price: 120000, currency: "TSH" },
    { points: 10800, price: 186000, currency: "TSH" },
  ],
};

export function CPPricing() {
  const [selectedCountry, setSelectedCountry] = useState("Kenya");

  const handlePurchase = (points: number, price: number, currency: string) => {
    toast({
      title: "Purchase Request Sent",
      description: `Your request to purchase ${points} CP for ${price} ${currency} has been received. Please check your DMs for further instructions.`,
    });
  };

  return (
    <section className="py-16 bg-secondary/10" id="cp-section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Buy CP Points</h2>
        
        <div className="max-w-md mx-auto mb-8">
          <Select
            value={selectedCountry}
            onValueChange={setSelectedCountry}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(cpPricing).map((country) => (
                <SelectItem key={country} value={country}>
                  {country} {country === "Kenya" ? "🇰🇪" : country === "Nigeria" ? "🇳🇬" : country === "Uganda" ? "🇺🇬" : "🇹🇿"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cpPricing[selectedCountry as keyof typeof cpPricing].map((tier) => (
            <div
              key={tier.points}
              className="bg-secondary p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                {tier.points} CP
              </h3>
              <p className="text-xl font-semibold mb-4">
                {tier.price.toLocaleString()} {tier.currency}
              </p>
              <Button
                onClick={() => handlePurchase(tier.points, tier.price, tier.currency)}
                className="w-full bg-primary hover:bg-primary/90 animate-pulse-red"
              >
                Purchase
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
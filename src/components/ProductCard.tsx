import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCP, setSelectedCP] = useState<{ points: number, price: number, currency: string } | null>(null);

  const handlePurchase = (cp: { points: number, price: number, currency: string }) => {
    setSelectedCP(cp);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 bg-secondary/10" id="cp-section">
      <div className="container">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://static.wixstatic.com/media/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png/v1/fill/w_480,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png"
            alt="CP Points"
            className="w-32 h-32 mb-4"
          />
          <h2 className="text-3xl font-bold text-center">Buy CP Points</h2>
        </div>
        
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
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {tier.points.toLocaleString()} CP
                  </h3>
                  <p className="text-xl font-semibold mb-4">
                    {tier.price.toLocaleString()} {tier.currency}
                  </p>
                </div>
                <Button
                  onClick={() => handlePurchase(tier)}
                  className="w-full bg-primary hover:bg-primary/90 animate-pulse-red"
                >
                  Purchase
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription className="text-primary font-bold">
              {selectedCP?.price} {selectedCP?.currency}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <h3 className="text-xl">You are about to purchase:</h3>
            <p>{selectedCP?.points.toLocaleString()} CP</p>
            <Button 
              onClick={() => {
                toast({
                  title: "Purchase Request Sent",
                  description: `Your request to purchase ${selectedCP?.points} CP for ${selectedCP?.price} ${selectedCP?.currency} has been received.`,
                });
                setIsDialogOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Confirm Purchase
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

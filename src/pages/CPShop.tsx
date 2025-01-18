import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CPPricing } from "@/components/CPPricing";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CPShop() {
  const [showPricing, setShowPricing] = useState(false);

  const drawCosts = [
    {
      title: "MYTHIC CHARACTER",
      totalCp: "7,200",
      costs: [20, 50, 90, 160, 280, 440, 680, 1100, 1700, 2700]
    },
    {
      title: "MYTHIC GUN",
      totalCp: "5,840",
      costs: [10, 30, 50, 120, 200, 350, 520, 960, 1300, 2300]
    },
    {
      title: "LEGENDARY CHARACTER",
      totalCp: "5,750",
      costs: [10, 30, 50, 120, 200, 200, 320, 520, 800, 1500, 2200]
    },
    {
      title: "LEGENDARY GUN (Reactive camo)",
      totalCp: "4,950",
      costs: [10, 30, 50, 120, 200, 320, 520, 800, 1110, 1800]
    },
    {
      title: "LEGENDARY GUN (Non-reactive camo)",
      totalCp: "4,550",
      costs: [10, 30, 50, 120, 200, 320, 520, 800, 1100, 1400]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
            url('https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mobile/home/features/codm-hero-desktop.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Call of Duty Mobile CP Shop
          </h1>
          <Button
            onClick={() => setShowPricing(!showPricing)}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-pulse"
          >
            {showPricing ? "Hide CP Prices" : "View CP Prices"}
          </Button>
        </div>
      </div>

      {/* Draw Costs Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Draw Costs Guide</h2>
        <ScrollArea className="h-[500px] rounded-md border border-primary/20 p-4">
          <div className="grid gap-8">
            {drawCosts.map((draw, index) => (
              <div key={index} className="bg-secondary/20 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4">{draw.title}</h3>
                <p className="text-white mb-2">Total CP required: {draw.totalCp}</p>
                <div className="flex flex-wrap gap-2">
                  {draw.costs.map((cost, i) => (
                    <span key={i} className="bg-primary/20 text-white px-3 py-1 rounded">
                      {cost} CP
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* CP Pricing Section */}
      {showPricing && <CPPricing />}
    </div>
  );
}
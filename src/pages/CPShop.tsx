import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CPPricing } from "@/components/CPPricing";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

export default function CPShop() {
  const [showPricing, setShowPricing] = useState(false);
  const navigate = useNavigate();

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
    <div 
      className="min-h-screen bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/codm/COD-LAUNCH-TOUT.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back to Main Page
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
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

        {/* Draw Costs Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <ScrollArea className="h-[500px] rounded-md border border-primary/20 p-4 bg-black/40 backdrop-blur-sm">
            <div className="grid gap-8">
              {drawCosts.map((draw, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
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
    </div>
  );
}
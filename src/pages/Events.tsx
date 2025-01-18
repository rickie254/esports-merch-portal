import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60)`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-8">Gaming Tournament Events</h1>
            
            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Call of Duty Mobile Championship</h2>
                <p className="text-white/80 mb-4">
                  Join us for the biggest COD Mobile tournament in East Africa! Compete against the best players
                  and win amazing prizes.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-white/90">
                  <div>
                    <h3 className="font-semibold mb-2">Event Details:</h3>
                    <ul className="space-y-2">
                      <li>• Date: Coming Soon</li>
                      <li>• Venue: To be announced</li>
                      <li>• Prize Pool: $10,000</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ticket Types:</h3>
                    <ul className="space-y-2">
                      <li>• Standard Entry: $20</li>
                      <li>• VIP Access: $50</li>
                      <li>• Team Registration: $100</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Buy Tickets (Coming Soon)
                </Button>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">PUBG Mobile Tournament</h2>
                <p className="text-white/80 mb-4">
                  Experience the thrill of PUBG Mobile competitive gaming! Show your skills and compete
                  for the championship title.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-white/90">
                  <div>
                    <h3 className="font-semibold mb-2">Event Details:</h3>
                    <ul className="space-y-2">
                      <li>• Date: Coming Soon</li>
                      <li>• Venue: To be announced</li>
                      <li>• Prize Pool: $5,000</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ticket Types:</h3>
                    <ul className="space-y-2">
                      <li>• Standard Entry: $15</li>
                      <li>• VIP Access: $40</li>
                      <li>• Team Registration: $80</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                  Buy Tickets (Coming Soon)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
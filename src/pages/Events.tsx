import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EventTicketForm } from "@/components/EventTicketForm";

const games = [
  {
    name: "FIFA 25",
    image: "https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg",
    description: "Experience the thrill of FIFA 25 tournaments!"
  },
  {
    name: "PUBG Mobile",
    image: "https://cdn.gamerjournalist.com/primary/2023/05/PUBG-MOBILE-Championship-2023.jpg",
    description: "Battle Royale at its finest!"
  },
  {
    name: "Call of Duty Mobile",
    image: "https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/codm/COD-LAUNCH-TOUT.jpg",
    description: "Join the ultimate CODM tournament!"
  },
  {
    name: "Tekken",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1778820/capsule_616x353.jpg",
    description: "Show your fighting game skills!"
  },
  {
    name: "eFootball Mobile",
    image: "https://www.konami.com/efootball/s/img/efootball2024_sns.jpg",
    description: "Compete in mobile football excellence!"
  }
];

export default function Events() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/codm/COD-LAUNCH-TOUT.jpg)`,
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

        <div className="max-w-6xl mx-auto">
          {!showForm ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Gaming Tournament Events</h1>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-pulse"
                >
                  Attend Finals Event - Get Your Ticket Now!
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                      <p className="text-white/80">{game.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Event Ticket Registration
              </h2>
              <EventTicketForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
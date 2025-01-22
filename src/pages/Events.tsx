import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  price: number;
}

export default function Events() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "COD Mobile Tournament",
      date: "2024-02-15",
      location: "Nairobi, Kenya",
      description: "Join our competitive COD Mobile tournament with cash prizes!",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      price: 1000
    },
    {
      id: 2,
      title: "Gaming Convention 2024",
      date: "2024-03-01",
      location: "Mombasa, Kenya",
      description: "The biggest gaming event in East Africa",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      price: 2000
    }
  ];

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful",
      description: "You have been registered for the event. Check your email for details.",
    });
    setShowRegistrationForm(false);
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          ← Back
        </Button>

        <PageHeader 
          title="Gaming Events & Tournaments"
          subtitle="Join exciting gaming events and tournaments across Kenya"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  <p>Location: {event.location}</p>
                  <p className="text-primary font-bold">
                    Entry Fee: KES {event.price.toLocaleString()}
                  </p>
                </div>
                <Button
                  onClick={() => handleRegister(event)}
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {showRegistrationForm && selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-black/90 p-8 rounded-lg w-full max-w-md border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Register for {selectedEvent.title}
              </h2>
              <form onSubmit={handleSubmitRegistration} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">
                    Full Name
                  </label>
                  <Input
                    required
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
                    required
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
                    required
                    className="bg-white/20 text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowRegistrationForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
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
  organizer: string;
}

export default function Events() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const events: Event[] = [
    {
      id: 1,
      title: "KUER Semi Finals",
      date: "2024-02-20",
      location: "AfriGamers Arena, Nairobi",
      description: "Semi-finals of the KUER gaming tournament hosted by AfriGamers. Join us for an epic gaming showdown!",
      image: "https://helios-i.mashable.com/imagery/articles/02rkxB16ImHPMfzmrUgxkSO/hero-image.fill.size_1248x702.v1623365649.jpg",
      price: 1500,
      organizer: "KUER"
    },
    {
      id: 2,
      title: "KUER Finals",
      date: "2024-03-01",
      location: "KCA University, Nairobi",
      description: "The grand finals of KUER gaming tournament. Who will be crowned the ultimate champion?",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYH0U-tv0RMItvPqZXx-_E7TtxX4Ltlbg5kw&s",
      price: 2000,
      organizer: "KUER"
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url('https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202411/image-1200x675-28261124061048.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.3)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/10"
        >
          ← Back
        </Button>

        <PageHeader 
          title="KUER Gaming Tournament"
          subtitle="Join the most prestigious gaming tournament in Kenya"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                <div className="space-y-1.5 text-sm text-gray-400">
                  <div className="relative overflow-hidden">
                    <p className="animate-pulse-red inline-block bg-primary/20 px-2 py-1 rounded">
                      Coming Soon: {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p>Location: {event.location}</p>
                  <p>Organizer: {event.organizer}</p>
                  <p className="text-primary font-bold">
                    Entry Fee: KES {event.price.toLocaleString()}
                  </p>
                </div>
                <Button
                  onClick={() => handleRegister(event)}
                  className="w-full mt-4 bg-primary hover:bg-primary/90 transition-colors duration-300"
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {showRegistrationForm && selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
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
                    className="bg-white/10 border-white/20"
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
                    className="bg-white/10 border-white/20"
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
                    className="bg-white/10 border-white/20"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowRegistrationForm(false)}
                    className="flex-1 bg-white/10 border-white/20"
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
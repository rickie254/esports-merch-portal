
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface DeviceSpec {
  id: number;
  name: string;
  price: number;
  storage: string[];
  performance: string;
  image: string;
}

const devices: DeviceSpec[] = [
  {
    id: 1,
    name: "RedMagic 6",
    price: 37000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 2,
    name: "RedMagic 7",
    price: 46000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 3,
    name: "RedMagic 7S Pro",
    price: 53000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 4,
    name: "RedMagic 8 Pro",
    price: 65000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 5,
    name: "RedMagic 8S Pro",
    price: 69000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 6,
    name: "RedMagic 8S Pro+",
    price: 73000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 7,
    name: "RedMagic 9 Pro",
    price: 82000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 8,
    name: "RedMagic 9 Pro+",
    price: 87000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  },
  {
    id: 9,
    name: "RedMagic 9S Pro",
    price: 86000,
    storage: ["12GB + 256GB", "16GB + 512GB"],
    performance: "Smooth 90fps, can be modded to 144fps",
    image: "https://res.cloudinary.com/djeyyn3yi/image/upload/v1739290713/redmagic_6_pwhgo0.jpg"
  }
];

const GamingDevices = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Gaming Devices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device) => (
            <div
              key={device.id}
              className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-primary/20"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">{device.name}</h3>
                <p className="text-3xl font-bold text-primary">
                  KES {device.price.toLocaleString()}
                </p>
                
                <div className="space-y-2">
                  <p className="text-white/80">
                    <span className="font-semibold">Storage Options:</span>
                    <br />
                    {device.storage.join(" or ")}
                  </p>
                  <p className="text-white/80">
                    <span className="font-semibold">Performance:</span>
                    <br />
                    {device.performance}
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => navigate(`/product/${device.id}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingDevices;

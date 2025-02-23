import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/ProductGrid";
import SearchAndFilter from "@/components/SearchAndFilter";
import { Pagination } from "@/components/ui/pagination";
import { NavigationButtons } from "@/components/NavigationButtons";
import PageHeader from "@/components/PageHeader";

const categories = ["All", "Cooling", "Gaming", "Audio", "Storage", "Accessories"];

const products = [
  {
    id: 1,
    name: "5-Finger Glove",
    price: 600,
    category: "Gaming",
    image: "https://rukminim2.flixcart.com/image/850/1000/kr6oeq80/finger-sleeve/x/f/i/full-hand-gloves-gaming-the-upgrade-five-finger-screen-touch-original-imag5f55dywdyj7z.jpeg?q=90&crop=false",
    description: "High-quality gaming gloves designed for maximum comfort and grip during intense gaming sessions.",
  },
  {
    id: 2,
    name: "GT29 Magnetic Cooler",
    price: 2700,
    category: "Cooling",
    image: "https://ae01.alicdn.com/kf/Saadec7042e8b44bd8715895acbda0f3f9.jpg?width=800&height=800&hash=1600",
    description: "Advanced magnetic cooling system for optimal device temperature control.",
  },
  {
    id: 3,
    name: "Thumb Sleeves",
    price: 250,
    category: "Gaming",
    image: "https://i.ytimg.com/vi/wjbFa7mtk-Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgqKnSMfGA-CkWtdFZte93bXo_TQ",
    description: "Comfortable thumb sleeves for enhanced grip and control during mobile gaming.",
  },
  {
    id: 4,
    name: "Cooling Fan",
    price: 1600,
    category: "Cooling",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1766cd3f-4642-4329-a67e-d3f25512a5dc.__CR0,0,300,300_PT0_SX300_V1___.png",
    description: "High-performance cooling fan for maintaining optimal device temperature.",
  },
  {
    id: 5,
    name: "Crown Micro Gaming Headset CMGH-102T",
    price: 2600,
    category: "Audio",
    image: "https://mombasacomputers.b-cdn.net/wp-content/uploads/2022/01/Crown-Gaming-Headset-CMGH-102T-1.jpg",
    description: "Premium gaming headphones with immersive sound quality and comfort.",
  },
  {
    id: 6,
    name: "Bluetooth Gaming Pad",
    price: 2700,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&auto=format&fit=crop&q=60",
    description: "Wireless gaming controller for seamless gaming experience.",
  },
  {
    id: 7,
    name: "Magnetic Ice Phone Cooler",
    price: 2600,
    category: "Cooling",
    image: "https://m.media-amazon.com/images/I/71SW7K1Ny6L.jpg",
    description: "Innovative magnetic cooling solution for mobile devices.",
  },
  {
    id: 8,
    name: "iPad Magnetic Iced Cooling Machine",
    price: 3500,
    category: "Cooling",
    image: "https://m.media-amazon.com/images/I/81NlBPgeocL._AC_UF1000,1000_QL80_.jpg",
    description: "Specialized cooling system designed for iPads and tablets.",
  },
  {
    id: 9,
    name: "915 Generation G21 Mobile Phone Game Trigger for Gaming Controller L1",
    price: 1200,
    category: "Gaming",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/8135151/1.jpg?6946",
    description: "Responsive gaming triggers for enhanced mobile gaming control.",
  },
  {
    id: 10,
    name: "3-Gear Mobile Cooling Fan + Triggers + Thumb Sleeves",
    price: 3300,
    category: "Gaming",
    image: "https://erkamsgadgetstore.com/cdn/shop/products/Webcapture_2-12-2022_18274_www.canva.com.jpg?v=1669998565",
    description: "Complete gaming accessory set including cooling fan, triggers, and thumb sleeves.",
  },
  {
    id: 11,
    name: "HP Flash Disk With Clip - 64GB - Silve",
    price: 1400,
    category: "Storage",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/300382/1.jpg?1035",
    description: "High-speed 64GB flash drive for reliable storage.",
  },
  {
    id: 12,
    name: "Sandisk USB Flash Disk Drive -4GB, 8GB, 16GB, 32GB, 64GB, 128GB",
    price:  800 -  4400,
    category: "Storage",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/50/3608682/1.jpg?2746",
    description: "Advanced 4-finger trigger system for precise gaming control.",
  },
  {
    id: 13,
    name: "T-WOLF Wired Gaming Mouse 7 Color Backlight 6 Button",
    price: 1400,
    category: "Accessories",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/3343812/2.jpg?4830",
    description: "Adjustable stand for comfortable iPad viewing and gaming.",
  },
  {
    id: 14,
    name: "P47 Bluetooth 4.2 Headphone Wireless Earphone - Blue",
    price: 1000,
    category: "Audio",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/9516462/1.jpg?1429",
    description: "Wireless earbuds for immersive gaming audio experience.",
  },
  {
    id: 15,
    name: "DELL Wireless Keyboard And Mouse Combo Plug And Play",
    price: 2100,
    category: "Accessories",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/8980872/1.jpg?7469",
    description: "360-degree rotating TV mount for optimal viewing angles.",
  },
  {
    id: 16,
    name: "Sony PS5 Console 1TB Slim Standard Edition",
    price:  87999,
    category: "Accessories",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XnvF-5S23BwcdgOg7riNZtZBqx86gOuqXw&s",
    description: "The PS5® console can play over 4,000 PS4® games. With the Game Boost feature, you can even enjoy faster and smoother frame rates in some of the PS4® console’s greatest games",
  },
  {
    id: 17,
    name: "Logitech G502 Lightspeed Wireless Gaming Mouse with Hero 25K Sensor, PowerPlay Compatible, Tunable Weights and Lightsync RGB - Black",
    price: 22000,
    category: "Accessories",
    image: "https://gfx3.senetic.com/akeneo-catalog/f/a/2/1/fa21792c625e9df425cc080fa67804940388489d_1046274_910_005470_image1.jpg",
    description: "G502 is the best gaming mouse from Logitech G, completely redesigned from the inside out with Light speed wireless and power play compatibility so you can game faster and more accurately, The G502 light speed PC gaming mouse is built with superfast 1 ms wireless connectivity and a next gen Hero sensor delivering up to 25K DPI class leading performance and energy efficient up to 60 hours of uninterrupted gaming. 11 programmable buttons help you optimize game play with custom keyboards and macros. ",
  },
  {
    id: 18,
    name: "Sony EA SPORTS FC 25",
    price: 12000,
    category: "Accessories",
    image: "https://i.ytimg.com/vi/GcGJ4fe0iNk/maxresdefault.jpg",
    description: "Team up with 5v5 Rush, a new way to play with friends in Football Ultimate Team, Clubs, and Kick-Off with small-sided gameplay.",
  },
  {
    id: 19,
    name: "PS5 DualSense Wireless Controller",
    price: 12000,
    category: "Gaming",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/540296/1.jpg?7830",
    description: "Ignite your gaming nights on your PS5 console with the DualSense Midnight Black wireless controller. Part of a new line-up of galaxy-themed colors, this sleek design takes inspiration from how we view the wonders of space through the night sky, with subtle shades of black and light gray detailing. Discover a deeper, highly immersive gaming experience** that brings the action to life in the palms of your hands. .",
  },
  {
    id: 33,
    name: "Long 3Meter 10ft Micro USB Charging Power Cable For",
    price: 4000,
    category: "Accessories",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/1638262/1.jpg?2929",
    description: "This micro USB cable is specifically made for with controller,Extra meter cable (10FT) allows you to play comfortably,Simultaneously charge and play with the 4 () controller,Features: Charging Cable, High Quality, Good Replacement",
  },
  {
    id: 42,
    name: "Kasorix Gaming Chair ",
    price: 25000,
    category: "Accessories",
    image: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjM0ZDM5OGUxNDJlNjQyOTI0MjhiOWMzLWthc29yaXgtZ2FtaW5nLWNoYWlyLWJyZWF0aGFibGUtbGVhdGhlci5qcGc.jpg",
    description: "Kasorix Gaming Chair Breathable Leather Gamer Chair with Footrest, High Back Executive Chair with Adjustable Armrest, Height Adjustable Swivel Computer Chair up to 400LBSRed-8523",
  },
  {
    id: 43,
    name: "XBOX Core Wireless Controller – Electric Voltr",
    price: 13000,
    category: "Gaming",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/67/225246/1.jpg?2655",
    description: "Official wireless controller for Xbox series with enhanced grip and comfort.",
  },
  {
    id: 44,
    name: "Oraimo Rover RGB Lights IPX5 Wireless Speaker",
    price: 3999,
    category: "Audio",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/51/3162961/1.jpg?9233",
    description: "Product Parameters:Size: 88*88*182mmWeight: 503gBluetooth Version: V5.3 (More Fast &Stable)Frequency Response: 80Hz—20KHzBattery Capacity: 2400mAhPlaytime: 6 hours（Lights On); 7 hours (Lights Off)Charging time: 3 hoursAudio Output: 6W*2Model: OBS-53D",
  },
  {
    id: 45,
    name: "Wired G Gaming Mouse 7 Functional Keys RGB Light",
    price: 1800,
    category: "Accessories",
    image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/2087382/1.jpg?5393",
    description: "Key Features Ergonomics: Keys:6 keys Led: led breathing light Size:134x84x40mm DPI:800/1200/1600/2400 Easy to use",
  },
];

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const productsPerPage = 4;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div 
      className="min-h-screen py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container">
        <NavigationButtons />
        
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back to Home
        </Button>

        <PageHeader
          title="Gaming Products"
          subtitle="Discover our premium selection of gaming accessories and equipment"
        />

        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
          <SearchAndFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          <ProductGrid products={currentProducts} />

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <HeroTitle />
        </div>
        <HeroSubtitle />
        <HeroButtons />
      </div>
    </div>
  );
};

export default Hero;
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://res.cloudinary.com/djeyyn3yi/image/upload/v1738491049/Desktop_ACSH_Takeover_Slider3_jqz8gg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center space-y-4 md:space-y-8 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <HeroTitle />
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <HeroSubtitle />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <HeroButtons />
        </div>
      </div>
    </div>
  );
};

export default Hero;
const Hero = () => (
  <div 
    className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60')",
    }}
  >
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in">
        Welcome to Kenya Universities Esports Shop
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
        Level up your game with professional gaming gear
      </p>
      <Button 
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg animate-fade-in"
        onClick={() => document.getElementById('shop-section')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Shop Now
      </Button>
    </div>
  </div>
);

export default Hero;
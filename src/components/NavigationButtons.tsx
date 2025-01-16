import { Button } from "@/components/ui/button";

export function NavigationButtons() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container py-8">
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          onClick={() => scrollToSection('shop-section')}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
        >
          Shop Now for Products
        </Button>
        <Button
          onClick={() => scrollToSection('cp-section')}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
        >
          Buy CP for Call of Duty
        </Button>
        <Button
          onClick={() => scrollToSection('uc-section')}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
        >
          Buy UC for PUBG
        </Button>
      </div>
    </div>
  );
}
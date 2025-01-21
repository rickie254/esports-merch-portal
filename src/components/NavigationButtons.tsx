import { Button } from "@/components/ui/button";

export function NavigationButtons() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container py-8">
      <div className="flex flex-wrap justify-center gap-4">
     
      </div>
    </div>
  );
}
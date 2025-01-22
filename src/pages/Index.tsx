import Hero from "@/components/Hero";
import { NavigationButtons } from "@/components/NavigationButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <NavigationButtons />
    </div>
  );
};

export default Index;
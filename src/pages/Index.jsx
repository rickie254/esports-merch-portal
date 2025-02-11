
import Hero from "@/components/Hero";
import { NavigationButtons } from "@/components/NavigationButtons";
import GamingDevices from "@/components/GamingDevices";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <NavigationButtons />
      <GamingDevices />
    </div>
  );
};

export default Index;

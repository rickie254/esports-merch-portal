import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { NavigationButtons } from "@/components/NavigationButtons";
import PageHeader from "@/components/PageHeader";

const CPShop = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <NavigationButtons />
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>
        
        <PageHeader
          title="CP Shop"
          subtitle="Purchase CP Points for special items"
        />
        
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg mt-6">
          <p className="text-white text-center">CP Shop content will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default CPShop;
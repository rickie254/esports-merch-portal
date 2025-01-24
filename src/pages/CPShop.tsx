import { CPPricing } from "@/components/CPPricing";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

export default function CPShop() {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60)`,
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          ← Back to Main Page
        </Button>

        <PageHeader 
          title="254•CP-SHOP"
          subtitle="Get your CP points instantly and securely"
        />

        <CPPricing />

        <div className="mt-16 flex flex-col items-center justify-center space-y-8">
          <img
            src="https://res.cloudinary.com/djeyyn3yi/image/upload/v1737109851/WhatsApp_Image_2025-01-17_at_11.54.30_0981e75f_odxs91.jpg"
            alt="CP Points"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-primary/20">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://static.wixstatic.com/media/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png/v1/fill/w_480,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png"
                  alt="Security Badge"
                  className="w-16 h-16"
                />
              </div>
              <p className="text-white/90 text-lg mb-4">
                Your account security is our top priority. All transactions are secure and your information is protected.
              </p>
              <div className="space-y-2 text-sm text-white/80">
                <p>✓ Secure Payment Processing</p>
                <p>✓ 24/7 WhatsApp Support Available</p>
                <p>✓ Fast CP Delivery within 24 Hours</p>
                <p>✓ 100% Safe Account Handling</p>
              </div>
              <div className="mt-6">
                <a
                  href="https://wa.me/message/XRDL2G3MT3GZD1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contact Support on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

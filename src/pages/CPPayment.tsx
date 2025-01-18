import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const paymentMethods = {
  Kenya: [
    { 
      name: "M-Pesa", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png",
      type: "mobile"
    },
    { 
      name: "KCB Bank", 
      logo: "https://www.kcbgroup.com/wp-content/uploads/2021/06/kcb-1.png",
      type: "bank"
    },
    { 
      name: "Equity Bank", 
      logo: "https://equitygroupholdings.com/ke/wp-content/uploads/sites/3/2021/05/Equity-Blue.png",
      type: "bank"
    },
    {
      name: "PayPal",
      logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
      type: "international"
    },
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
      type: "card"
    },
    {
      name: "Mastercard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
      type: "card"
    }
  ],
  Nigeria: [
    { 
      name: "GTBank", 
      logo: "https://www.gtbank.com/images/gtbank-logo.svg",
      type: "bank"
    },
    { 
      name: "Access Bank", 
      logo: "https://www.accessbankplc.com/App_Themes/AccessBank/images/access-bank-logo.png",
      type: "bank"
    },
    {
      name: "PayPal",
      logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
      type: "international"
    }
  ],
  Uganda: [
    { 
      name: "Stanbic Bank", 
      logo: "https://www.stanbicbank.co.ug/static_file/Uganda/images/logo.png",
      type: "bank"
    },
    { 
      name: "MTN Mobile Money", 
      logo: "https://mtn.co.ug/wp-content/uploads/2020/09/mtn-momo.png",
      type: "mobile"
    }
  ],
  Tanzania: [
    { 
      name: "CRDB Bank", 
      logo: "https://crdbbank.co.tz/wp-content/themes/crdb/assets/images/logo.png",
      type: "bank"
    },
    { 
      name: "NMB Bank", 
      logo: "https://www.nmbbank.co.tz/images/nmb-logo.png",
      type: "bank"
    }
  ],
  International: [
    { 
      name: "PayPal", 
      logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
      type: "international"
    },
    { 
      name: "Visa", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
      type: "card"
    },
    { 
      name: "Mastercard", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
      type: "card"
    }
  ]
};

export default function CPPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("Kenya");
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSupport = () => {
    window.open("https://wa.me/message/XRDL2G3MT3GZD1", "_blank");
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      toast({
        title: "Error",
        description: "Please select a payment method",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Payment Initiated",
      description: "Processing your payment...",
    });
  };

  const { cpDetails, userDetails } = location.state || {};

  if (!cpDetails || !userDetails) {
    navigate("/");
    return null;
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center p-4"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60)`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-white">Complete Your Purchase</h2>
            
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <h3 className="text-lg text-white mb-2">Order Summary</h3>
              <p className="text-white/90">Username: {userDetails.username}</p>
              <p className="text-white/90">{cpDetails.points.toLocaleString()} CP</p>
              <p className="text-xl font-bold text-primary-foreground">
                {cpDetails.price.toLocaleString()} {cpDetails.currency}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Select Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full p-2 rounded bg-transparent text-white border border-white/20"
                >
                  {Object.keys(paymentMethods).map((country) => (
                    <option key={country} value={country} className="bg-black text-white">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Payment Methods
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods[selectedCountry as keyof typeof paymentMethods].map((method) => (
                    <button
                      key={method.name}
                      onClick={() => setSelectedMethod(method.name)}
                      className={`p-4 rounded-lg border transition-all ${
                        selectedMethod === method.name
                          ? "border-primary bg-primary/20"
                          : "border-white/20 bg-white/10"
                      }`}
                    >
                      <img
                        src={method.logo}
                        alt={method.name}
                        className="h-8 object-contain mx-auto mb-2"
                      />
                      <p className="text-sm text-white text-center">{method.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handlePayment}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Pay Now
              </Button>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-white/80 text-sm">
                Need help? Contact our 24/7 support team via WhatsApp
              </p>
              <Button
                variant="outline"
                className="mt-4 w-full bg-green-600/20 hover:bg-green-600/30"
                onClick={handleSupport}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support on WhatsApp
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-white">Payment Support</h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-medium text-white mb-2">Payment Instructions</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Select your preferred payment method</li>
                  <li>• Complete the payment process</li>
                  <li>• Keep your transaction reference</li>
                  <li>• CP will be credited within 24 hours</li>
                </ul>
              </div>

              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-medium text-white mb-2">Need Help?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Our support team is available 24/7 to assist you with any payment-related issues.
                  Contact us via WhatsApp at +254 748 365 147
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-medium text-white mb-2">Secure Payments</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {paymentMethods.International.map((method) => (
                    <img
                      key={method.name}
                      src={method.logo}
                      alt={method.name}
                      className="h-8 object-contain opacity-50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

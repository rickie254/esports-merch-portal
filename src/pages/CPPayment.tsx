import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function CPPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  // Handle navigation in useEffect
  useEffect(() => {
    if (!location.state?.cpDetails || !location.state?.userDetails) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const { cpDetails, userDetails } = location.state || {};

  // If no details, return null (navigation will happen in useEffect)
  if (!cpDetails || !userDetails) {
    return null;
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter your M-Pesa phone number",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Payment Initiated",
      description: "Please check your phone for the M-Pesa prompt",
    });
    // Here you would integrate with M-Pesa API
  };

  const handleSupport = () => {
    window.open("https://wa.me/YOUR_WHATSAPP_NUMBER", "_blank");
  };

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({
        title: "Message Sent",
        description: "We'll get back to you soon!",
      });
      setMessage("");
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center p-4"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png/v1/fill/w_480,h_481,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d1eb1_211e791fc9b64e83905a6018df7d7a7b~mv2.png)`,
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 bg-white/10 backdrop-blur-sm"
        >
          ← Back
        </Button>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Payment Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Payment Details</h2>
            
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <h3 className="text-lg text-white mb-2">Order Summary</h3>
              <p className="text-white/90">Username: {userDetails.username}</p>
              <p className="text-white/90">{cpDetails.points.toLocaleString()} CP</p>
              <p className="text-xl font-bold text-primary-foreground">
                {cpDetails.price.toLocaleString()} {cpDetails.currency}
              </p>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-white">
                  M-Pesa Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter M-Pesa number"
                  className="bg-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Pay with M-Pesa
              </Button>
            </form>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-white/80 text-sm">
                Note: CP pack will be delivered within 24 hours after payment confirmation.
                For any delays, please contact us via WhatsApp.
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

          {/* Query Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-white">Have Questions?</h2>
            
            <form onSubmit={handleQuery} className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question here..."
                  className="bg-white/20 text-white placeholder:text-white/50 min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" variant="secondary" className="w-full">
                Send Message
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-medium text-white mb-2">Common Questions</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• How long does delivery take?</li>
                  <li>• Is my account information secure?</li>
                  <li>• What payment methods do you accept?</li>
                  <li>• How can I track my order?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
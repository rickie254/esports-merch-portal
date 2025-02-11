
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import BrowserGaming from "./pages/BrowserGaming";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browser-gaming" element={<BrowserGaming />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CPShop from "./pages/CPShop";
import CPPurchaseDetails from "./pages/CPPurchaseDetails";
import CPPayment from "./pages/CPPayment";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cp-shop" element={<CPShop />} />
          <Route path="/cp-purchase" element={<CPPurchaseDetails />} />
          <Route path="/cp-payment" element={<CPPayment />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
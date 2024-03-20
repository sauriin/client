import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scences/home/Home";
import Navbar from "./scences/Global/Navbar";
import ItemDetails from "./scences/itemDetails/ItemDetails";
import CartMenu from "./scences/Global/CartMenu";
import Footer from "./scences/Global/Footer"
import Checkout from "./scences/checkout/Checkout";
import Confirmation from "./scences/checkout/Confirmarion";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

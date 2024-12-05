import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import AllProducts from "./components/AllProducts";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import RicePage from "./components/items/Rice";
import WheatPage from "./components/items/Wheat";
import PulsePage from "./components/items/Pulse";
import AboutUsPage from "./components/AboutUs";
import ContactUsPage from "./components/ContactUs";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Wishlist from "./components/Wishlist";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/rice" element={<RicePage />} />
          <Route path="/wheat" element={<WheatPage />} />
          <Route path="/pulse" element={<PulsePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

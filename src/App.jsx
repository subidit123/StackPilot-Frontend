import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FlashSale from "./Components/FlashSale";
import BrowseCategories from "./Components/BrowseCatagories";
import BestSellers from "./Components/BestSellers";
import PromoBanner from "./Components/PromoBanner";
import ExploreProducts from "./Components/ExploreProducts";
import NewArrival from "./Components/NewArrival";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

// Pages
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Wishlist from "./Components/Wishlist";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import BillingDetails from "./Components/BillingDetails";
import Account from "./Components/Account";
import Orders from "./Components/Orders";
import AboutUs from "./Components/AboutUs"; // ✅ Your AboutUs component
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound"; // Not Found page
import ProductDetails from "./Components/ProductDetails"; // Product details page
// Home grouped layout
const Home = () => (
  <>
    <Hero />
    <FlashSale />
    <BrowseCategories />
    <BestSellers />
    <PromoBanner />
    <ExploreProducts />
    <NewArrival />
    <Services />
    <Footer />
  </>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/billing" element={<BillingDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<AboutUs />} /> {/* ✅ Correct Route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Not Found page */}
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Product details page */}
      </Routes>
    </>
  );
}

export default App;

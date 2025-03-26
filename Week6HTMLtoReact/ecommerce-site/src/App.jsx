import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Gallery from "./components/Gallery";
import NewsletterSignup from "./components/NewsletterSignup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroBanner />} />

        <Route path="/products" element={<Categories />} />
        <Route path="/featured" element={<FeaturedProducts />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/newsletter" element={<NewsletterSignup />} />
      </Routes>
      
    </>
  );
}

export default App;

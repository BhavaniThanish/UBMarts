import React, { useEffect } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ToastHolder from "./components/ToastHolder";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Franchise from "./pages/Franchise";
import OurVideo from "./pages/OurVideo";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").catch(() => {});
  }, []);
  return (
    <div className="App">
      <ToastProvider>
        <CartProvider>
          <BrowserRouter>
            <AnnouncementBar />
            <Header />
            <CartDrawer />
            <ToastHolder />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/franchise" element={<Franchise />} />
              <Route path="/our-video" element={<OurVideo />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ToastProvider>
    </div>
  );
}

export default App;

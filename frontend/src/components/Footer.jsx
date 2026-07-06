import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Send, Leaf } from "lucide-react";
import { CATEGORIES, LOGO_URL } from "../mock";
import { useToast } from "../hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const subscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "Welcome to the family!", description: `We'll send special offers to ${email}` });
    setEmail("");
  };

  return (
    <footer className="relative bg-[#1f2a1a] text-[#e8e2d4] mt-24 overflow-hidden">
      <div className="grain-overlay" />
      {/* Newsletter */}
      <div className="relative border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl text-white">Get Special Offers &amp; Savings</h3>
            <p className="mt-2 text-white/70 text-sm">Latest information on Events, Sales and Offers — straight to your inbox.</p>
          </div>
          <form onSubmit={subscribe} className="flex gap-2 bg-white/5 border border-white/15 rounded-full p-1.5">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 bg-transparent px-5 py-3 text-sm focus:outline-none text-white placeholder:text-white/50" />
            <button className="bg-[#4a7c2a] hover:bg-[#3d6721] text-white px-6 rounded-full font-semibold text-sm flex items-center gap-2 transition"><Send size={14} /> Subscribe</button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="bg-white inline-block p-3 rounded-xl"><img src={LOGO_URL} alt="UB Mart" className="h-14" /></div>
          <p className="mt-5 text-sm text-white/70 leading-relaxed">Since 2012, we've been bringing you the finest organic and plant-based products, sourced from certified farmers across 13 states.</p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Twitter, Youtube].map((Ic, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4a7c2a] flex items-center justify-center transition"><Ic size={16} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {[["/","Home"],["/about","About Us"],["/franchise","Our Franchise"],["/our-video","Our Video"],["/contact","Contact Us"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="text-white/70 hover:text-[#a3c86d] transition">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Our Products</h4>
          <ul className="space-y-2.5 text-sm">
            {CATEGORIES.map(c => (
              <li key={c.slug}><Link to={`/products/${c.slug}`} className="text-white/70 hover:text-[#a3c86d] transition">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-[#a3c86d] flex-shrink-0" /> Corporate Office, New Delhi, India</li>
            <li className="flex items-start gap-3"><Phone size={16} className="mt-0.5 text-[#a3c86d] flex-shrink-0" /> +91 9311223026<br/>+91 7303700961</li>
            <li className="flex items-start gap-3"><Mail size={16} className="mt-0.5 text-[#a3c86d] flex-shrink-0" /> info@ubmarts.com</li>
            <li className="flex items-start gap-3"><Leaf size={16} className="mt-0.5 text-[#a3c86d] flex-shrink-0" /> Mon-Sat: 9:30 AM – 6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} UB Mart. All rights reserved. Growing organic since 2012.</span>
          <span>Secure payments via <b className="text-[#a3c86d]">Razorpay</b> • Terms • Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

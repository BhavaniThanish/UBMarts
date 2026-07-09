import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, LOGO_URL } from "../mock";
import { useToast } from "../context/ToastContext";

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
    <footer className="bg-dark-organic mt-5">
      <div className="grain-overlay"></div>

      <div className="border-bottom" style={{ borderColor: "rgba(255,255,255,.1) !important" }}>
        <div className="container-xxl px-4 px-lg-5 py-5 row align-items-center g-4 mx-auto">
          <div className="col-md-6">
            <h3 className="font-serif text-white" style={{ fontSize: "2.4rem" }}>Get Special Offers &amp; Savings</h3>
            <p className="mb-0" style={{ color: "rgba(255,255,255,.7)" }}>Latest information on Events, Sales and Offers &mdash; straight to your inbox.</p>
          </div>
          <div className="col-md-6">
            <form className="newsletter-form" onSubmit={subscribe}>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
              <button type="submit"><i className="bi bi-send"></i> Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-xxl px-4 px-lg-5 py-5 mx-auto">
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div className="bg-white d-inline-block p-3 rounded-4"><img src={LOGO_URL} alt="UB Mart" style={{ height: 56 }} /></div>
            <p className="mt-4 small" style={{ color: "rgba(255,255,255,.7)", lineHeight: 1.7 }}>Since 2012, we've been bringing you the finest organic and plant-based products, sourced from certified farmers across 13 states.</p>
            <div className="d-flex gap-2 mt-3">
              {["facebook", "instagram", "twitter-x", "youtube"].map(s => (
                <a key={s} href="#" className="social-btn" aria-label={s}><i className={`bi bi-${s}`}></i></a>
              ))}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h4 className="font-serif text-white h5 mb-3">Explore</h4>
            <ul className="list-unstyled small">
              {[["/", "Home"], ["/about", "About Us"], ["/franchise", "Our Franchise"], ["/our-video", "Our Video"], ["/contact", "Contact Us"]].map(([to, l]) => (
                <li key={to} className="mb-2"><Link to={to} className="text-decoration-none" style={{ color: "rgba(255,255,255,.7)" }}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h4 className="font-serif text-white h5 mb-3">Our Products</h4>
            <ul className="list-unstyled small">
              {CATEGORIES.map(c => (
                <li key={c.slug} className="mb-2"><Link to={`/products/${c.slug}`} className="text-decoration-none" style={{ color: "rgba(255,255,255,.7)" }}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h4 className="font-serif text-white h5 mb-3">Get in Touch</h4>
            <ul className="list-unstyled small" style={{ color: "rgba(255,255,255,.75)" }}>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-geo-alt-fill" style={{ color: "var(--ub-green-light)" }}></i> Corporate Office, New Delhi</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-telephone-fill" style={{ color: "var(--ub-green-light)" }}></i> +91 9311223026 / +91 7303700961</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-envelope-fill" style={{ color: "var(--ub-green-light)" }}></i> info@ubmarts.com</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-clock-fill" style={{ color: "var(--ub-green-light)" }}></i> Mon–Sat: 9:30 AM – 6:30 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-top" style={{ borderColor: "rgba(255,255,255,.1) !important" }}>
        <div className="container-xxl px-4 px-lg-5 py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2" style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>
          <span>&copy; {new Date().getFullYear()} UB Mart. All rights reserved. Growing organic since 2012.</span>
          <span>Secure payments via <b style={{ color: "var(--ub-green-light)" }}>Razorpay</b> • Terms • Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
    toast({ title: "Welcome to the family", description: `We'll send special offers to ${email}` });
    setEmail("");
  };
  return (
    <footer className="bg-dark-organic" style={{ paddingTop: "1px" }}>
      <div className="grain" />
      <div className="container container-editorial px-3 px-lg-4 py-5 py-lg-6 position-relative">
        <div className="row g-5">
          <div className="col-lg-5">
            <span className="eyebrow light"><i className="bi bi-envelope"></i> Newsletter</span>
            <h3 className="section-title on-dark mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Join the <span className="em">Organic</span> Family</h3>
            <p className="mt-3" style={{ color: "rgba(255,255,255,.7)", maxWidth: 420 }}>Get exclusive offers, early access to new products, and stories from the fields — in your inbox.</p>
            <form onSubmit={subscribe} className="newsletter-form mt-4">
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
              <button type="submit">Subscribe <i className="bi bi-arrow-right"></i></button>
            </form>
            <div className="d-flex gap-2 mt-4">
              {["facebook", "instagram", "twitter-x", "youtube", "pinterest"].map(s => (
                <a key={s} href="#" className="social-btn" aria-label={s}><i className={`bi bi-${s}`}></i></a>
              ))}
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
            <h6 className="eyebrow light mb-3">Explore</h6>
            <ul className="list-unstyled small">
              {[["/", "Home"], ["/about", "About"], ["/franchise", "Franchise"], ["/our-video", "Journal"], ["/contact", "Contact"]].map(([to, l]) => (
                <li key={to} className="mb-2"><Link to={to} style={{ color: "rgba(255,255,255,.7)" }}>{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="eyebrow light mb-3">Shop</h6>
            <ul className="list-unstyled small">
              {CATEGORIES.map(c => (
                <li key={c.slug} className="mb-2"><Link to={`/products/${c.slug}`} style={{ color: "rgba(255,255,255,.7)" }}>{c.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-2">
            <h6 className="eyebrow light mb-3">Reach Us</h6>
            <ul className="list-unstyled small" style={{ color: "rgba(255,255,255,.7)" }}>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-geo-alt"></i> New Delhi, India</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-telephone"></i> +91 9311223026</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-telephone"></i> +91 7303700961</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-envelope"></i> info@ubmarts.com</li>
              <li className="mb-2 d-flex gap-2"><i className="bi bi-clock"></i> Mon–Sat 9:30 AM–6:30 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-top position-relative" style={{ borderColor: "rgba(255,255,255,.1) !important" }}>
        <div className="container container-editorial px-3 px-lg-4 py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-3">
            <div style={{ background: "#fff", padding: ".5rem .75rem" }}><img src={LOGO_URL} alt="UB Mart" style={{ height: 40 }} /></div>
            <span style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>&copy; {new Date().getFullYear()} UB Mart — Growing organic since 2012</span>
          </div>
          <span style={{ color: "rgba(255,255,255,.5)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" }}>Secure payments <b style={{ color: "var(--ub-green-light)" }}>· Razorpay</b></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

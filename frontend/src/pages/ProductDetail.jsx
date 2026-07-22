import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../mock";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

const ProductDetail = () => {
  const { id } = useParams();
  const p = PRODUCTS.find(x => x.id === id);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  const { addItem } = useCart();
  const { toast } = useToast();
  if (!p) return <div className="container py-5 text-center">Product not found. <Link to="/products">Go back</Link></div>;
  const cat = CATEGORIES.find(c => c.slug === p.category);
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <main className="pb-5">
      <div className="container container-editorial px-3 px-lg-4 pt-4">
        <div style={{ fontSize: ".7rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--ub-terracotta)", fontWeight: 600 }}>
          <Link to="/" style={{ color: "inherit" }}>Home</Link> / <Link to="/products" style={{ color: "inherit" }}>Shop</Link> / {cat && <><Link to={`/products/${cat.slug}`} style={{ color: "inherit" }}>{cat.name}</Link> / </>}<span style={{ color: "var(--ub-dark)" }}>{p.name}</span>
        </div>
      </div>

      <section className="container container-editorial px-3 px-lg-4 py-4">
        <div className="row g-5">
          <div className="col-md-6">
            <div className="position-relative img-reveal" style={{ background: "var(--ub-cream-2)", aspectRatio: "1/1" }}>
              <img src={p.image} alt={p.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
              {p.badge && <span className="position-absolute top-0 start-0 m-3" style={{ background: "var(--ub-charcoal)", color: "var(--ub-cream)", padding: "5px 12px", fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 600 }}>{p.badge}</span>}
            </div>
          </div>
          <div className="col-md-6">
            {cat && <Link to={`/products/${cat.slug}`} className="eyebrow">{cat.name}</Link>}
            <h1 className="section-title mt-2" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}>{p.name}</h1>
            <div className="d-flex align-items-center gap-2 mt-2">
              <span className="stars-2">{[...Array(5)].map((_, i) => <i key={i} className={i < Math.round(p.rating) ? "bi bi-star-fill" : "bi bi-star"}></i>)}</span>
              <small className="text-muted-2">{p.rating}/5 • {p.weight}</small>
            </div>
            <div className="mt-3 d-flex align-items-baseline gap-3">
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.4rem", color: "var(--ub-green)" }}>&#8377;{p.price}</span>
              {p.oldPrice && <span className="text-muted-2 text-decoration-line-through">&#8377;{p.oldPrice}</span>}
              {p.oldPrice && <span style={{ background: "var(--ub-terracotta)", color: "#fff", padding: "3px 10px", fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase", fontWeight: 700 }}>Save {Math.round((1 - p.price / p.oldPrice) * 100)}%</span>}
            </div>
            <p className="mt-3 text-muted-2">{p.description}</p>

            <div className="divider-line mt-4"></div>

            <div className="mt-4 d-flex flex-wrap align-items-center gap-3">
              <div className="d-inline-flex align-items-center" style={{ border: "1px solid var(--ub-border)" }}>
                <button className="btn btn-sm px-3 py-2" onClick={() => setQty(q => Math.max(1, q - 1))}><i className="bi bi-dash"></i></button>
                <span className="px-3 fw-medium">{qty}</span>
                <button className="btn btn-sm px-3 py-2" onClick={() => setQty(q => q + 1)}><i className="bi bi-plus"></i></button>
              </div>
              <button className="btn btn-primary flex-fill" onClick={() => { addItem(p, qty); toast({ title: "Added to basket", description: `${qty} × ${p.name}` }); }}><i className="bi bi-basket2 me-2"></i> Add to Basket</button>
            </div>
            <div className="mt-2 d-flex gap-2">
              <button className="btn btn-outline-primary flex-fill"><i className="bi bi-heart me-2"></i> Wishlist</button>
              <button className="btn btn-outline-primary flex-fill"><i className="bi bi-share me-2"></i> Share</button>
            </div>

            <div className="row g-0 mt-4 pt-4 border-top text-center" style={{ borderColor: "var(--ub-border) !important" }}>
              {[["truck", "Free delivery"], ["shield-check", "Secure payment"], ["flower1", "100% organic"]].map(([ic, l], idx) => (
                <div key={l} className={`col-4 ${idx > 0 ? "border-start" : ""}`} style={{ borderColor: "var(--ub-border) !important", padding: ".5rem" }}>
                  <i className={`bi bi-${ic}`} style={{ fontSize: 22, color: "var(--ub-terracotta)" }}></i>
                  <div className="text-muted-2 mt-1" style={{ fontSize: 11, letterSpacing: ".15em", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container container-editorial px-3 px-lg-4">
        <ul className="nav border-bottom" style={{ borderColor: "var(--ub-border)" }}>
          {[["desc", "Description"], ["info", "Nutrition"], ["reviews", "Reviews"]].map(([k, l]) => (
            <li className="nav-item" key={k}><button className="nav-link" onClick={() => setTab(k)} style={{ color: tab === k ? "var(--ub-dark)" : "var(--ub-muted)", borderBottom: tab === k ? "2px solid var(--ub-terracotta)" : "2px solid transparent", borderRadius: 0, background: "transparent", border: 0, borderBottomWidth: 2, borderBottomStyle: "solid", padding: "1rem 1.5rem 1rem 0", letterSpacing: ".15em", textTransform: "uppercase", fontSize: ".78rem", fontWeight: 600 }}>{l}</button></li>
          ))}
        </ul>
        <div className="py-4 text-muted-2" style={{ maxWidth: 720 }}>
          {tab === "desc" && <p>{p.description} Made with 100% natural ingredients, no artificial preservatives, no chemicals. Our promise: farm-fresh quality delivered to your door.</p>}
          {tab === "info" && (
            <ul className="small">
              <li>Weight: {p.weight}</li>
              <li>Storage: Store in a cool, dry place</li>
              <li>Shelf Life: 12 months</li>
              <li>Certification: India Organic • FSSAI</li>
            </ul>
          )}
          {tab === "reviews" && <p>{Math.round(p.rating * 20)}% of customers recommend this product. Verified reviews coming soon.</p>}
        </div>
      </section>

      {related.length > 0 && (
        <section className="container container-editorial px-3 px-lg-4 mt-4">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="eyebrow">You may also love</span>
              <h2 className="section-title mt-2" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Perfect <span className="em">pairings</span></h2>
            </div>
            <Link to={`/products/${p.category}`} className="btn btn-outline-primary">View all <i className="bi bi-arrow-right ms-2"></i></Link>
          </div>
          <div className="row g-4">
            {related.map(rp => <div key={rp.id} className="col-6 col-md-3"><ProductCard p={rp} /></div>)}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, LOGO_URL, PRODUCTS } from "../mock";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const { count, setIsOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [location]);

  const matches = searchQ.length > 1 ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQ.toLowerCase())).slice(0, 6) : [];

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container container-editorial px-3 px-lg-4">
          <div className="d-flex align-items-center justify-content-between" style={{ height: 88 }}>
            <Link to="/" className="brand-mark"><img src={LOGO_URL} alt="UB Mart" /></Link>

            <nav className="d-none d-lg-flex align-items-center gap-4">
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>About</NavLink>
              <div className="dropdown mega-dropdown">
                <button className="nav-link btn btn-link p-0 dropdown-toggle" data-bs-toggle="dropdown">Shop</button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {CATEGORIES.map(c => (
                    <li key={c.slug}>
                      <Link className="mega-item" to={`/products/${c.slug}`}>
                        <img src={c.image} alt="" />
                        <div>
                          <div className="fw-semibold small text-dark">{c.name}</div>
                          <div className="text-muted" style={{ fontSize: 11 }}>{c.tagline}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1">
                    <Link to="/products" className="d-block text-center small fw-semibold py-2" style={{ background: "var(--ub-charcoal)", color: "#fff", letterSpacing: ".2em", textTransform: "uppercase" }}>All Products</Link>
                  </li>
                </ul>
              </div>
              <NavLink to="/franchise" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Franchise</NavLink>
              <NavLink to="/our-video" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Journal</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>Contact</NavLink>
            </nav>

            <div className="d-flex align-items-center gap-1">
              <button className="icon-btn" onClick={() => setSearchOpen(v => !v)} aria-label="search"><i className="bi bi-search"></i></button>
              <button className="icon-btn d-none d-lg-inline-flex" aria-label="account"><i className="bi bi-person"></i></button>
              <button className="icon-btn" onClick={() => setIsOpen(true)} aria-label="cart">
                <i className="bi bi-basket2"></i>
                {count > 0 && <span className="cart-badge">{count}</span>}
              </button>
              <button className="icon-btn d-lg-none" onClick={() => setMobileOpen(v => !v)} aria-label="menu">
                <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`}></i>
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="pb-3 animate-fadeIn">
              <div className="position-relative mx-auto" style={{ maxWidth: 640 }}>
                <i className="bi bi-search position-absolute" style={{ left: 0, top: "50%", transform: "translateY(-50%)", color: "var(--ub-muted)" }}></i>
                <input autoFocus value={searchQ} onChange={e => setSearchQ(e.target.value)} placeholder="Search for organic goodness..." className="form-control" style={{ paddingLeft: 30, borderRadius: 0, background: "transparent", borderTop: 0, borderLeft: 0, borderRight: 0 }} />
                {matches.length > 0 && (
                  <div className="position-absolute w-100 mt-2 p-2" style={{ background: "var(--ub-cream)", border: "1px solid var(--ub-border)", zIndex: 40 }}>
                    {matches.map(p => (
                      <button key={p.id} type="button" onClick={() => { navigate(`/product/${p.id}`); setSearchOpen(false); setSearchQ(""); }} className="btn w-100 d-flex align-items-center gap-3 text-start p-2 border-0" style={{ background: "transparent" }}>
                        <img src={p.image} alt="" width={44} height={44} style={{ objectFit: "cover" }} />
                        <div>
                          <div className="small" style={{ fontFamily: "'DM Serif Display', serif" }}>{p.name}</div>
                          <div className="text-muted" style={{ fontSize: 12 }}>&#8377;{p.price}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile off-canvas */}
      <div className={`mobile-menu-back d-lg-none ${mobileOpen ? "" : "closed"}`} onClick={() => setMobileOpen(false)} />
      <aside className={`mobile-menu d-lg-none ${mobileOpen ? "open" : ""}`}>
        <button onClick={() => setMobileOpen(false)} aria-label="close" className="btn position-absolute" style={{ top: 18, right: 18, background: "transparent", border: 0 }}><i className="bi bi-x-lg"></i></button>
        {[["/", "Home"], ["/about", "About"], ["/products", "Shop"], ["/franchise", "Franchise"], ["/our-video", "Journal"], ["/contact", "Contact"]].map(([to, l]) => (
          <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => isActive ? "active" : ""}>{l}</NavLink>
        ))}
        <div className="mt-4">
          <div className="eyebrow olive mb-2">Categories</div>
          {CATEGORIES.map(c => (
            <Link key={c.slug} to={`/products/${c.slug}`} style={{ display: "block", padding: ".4rem 0", fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "var(--ub-text)", borderBottom: 0 }}>{c.name}</Link>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Header;

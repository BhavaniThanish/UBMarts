import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, LOGO_URL, PRODUCTS } from "../mock";
import { useCart } from "../context/CartContext";

const navItemsLeft = [["/", "Home"], ["/about", "About Us"], ["/franchise", "Our Franchise"]];
const navItemsRight = [["/our-video", "Our Video"], ["/contact", "Contact Us"]];

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
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container-xxl px-4 px-lg-5">
        <div className="d-flex align-items-center justify-content-between" style={{ height: 80 }}>
          {/* Left nav (desktop) */}
          <nav className="d-none d-lg-flex align-items-center gap-4 flex-fill">
            {navItemsLeft.map(([to, l]) => (
              <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>{l}</NavLink>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="d-inline-flex align-items-center">
            <img src={LOGO_URL} alt="UB Mart" style={{ height: 64 }} />
          </Link>

          {/* Right nav */}
          <nav className="d-none d-lg-flex align-items-center gap-4 flex-fill justify-content-end">
            <div className="dropdown mega-dropdown dropdown-menu-end-hover">
              <button className="nav-link btn btn-link p-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Our Products
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {CATEGORIES.map(c => (
                  <li key={c.slug}>
                    <Link className="mega-item" to={`/products/${c.slug}`}>
                      <img src={c.image} alt="" />
                      <div>
                        <div className="fw-semibold small text-dark">{c.name}</div>
                        <div className="text-muted" style={{ fontSize: "11px" }}>{c.tagline}</div>
                      </div>
                    </Link>
                  </li>
                ))}
                <li className="mt-2">
                  <Link to="/products" className="d-block text-center text-uppercase small fw-semibold py-2 rounded-3" style={{ letterSpacing: ".2em", background: "var(--ub-cream-2)", color: "var(--ub-green)" }}>Shop All Products</Link>
                </li>
              </ul>
            </div>
            {navItemsRight.map(([to, l]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>{l}</NavLink>
            ))}
            <div className="d-flex align-items-center gap-1 ps-3 border-start" style={{ borderColor: "var(--ub-border)" }}>
              <button className="icon-btn" onClick={() => setSearchOpen(v => !v)} aria-label="search"><i className="bi bi-search"></i></button>
              <button className="icon-btn" onClick={() => setIsOpen(true)} aria-label="cart">
                <i className="bi bi-bag"></i>
                {count > 0 && <span className="cart-badge">{count}</span>}
              </button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="d-flex d-lg-none align-items-center gap-1">
            <button className="icon-btn" onClick={() => setSearchOpen(v => !v)} aria-label="search"><i className="bi bi-search"></i></button>
            <button className="icon-btn" onClick={() => setIsOpen(true)} aria-label="cart">
              <i className="bi bi-bag"></i>
              {count > 0 && <span className="cart-badge">{count}</span>}
            </button>
            <button className="icon-btn" onClick={() => setMobileOpen(v => !v)} aria-label="menu">
              <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-3 animate-fadeIn">
            <div className="position-relative mx-auto" style={{ maxWidth: 640 }}>
              <i className="bi bi-search position-absolute" style={{ left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--ub-muted)" }}></i>
              <input autoFocus value={searchQ} onChange={e => setSearchQ(e.target.value)} placeholder="Search organic products..." className="form-control rounded-pill" style={{ paddingLeft: 44, paddingRight: 20, height: 46 }} />
              {matches.length > 0 && (
                <div className="position-absolute w-100 mt-2 bg-white rounded-4 shadow-lg p-2" style={{ border: "1px solid var(--ub-border)", zIndex: 40 }}>
                  {matches.map(p => (
                    <button key={p.id} type="button" onClick={() => { navigate(`/product/${p.id}`); setSearchOpen(false); setSearchQ(""); }} className="btn w-100 d-flex align-items-center gap-3 text-start p-2 rounded-3" style={{ background: "transparent" }}>
                      <img src={p.image} alt="" width={40} height={40} style={{ objectFit: "cover", borderRadius: 6 }} />
                      <div>
                        <div className="small fw-medium">{p.name}</div>
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="d-lg-none bg-white animate-fadeIn" style={{ borderTop: "1px solid var(--ub-border)" }}>
          <div className="p-3 d-flex flex-column">
            {[["/", "Home"], ["/about", "About Us"], ["/franchise", "Our Franchise"], ["/products", "Our Products"], ["/our-video", "Our Video"], ["/contact", "Contact Us"]].map(([to, l]) => (
              <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `px-3 py-2 rounded-3 fw-medium ${isActive ? "bg-cream text-success" : "text-dark"}`}>{l}</NavLink>
            ))}
            <div className="px-3 pt-3">
              <div className="text-uppercase text-muted small mb-2" style={{ letterSpacing: ".2em", fontSize: 11 }}>Categories</div>
              {CATEGORIES.map(c => (
                <Link key={c.slug} to={`/products/${c.slug}`} className="d-block py-2 small" style={{ color: "var(--ub-text)" }}>{c.name}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

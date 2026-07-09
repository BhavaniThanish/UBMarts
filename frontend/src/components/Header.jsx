import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, ChevronDown, Menu, X, User } from "lucide-react";
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

  const matches = searchQ.length > 1 ? PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQ.toLowerCase())).slice(0,6) : [];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_-10px_rgba(46,125,50,0.2)]" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="d-flex lg:grid lg:grid-cols-[1fr_auto_1fr] align-items-center justify-content-between h-20">
          {/* Left nav */}
          <nav className="d-none d-lg-flex align-items-center justify-content-end gap-8 pr-12">
            <NavLink to="/" className={({isActive}) => `nav-link text-sm font-medium tracking-wide text-[#1f2a1a] hover:text-[#2e7d32] ${isActive ? "active text-[#2e7d32]" : ""}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => `nav-link text-sm font-medium tracking-wide text-[#1f2a1a] hover:text-[#2e7d32] ${isActive ? "active text-[#2e7d32]" : ""}`}>About Us</NavLink>
            <NavLink to="/franchise" className={({isActive}) => `nav-link text-sm font-medium tracking-wide text-[#1f2a1a] hover:text-[#2e7d32] ${isActive ? "active text-[#2e7d32]" : ""}`}>Our Franchise</NavLink>
          </nav>

          {/* Logo center */}
          <Link to="/" className="d-flex align-items-center gap-3 group">
            <img src={LOGO_URL} alt="UB Mart" className="h-14 md:h-16 transition-transform group-hover:scale-105" />
          </Link>

          {/* Right nav */}
          <nav className="d-none d-lg-flex align-items-center justify-content-start gap-8 pl-12">
            <div className="dropdown-parent relative">
              <button className="nav-link text-sm font-medium tracking-wide text-[#1f2a1a] hover:text-[#2e7d32] d-flex align-items-center gap-1">
                Our Products <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu absolute right-0 top-full mt-4 w-72 bg-white rounded-xl shadow-2xl border border-[#e8e2d4] overflow-hidden">
                <div className="p-2">
                  {CATEGORIES.map(c => (
                    <Link key={c.slug} to={`/products/${c.slug}`} className="d-flex align-items-center gap-3 p-3 rounded-lg hover:bg-[#f5f0e6] transition group">
                      <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={c.image} alt="" className="w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1f2a1a] group-hover:text-[#2e7d32]">{c.name}</div>
                        <div className="text-xs text-[#6b7360]">{c.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link to="/products" className="block text-center text-xs uppercase tracking-widest font-semibold bg-[#f5f0e6] text-[#2e7d32] py-3 hover:bg-[#2e7d32] hover:text-white transition">Shop All Products</Link>
              </div>
            </div>
            <NavLink to="/our-video" className={({isActive}) => `nav-link text-sm font-medium tracking-wide text-[#1f2a1a] hover:text-[#2e7d32] ${isActive ? "active text-[#2e7d32]" : ""}`}>Our Video</NavLink>
            <NavLink to="/contact" className={({isActive}) => `nav-link text-sm font-medium tracking-wide text-[#1f2a1a] hover:text-[#2e7d32] ${isActive ? "active text-[#2e7d32]" : ""}`}>Contact Us</NavLink>
            <div className="d-flex align-items-center gap-3 pl-2 border-l border-[#e8e2d4]">
              <button onClick={() => setSearchOpen(v => !v)} className="p-2 rounded-circle hover:bg-[#f5f0e6] transition" aria-label="search"><Search size={18} /></button>
              <button onClick={() => setIsOpen(true)} className="relative p-2 rounded-circle hover:bg-[#f5f0e6] transition" aria-label="cart">
                <ShoppingBag size={18} />
                {count > 0 && <span className="absolute -top-0.5 -right-0.5 bg-[#2e7d32] text-white text-[10px] rounded-circle w-5 h-5 d-flex align-items-center justify-content-center font-bold">{count}</span>}
              </button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="d-flex lg:hidden align-items-center gap-2">
            <button onClick={() => setSearchOpen(v => !v)} className="p-2" aria-label="search"><Search size={20} /></button>
            <button onClick={() => setIsOpen(true)} className="relative p-2" aria-label="cart">
              <ShoppingBag size={20} />
              {count > 0 && <span className="absolute top-0 right-0 bg-[#2e7d32] text-white text-[10px] rounded-circle w-4 h-4 d-flex align-items-center justify-content-center font-bold">{count}</span>}
            </button>
            <button onClick={() => setMobileOpen(v => !v)} className="p-2" aria-label="menu">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>

        {/* Search dropdown */}
        {searchOpen && (
          <div className="animate-fadeIn pb-5">
            <div className="relative max-w-2xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7360]" />
              <input autoFocus value={searchQ} onChange={e => setSearchQ(e.target.value)} placeholder="Search organic products..." className="w-100 pl-11 pr-4 py-3 rounded-circle border border-[#e8e2d4] focus:border-[#2e7d32] focus:outline-none bg-[#faf7f2] text-sm" />
              {matches.length > 0 && (
                <div className="absolute top-full mt-2 w-100 bg-white rounded-xl shadow-2xl border border-[#e8e2d4] p-2 z-40">
                  {matches.map(p => (
                    <button key={p.id} onClick={() => { navigate(`/product/${p.id}`); setSearchOpen(false); setSearchQ(""); }} className="w-100 d-flex align-items-center gap-3 p-2 rounded-lg hover:bg-[#f5f0e6] text-left transition">
                      <img src={p.image} alt="" className="w-10 h-10 rounded object-cover" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-[#1f2a1a]">{p.name}</div>
                        <div className="text-xs text-[#6b7360]">&#8377;{p.price}</div>
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
        <div className="lg:hidden border-t border-[#e8e2d4] bg-white animate-fadeIn">
          <div className="p-5 d-flex flex-column gap-1">
            {[["/","Home"],["/about","About Us"],["/franchise","Our Franchise"],["/products","Our Products"],["/our-video","Our Video"],["/contact","Contact Us"]].map(([to,label]) => (
              <NavLink key={to} to={to} className={({isActive}) => `px-4 py-3 rounded-lg font-medium ${isActive ? "bg-[#f5f0e6] text-[#2e7d32]" : "text-[#1f2a1a]"} hover:bg-[#f5f0e6]`}>{label}</NavLink>
            ))}
            <div className="pl-4 pt-2">
              <div className="text-xs uppercase tracking-widest text-[#6b7360] mb-2">Categories</div>
              {CATEGORIES.map(c => (
                <Link key={c.slug} to={`/products/${c.slug}`} className="block px-2 py-2 text-sm text-[#3a4530] hover:text-[#2e7d32]">{c.name}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

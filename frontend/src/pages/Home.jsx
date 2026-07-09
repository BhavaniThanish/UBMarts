import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Phone, ShieldCheck, Infinity as InfIcon, Leaf, Sparkles, Award, Quote, Play, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { CATEGORIES, PRODUCTS, HERO_SLIDES, FEATURES, TESTIMONIALS, STATS } from "../mock";
import ProductCard from "../components/ProductCard";

const iconMap = { Truck, Phone, ShieldCheck, Infinity: InfIcon };

const Home = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  const featured = PRODUCTS.slice(0, 8);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden hero-premium-bg">
        {/* Layered organic background elements */}
        <div className="hero-leaves-image" />
        <div className="hero-leaves-image-right" />
        <div className="hero-sunray" />
        <div className="hero-organic-lines" />
        <div className="hero-paper-tex" />

        {/* Decorative botanical branch top-right */}
        <svg className="hero-branch" style={{ top: '-20px', right: '8%', width: 180 }} viewBox="0 0 200 240" fill="none">
          <path d="M100 240 Q 95 180 105 140 Q 115 100 100 60 Q 85 30 95 5" stroke="#2e5a2b" strokeWidth="2" strokeLinecap="round" opacity="0.55" fill="none" />
          <g fill="#4a7c2a" opacity="0.55">
            <ellipse cx="80" cy="200" rx="22" ry="8" transform="rotate(-30 80 200)" />
            <ellipse cx="125" cy="175" rx="20" ry="7" transform="rotate(25 125 175)" />
            <ellipse cx="82" cy="145" rx="24" ry="8" transform="rotate(-25 82 145)" />
            <ellipse cx="122" cy="115" rx="20" ry="7" transform="rotate(30 122 115)" />
            <ellipse cx="82" cy="85" rx="22" ry="7" transform="rotate(-30 82 85)" />
            <ellipse cx="118" cy="55" rx="18" ry="6" transform="rotate(25 118 55)" />
            <ellipse cx="88" cy="28" rx="16" ry="5" transform="rotate(-25 88 28)" />
          </g>
        </svg>

        {/* Decorative fern bottom-left */}
        <svg className="hero-branch" style={{ bottom: '-30px', left: '3%', width: 200, animationDelay: '2s' }} viewBox="0 0 200 240" fill="none">
          <path d="M100 240 Q 105 180 95 140 Q 85 90 105 40 Q 115 15 105 0" stroke="#2e5a2b" strokeWidth="2" strokeLinecap="round" opacity="0.4" fill="none" />
          <g fill="#6b8e23" opacity="0.45">
            <ellipse cx="122" cy="200" rx="22" ry="7" transform="rotate(30 122 200)" />
            <ellipse cx="80" cy="170" rx="20" ry="7" transform="rotate(-30 80 170)" />
            <ellipse cx="118" cy="140" rx="22" ry="7" transform="rotate(25 118 140)" />
            <ellipse cx="80" cy="105" rx="24" ry="8" transform="rotate(-30 80 105)" />
            <ellipse cx="120" cy="70" rx="20" ry="7" transform="rotate(30 120 70)" />
            <ellipse cx="88" cy="35" rx="18" ry="6" transform="rotate(-25 88 35)" />
          </g>
        </svg>

        <div className="grain-overlay" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 align-items-center">
          <div className="relative z-10">
            {HERO_SLIDES.map((s, i) => i === slide && (
              <div key={i} className="animate-fadeUp">
                <div className="inline-flex align-items-center gap-2 bg-white/70 backdrop-blur border border-[#4a7c2a]/20 px-4 py-1.5 rounded-circle text-xs font-medium text-[#2e7d32] mb-6">
                  <Leaf size={12} /> {s.tagline}
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#1f2a1a] font-semibold">
                  {s.title.split(" ").map((w, k) => (
                    <span key={k} className={k === 1 ? "italic text-[#4a7c2a]" : ""}>{w} </span>
                  ))}
                </h1>
                <p className="mt-6 text-lg text-[#3a4530] max-w-lg leading-relaxed">{s.subtitle}</p>
                <div className="mt-8 d-flex flex-wrap align-items-center gap-4">
                  <Link to={s.href} className="btn-primary">{s.cta} <ArrowRight size={16} /></Link>
                  <Link to="/about" className="btn-outline">Our Story</Link>
                </div>
              </div>
            ))}
            {/* slide dots */}
            <div className="mt-10 d-flex align-items-center gap-3">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-circle transition-all ${i === slide ? "w-10 bg-[#2e7d32]" : "w-4 bg-[#c8c1af] hover:bg-[#4a7c2a]"}`} aria-label={`slide ${i+1}`} />
              ))}
              <button onClick={() => setSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)} className="ml-4 p-2 rounded-circle border border-[#4a7c2a]/30 hover:bg-[#2e7d32] hover:text-white hover:border-transparent transition"><ChevronLeft size={14} /></button>
              <button onClick={() => setSlide(s => (s + 1) % HERO_SLIDES.length)} className="p-2 rounded-circle border border-[#4a7c2a]/30 hover:bg-[#2e7d32] hover:text-white hover:border-transparent transition"><ChevronRight size={14} /></button>
            </div>
          </div>

          {/* Hero image stack */}
          <div className="relative h-[420px] md:h-[540px]">
            {HERO_SLIDES.map((s, i) => (
              <div key={i} className={`absolute inset-0 transition-all duration-1000 ${i === slide ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl">
                  <img src={s.image} alt={s.title} className="w-100 h-100 object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, transparent 40%, ${s.accent}40 100%)`}} />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl d-flex align-items-center gap-3 animate-float">
                  <div className="w-12 h-12 rounded-circle bg-[#f5f0e6] d-flex align-items-center justify-content-center"><Award size={22} className="text-[#e6a817]" /></div>
                  <div>
                    <p className="text-xs text-[#6b7360]">Certified</p>
                    <p className="font-serif text-lg text-[#1f2a1a]">100% Organic</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#2e7d32] text-white rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: ".6s"}}>
                  <p className="text-[10px] uppercase tracking-widest opacity-80">Since</p>
                  <p className="font-serif text-3xl">2012</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-white border-y border-[#eae5d8]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Ic = iconMap[f.icon];
            return (
              <div key={i} className="d-flex align-items-center gap-4 group">
                <div className="w-14 h-14 rounded-circle bg-[#f5f0e6] group-hover:bg-[#2e7d32] d-flex align-items-center justify-content-center transition-colors duration-300">
                  <Ic size={22} className="text-[#2e7d32] group-hover:text-white transition" />
                </div>
                <div>
                  <p className="font-serif text-lg text-[#1f2a1a]">{f.title}</p>
                  <p className="text-xs text-[#6b7360]">{f.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4"><Sparkles size={14} /> Shop by Category</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">Nature's Finest, <span className="italic text-[#4a7c2a]">Curated for You</span></h2>
          <p className="mt-4 text-[#6b7360]">From plant-based meats to ancient herbs — five carefully crafted collections that redefine what organic can be.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <Link key={c.slug} to={`/products/${c.slug}`} className={`group relative rounded-3xl overflow-hidden ${i === 0 ? "lg:col-span-2 lg:row-span-2 min-h-[500px]" : "min-h-[240px]"}`}>
              <img src={c.image} alt={c.name} className="absolute inset-0 w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 30%, ${c.color}e0 100%)`}} />
              <div className="relative h-100 d-flex flex-column justify-content-end p-8 text-white z-10">
                <p className="text-xs uppercase tracking-[0.3em] opacity-80">{c.tagline}</p>
                <h3 className="font-serif text-3xl md:text-4xl mt-2">{c.name}</h3>
                {i === 0 && <p className="mt-3 max-w-md opacity-90">{c.description}</p>}
                <span className="mt-4 inline-flex align-items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">Shop Now <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-[#f5f0e6]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-10 gap-4">
            <div>
              <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-3"><Leaf size={14} /> Best Sellers</div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">Handpicked <span className="italic text-[#4a7c2a]">Favourites</span></h2>
            </div>
            <Link to="/products" className="btn-outline">View All <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* Story banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 align-items-center">
          <div className="relative img-reveal rounded-[40px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1000" alt="farm" className="w-100 h-[520px] object-cover" />
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur rounded-2xl px-5 py-3">
              <p className="text-xs uppercase tracking-widest text-[#6b7360]">Organic since</p>
              <p className="font-serif text-4xl text-[#2e7d32]">2012</p>
            </div>
          </div>
          <div>
            <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4"><Sparkles size={14} /> Our Story</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a] leading-tight">Trying to create a new <span className="italic text-[#4a7c2a]">Organic Mart</span> experience since 2012</h2>
            <p className="mt-6 text-[#3a4530] leading-relaxed">At UB Mart, we are more than a convenience store, pharmacy, and cafe. We combine the best of all worlds under one roof — providing convenience, health, and a welcoming atmosphere for our customers.</p>
            <p className="mt-4 text-[#3a4530] leading-relaxed">From certified organic groceries to plant-based meats, our team of experts sources the very best of nature and delivers it straight to your door.</p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="bg-[#f5f0e6] rounded-xl p-4">
                  <p className="font-serif text-3xl text-[#2e7d32]">{s.value}</p>
                  <p className="text-xs text-[#6b7360] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary mt-8">Discover Our Journey <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Franchise CTA (with Testimonials theme) */}
      <section className="bg-[#1f2a1a] text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-circle bg-[#4a7c2a]/20 blur-3xl" />
        <div className="grain-overlay" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
          <div className="relative grid md:grid-cols-2 gap-10 align-items-center">
            <div>
              <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold mb-4 text-[#a3c86d]"><Award size={14} /> Franchise Opportunity</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">Grow with us. <span className="italic text-[#a3c86d]">Own an organic empire.</span></h2>
              <p className="mt-4 text-white/85 max-w-lg">Partner with UB Mart and be part of India's largest organic movement. Established brand, proven model, dedicated support.</p>
              <Link to="/franchise" className="mt-8 inline-flex align-items-center gap-2 bg-[#a3c86d] text-[#1f2a1a] px-7 py-3 rounded-circle font-semibold hover:bg-white transition">Explore Franchise <ArrowRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["300+","Products"],["13","States"],["50K+","Customers"],["12+","Years"]].map(([v,l], i) => (
                <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition group">
                  <p className="font-serif text-4xl text-[#a3c86d]">{v}</p>
                  <p className="text-sm text-white/80 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video preview strip */}
      <section className="bg-[#f5f0e6]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid md:grid-cols-[1.2fr_1fr] gap-10 align-items-center">
          <Link to="/our-video" className="relative rounded-[32px] overflow-hidden aspect-video img-reveal group">
            <img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=1200" alt="video" className="w-100 h-100 object-cover" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <div className="absolute inset-0 d-flex align-items-center justify-content-center">
              <span className="w-20 h-20 rounded-circle bg-white d-flex align-items-center justify-content-center animate-pulse shadow-2xl" style={{animation: 'pulseRing 2s infinite'}}>
                <Play size={30} className="text-[#2e7d32] ml-1" />
              </span>
            </div>
          </Link>
          <div>
            <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4">Watch Our Story</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">From <span className="italic text-[#4a7c2a]">farm</span> to your family</h2>
            <p className="mt-4 text-[#3a4530]">Meet the farmers, walk our fields, and see how every product on your shelf begins with love, respect for the land, and a promise of purity.</p>
            <Link to="/our-video" className="btn-primary mt-6">Watch Videos <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

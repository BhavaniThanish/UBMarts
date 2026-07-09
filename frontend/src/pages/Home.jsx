import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, PRODUCTS, HERO_SLIDES, FEATURES, TESTIMONIALS, STATS } from "../mock";
import ProductCard from "../components/ProductCard";

const iconMap = { Truck: "truck", Phone: "telephone", ShieldCheck: "shield-check", Infinity: "infinity" };

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
      <section className="hero-premium-bg">
        <div className="hero-leaves-l" />
        <div className="hero-leaves-r" />
        <div className="hero-sunray" />
        <div className="hero-organic-lines" />
        <div className="hero-paper-tex" />

        {/* botanical branch top-right */}
        <svg className="hero-branch" style={{ top: -20, right: "8%", width: 180 }} viewBox="0 0 200 240" fill="none">
          <path d="M100 240 Q 95 180 105 140 Q 115 100 100 60 Q 85 30 95 5" stroke="#2e5a2b" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
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
        {/* fern bottom-left */}
        <svg className="hero-branch" style={{ bottom: -30, left: "3%", width: 200, animationDelay: "2s" }} viewBox="0 0 200 240" fill="none">
          <path d="M100 240 Q 105 180 95 140 Q 85 90 105 40 Q 115 15 105 0" stroke="#2e5a2b" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
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

        <div className="container-xxl px-4 px-lg-5 py-5 py-lg-6 position-relative mx-auto">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              {HERO_SLIDES.map((s, i) => i === slide && (
                <div key={s.title} className="animate-fadeUp">
                  <span className="eyebrow bg-white bg-opacity-75 px-3 py-2 rounded-pill" style={{ border: "1px solid rgba(74,124,42,.2)" }}>
                    <i className="bi bi-flower1"></i> {s.tagline}
                  </span>
                  <h1 className="section-title mt-4" style={{ fontSize: "clamp(2.6rem, 5vw, 4.6rem)", fontWeight: 600 }}>
                    {s.title.split(" ").map((w, k) => (
                      <span key={k} className={k === 1 ? "italic" : ""}>{w} </span>
                    ))}
                  </h1>
                  <p className="mt-3 lead" style={{ color: "var(--ub-text)", maxWidth: 500 }}>{s.subtitle}</p>
                  <div className="mt-4 d-flex flex-wrap align-items-center gap-3">
                    <Link to={s.href} className="btn btn-primary">{s.cta} <i className="bi bi-arrow-right ms-1"></i></Link>
                    <Link to="/about" className="btn btn-outline-primary">Our Story</Link>
                  </div>
                </div>
              ))}
              <div className="hero-dots">
                {HERO_SLIDES.map((s, i) => (
                  <button key={s.title} onClick={() => setSlide(i)} aria-label={`slide ${i + 1}`} className={`hero-dot ${i === slide ? "active" : ""}`} />
                ))}
                <button className="icon-btn ms-3" onClick={() => setSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}><i className="bi bi-chevron-left"></i></button>
                <button className="icon-btn" onClick={() => setSlide(s => (s + 1) % HERO_SLIDES.length)}><i className="bi bi-chevron-right"></i></button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                {HERO_SLIDES.map((s, i) => (
                  <div key={s.title} style={{ display: i === slide ? "block" : "none" }} className="animate-fadeIn">
                    <div className="hero-image-wrap">
                      <img src={s.image} alt={s.title} />
                      <div className="tint" style={{ background: `linear-gradient(160deg, transparent 40%, ${s.accent}40 100%)` }}></div>
                    </div>
                    <div className="floating-chip" style={{ bottom: -20, left: -20 }}>
                      <span className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, background: "var(--ub-cream-2)" }}>
                        <i className="bi bi-award-fill" style={{ fontSize: 22, color: "var(--ub-gold)" }}></i>
                      </span>
                      <div>
                        <div className="small text-muted-2" style={{ fontSize: 12 }}>Certified</div>
                        <div className="font-serif h5 mb-0">100% Organic</div>
                      </div>
                    </div>
                    <div className="floating-chip top-right" style={{ animationDelay: ".6s" }}>
                      <div>
                        <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", opacity: .85 }}>Since</div>
                        <div className="font-serif" style={{ fontSize: "1.8rem", lineHeight: 1 }}>2012</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-white border-top border-bottom" style={{ borderColor: "var(--ub-border)" }}>
        <div className="container-xxl px-4 px-lg-5 py-4 mx-auto">
          <div className="row g-4">
            {FEATURES.map(f => (
              <div key={f.title} className="col-6 col-lg-3">
                <div className="feat-item d-flex align-items-center gap-3">
                  <div className="feat-icon"><i className={`bi bi-${iconMap[f.icon]}`}></i></div>
                  <div>
                    <div className="font-serif h6 mb-0">{f.title}</div>
                    <div className="text-muted-2" style={{ fontSize: 12 }}>{f.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <span className="eyebrow"><i className="bi bi-stars"></i> Shop by Category</span>
          <h2 className="section-title mt-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Nature's Finest, <span className="italic">Curated for You</span></h2>
          <p className="text-muted-2 mt-3">From plant-based meats to ancient herbs — five carefully crafted collections that redefine what organic can be.</p>
        </div>
        <div className="row g-4">
          {CATEGORIES.map((c, i) => (
            <div key={c.slug} className={i === 0 ? "col-lg-8" : "col-6 col-lg-4"}>
              <Link to={`/products/${c.slug}`} className={`category-card ${i === 0 ? "big" : ""}`}>
                <img src={c.image} alt={c.name} />
                <div className="overlay" style={{ background: `linear-gradient(180deg, transparent 30%, ${c.color}e0 100%)` }}></div>
                <div className="content">
                  <div className="eye">{c.tagline}</div>
                  <h3>{c.name}</h3>
                  {i === 0 && <p className="mt-2 opacity-90" style={{ maxWidth: 420 }}>{c.description}</p>}
                  <span className="go">Shop Now <i className="bi bi-arrow-right"></i></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-cream">
        <div className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-3">
            <div>
              <span className="eyebrow"><i className="bi bi-flower1"></i> Best Sellers</span>
              <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Handpicked <span className="italic">Favourites</span></h2>
            </div>
            <Link to="/products" className="btn btn-outline-primary">View All <i className="bi bi-arrow-right ms-1"></i></Link>
          </div>
          <div className="row g-4">
            {featured.map(p => <div key={p.id} className="col-6 col-md-4 col-lg-3"><ProductCard p={p} /></div>)}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="img-reveal position-relative">
              <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1000" alt="farm" className="w-100" style={{ height: 520, objectFit: "cover", display: "block" }} />
              <div className="position-absolute bg-white bg-opacity-95 rounded-4 px-4 py-3" style={{ top: 20, left: 20 }}>
                <div className="eyebrow" style={{ letterSpacing: ".25em" }}>Organic since</div>
                <div className="font-serif" style={{ fontSize: "2.5rem", color: "var(--ub-green)", lineHeight: 1 }}>2012</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="eyebrow"><i className="bi bi-stars"></i> Our Story</span>
            <h2 className="section-title mt-3" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>Trying to create a new <span className="italic">Organic Mart</span> experience since 2012</h2>
            <p className="mt-4" style={{ color: "var(--ub-text)" }}>At UB Mart, we are more than a convenience store, pharmacy, and cafe. We combine the best of all worlds under one roof — providing convenience, health, and a welcoming atmosphere for our customers.</p>
            <p className="mt-2" style={{ color: "var(--ub-text)" }}>From certified organic groceries to plant-based meats, our team of experts sources the very best of nature and delivers it straight to your door.</p>
            <div className="row g-3 mt-2">
              {STATS.map(s => (
                <div key={s.label} className="col-6 col-sm-3">
                  <div className="bg-cream rounded-4 p-3">
                    <div className="font-serif" style={{ fontSize: "1.9rem", color: "var(--ub-green)", lineHeight: 1 }}>{s.value}</div>
                    <div className="text-muted-2" style={{ fontSize: 12 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary mt-4">Discover Our Journey <i className="bi bi-arrow-right ms-1"></i></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark-organic py-5 py-lg-6">
        <div className="grain-overlay" />
        <div className="blob" style={{ width: 380, height: 380, background: "rgba(74,124,42,.25)", top: -80, right: -80 }} />
        <div className="container-xxl px-4 px-lg-5 position-relative mx-auto">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <span className="eyebrow" style={{ color: "var(--ub-green-light)" }}><i className="bi bi-quote"></i> Testimonials</span>
            <h2 className="section-title mt-3 text-white" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Loved by <span className="italic" style={{ color: "var(--ub-green-light)" }}>50,000+</span> families</h2>
          </div>
          <div className="row g-4">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="col-md-6 col-lg-3">
                <div className="h-100 rounded-4xl p-4" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", backdropFilter: "blur(6px)" }}>
                  <i className="bi bi-quote" style={{ fontSize: 32, color: "var(--ub-green-light)" }}></i>
                  <p className="small mt-2" style={{ color: "rgba(255,255,255,.9)", lineHeight: 1.65 }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <img src={t.avatar} alt={t.name} width={44} height={44} className="rounded-circle" style={{ objectFit: "cover" }} />
                    <div>
                      <div className="fw-medium small text-white">{t.name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,.6)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="position-relative rounded-5xl p-4 p-md-5 text-white" style={{ background: "linear-gradient(135deg, var(--ub-green), var(--ub-green-mid))", overflow: "hidden" }}>
          <div className="grain-overlay" />
          <div className="blob" style={{ width: 400, height: 400, background: "rgba(255,255,255,.1)", bottom: -100, right: -100 }} />
          <div className="row g-4 align-items-center position-relative">
            <div className="col-md-6">
              <span className="eyebrow text-white" style={{ opacity: .9 }}><i className="bi bi-award"></i> Franchise Opportunity</span>
              <h2 className="section-title text-white mt-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Grow with us. <span className="italic" style={{ color: "var(--ub-green-light)" }}>Own an organic empire.</span></h2>
              <p className="mt-3" style={{ color: "rgba(255,255,255,.9)", maxWidth: 500 }}>Partner with UB Mart and be part of India's largest organic movement. Established brand, proven model, dedicated support.</p>
              <Link to="/franchise" className="btn bg-white mt-3 rounded-pill fw-semibold" style={{ color: "var(--ub-green)", padding: ".75rem 1.75rem" }}>Explore Franchise <i className="bi bi-arrow-right ms-1"></i></Link>
            </div>
            <div className="col-md-6">
              <div className="row g-3">
                {[["300+", "Products"], ["13", "States"], ["50K+", "Customers"], ["12+", "Years"]].map(([v, l]) => (
                  <div key={l} className="col-6">
                    <div className="rounded-4xl p-4" style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)" }}>
                      <div className="font-serif" style={{ fontSize: "2.3rem", lineHeight: 1 }}>{v}</div>
                      <div className="small" style={{ color: "rgba(255,255,255,.85)" }}>{l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video CTA */}
      <section className="bg-cream">
        <div className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <Link to="/our-video" className="video-tile d-block">
                <img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=1200" alt="video" />
                <div className="grad"></div>
                <div className="play"><span><i className="bi bi-play-fill"></i></span></div>
              </Link>
            </div>
            <div className="col-lg-5">
              <span className="eyebrow">Watch Our Story</span>
              <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>From <span className="italic">farm</span> to your family</h2>
              <p className="mt-3 text-muted-2">Meet the farmers, walk our fields, and see how every product on your shelf begins with love, respect for the land, and a promise of purity.</p>
              <Link to="/our-video" className="btn btn-primary mt-2">Watch Videos <i className="bi bi-arrow-right ms-1"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, PRODUCTS, HERO_SLIDES, FEATURES, TESTIMONIALS, STATS } from "../mock";
import ProductCard from "../components/ProductCard";

const iconMap = { Truck: "truck", Phone: "telephone", ShieldCheck: "shield-check", Infinity: "infinity" };

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [testi, setTesti] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setTesti(s => (s + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const featured = PRODUCTS.slice(0, 8);
  const currentSlide = HERO_SLIDES[slide];
  const currentTesti = TESTIMONIALS[testi];

  return (
    <main>
      {/* HERO EDITORIAL */}
      <section className="hero-editorial">
        <div className="bg-word top">Organic</div>
        {/* Decorative leaves */}
        <svg className="leaf-1" viewBox="0 0 120 160" fill="none">
          <path d="M60 8 C 22 42, 12 100, 55 154 C 82 130, 116 78, 106 40 C 100 18, 82 8, 60 8Z" fill="#4a7c2a" opacity="0.55" />
          <path d="M62 20 L 60 148" stroke="#2b5a2b" strokeWidth="1.5" opacity="0.6" />
        </svg>
        <svg className="leaf-2" viewBox="0 0 120 160" fill="none">
          <path d="M60 8 C 22 42, 12 100, 55 154 C 82 130, 116 78, 106 40 C 100 18, 82 8, 60 8Z" fill="#b45f3e" opacity="0.5" transform="rotate(35 60 80)" />
        </svg>

        <div className="container container-editorial px-3 px-lg-4 position-relative">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="animate-fadeUp" key={currentSlide.title}>
                <span className="eyebrow"><span style={{ display: "inline-block", width: 24, height: 1, background: "var(--ub-terracotta)" }} /> {currentSlide.tagline}</span>
                <h1 className="hero-headline mt-3">
                  {currentSlide.title.split(" ").map((w, k) => (
                    <span key={k} className={k === 1 ? "em" : ""}>{w} </span>
                  ))}
                </h1>
                <p className="hero-sub mt-4">{currentSlide.subtitle}</p>
                <div className="mt-4 d-flex flex-wrap align-items-center gap-3">
                  <Link to={currentSlide.href} className="btn btn-primary">{currentSlide.cta} <i className="bi bi-arrow-right ms-2"></i></Link>
                  <Link to="/our-video" className="d-inline-flex align-items-center gap-2 text-decoration-none" style={{ color: "var(--ub-dark)", fontWeight: 600, fontSize: ".82rem", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    <span className="d-inline-flex align-items-center justify-content-center" style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--ub-terracotta)", color: "#fff" }}><i className="bi bi-play-fill"></i></span>
                    Watch Our Story
                  </Link>
                </div>
              </div>

              <div className="d-flex align-items-center gap-4 mt-5">
                <div className="stat-vertical">
                  <div className="num">2012</div>
                  <div className="lbl">Est.</div>
                </div>
                <div className="stat-vertical">
                  <div className="num">300+</div>
                  <div className="lbl">Products</div>
                </div>
                <div className="stat-vertical">
                  <div className="num">50K+</div>
                  <div className="lbl">Customers</div>
                </div>
                <div className="ms-auto d-none d-md-flex align-items-center gap-2">
                  {HERO_SLIDES.map((s, i) => (
                    <button key={s.title} onClick={() => setSlide(i)} aria-label={`slide ${i+1}`} style={{ width: i === slide ? 40 : 12, height: 3, background: i === slide ? "var(--ub-terracotta)" : "var(--ub-border)", border: 0, padding: 0, transition: "width .3s, background .3s" }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-visual">
                <div className="disc">
                  <div className="disc-bg" />
                  <div className="disc-inner">
                    <img src={currentSlide.image} alt={currentSlide.title} />
                  </div>
                  <svg className="ring-text ring-svg" viewBox="0 0 500 500">
                    <defs><path id="circle" d="M 250,250 m -220,0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0" /></defs>
                    <text><textPath href="#circle">UB MART · FROM FARM TO PLATE · ORGANIC · SINCE 2012 · </textPath></text>
                  </svg>
                  <div className="chip bl">
                    <span style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--ub-cream-2)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><i className="bi bi-award" style={{ color: "var(--ub-terracotta)", fontSize: 22 }}></i></span>
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", color: "var(--ub-muted)" }}>Certified</div>
                      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem" }}>100% Organic</div>
                    </div>
                  </div>
                  <div className="chip tr">
                    <div>
                      <div style={{ fontSize: 10, letterSpacing: ".25em", textTransform: "uppercase", opacity: .85 }}>Rating</div>
                      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem" }}>4.9 <i className="bi bi-star-fill" style={{ color: "var(--ub-gold)", fontSize: ".9rem" }}></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee band */}
      <section className="marquee-band">
        <div className="track">
          {[0, 1].map(k => (
            <span key={k}>
              Organic <span className="em">Living</span> <span className="dot" /> Plant <span className="em">Based</span> <span className="dot" /> Farm <span className="em">Fresh</span> <span className="dot" /> Herbal <span className="em">Wisdom</span> <span className="dot" /> Pure <span className="em">Goodness</span> <span className="dot" />
            </span>
          ))}
        </div>
      </section>

      {/* Feature strip */}
      <section className="feature-strip">
        <div className="container container-editorial px-3 px-lg-4">
          <div className="row">
            {FEATURES.map((f, idx) => (
              <div key={f.title} className={`col-6 col-lg-3 feat-item ${idx > 0 ? "border-start" : ""}`} style={{ borderColor: "var(--ub-border) !important", paddingLeft: idx > 0 ? "1.75rem" : 0 }}>
                <div className="feat-icon"><i className={`bi bi-${iconMap[f.icon]}`}></i></div>
                <div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem" }}>{f.title}</div>
                  <div className="text-muted-2" style={{ fontSize: 12 }}>{f.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story block */}
      <section className="story-block">
        <div className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
            <span className="divider-serif">Our Philosophy</span>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="story-imgs position-relative">
                <img src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=900" alt="market" className="w-100" style={{ height: 460, objectFit: "cover" }} />
                <img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=400" alt="farm" className="position-absolute d-none d-md-block" style={{ width: 210, height: 260, objectFit: "cover", bottom: -40, right: -30, border: "8px solid var(--ub-cream)" }} />
              </div>
            </div>
            <div className="col-lg-6">
              <span className="eyebrow">Est. 2012</span>
              <h2 className="section-title mt-3" style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)" }}>Trying to create a new <span className="em">Organic Mart</span> experience</h2>
              <div className="story-quote mt-4">Everyone has the right to safe food that is grown with lots of love and care.</div>
              <p className="mt-4 text-muted-2">At UB Mart, we are more than a convenience store, pharmacy, and cafe. We combine the best of all worlds under one roof — providing convenience, health, and a welcoming atmosphere for our valued customers.</p>
              <Link to="/about" className="btn btn-outline-primary mt-3">Discover Our Journey <i className="bi bi-arrow-right ms-2"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories editorial */}
      <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row align-items-end mb-5">
          <div className="col-md-7">
            <span className="eyebrow">Explore</span>
            <h2 className="section-title mt-3" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>Our five <span className="em">collections</span></h2>
          </div>
          <div className="col-md-5 text-md-end">
            <Link to="/products" className="btn btn-outline-primary">View all <i className="bi bi-arrow-right ms-2"></i></Link>
          </div>
        </div>
        <div className="row g-5">
          {CATEGORIES.map((c, i) => (
            <div key={c.slug} className="col-md-6 col-lg-4">
              <Link to={`/products/${c.slug}`} className="cat-editorial">
                <div className="num">0{i+1}</div>
                <div className="img-wrap"><img src={c.image} alt={c.name} /></div>
                <h3>{c.name}</h3>
                <div className="tagline">{c.tagline}</div>
                <span className="arrow">Shop Now <i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="bg-cream">
        <div className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
          <div className="row align-items-end mb-5">
            <div className="col-md-7">
              <span className="eyebrow"><i className="bi bi-flower1"></i> Curated Selection</span>
              <h2 className="section-title mt-3" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>Handpicked <span className="em">favourites</span></h2>
            </div>
            <div className="col-md-5 text-md-end">
              <Link to="/products" className="btn btn-outline-primary">Shop all <i className="bi bi-arrow-right ms-2"></i></Link>
            </div>
          </div>
          <div className="row g-4">
            {featured.map(p => <div key={p.id} className="col-6 col-md-4 col-lg-3"><ProductCard p={p} /></div>)}
          </div>
        </div>
      </section>

      {/* Testimonials single */}
      <section className="bg-dark-organic py-5 py-lg-6">
        <div className="grain" />
        <div className="blob-blur" style={{ width: 400, height: 400, background: "rgba(180,95,62,.25)", top: -80, left: -80 }} />
        <div className="blob-blur" style={{ width: 460, height: 460, background: "rgba(74,124,42,.2)", bottom: -120, right: -100 }} />
        <div className="container container-editorial px-3 px-lg-4 position-relative">
          <div className="text-center mx-auto" style={{ maxWidth: 820 }}>
            <span className="eyebrow light">Kind Words</span>
            <h2 className="section-title on-dark mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Loved by <span className="em">50,000+</span> families</h2>
            <div className="testi-single mt-5 animate-fadeIn" key={currentTesti.name}>
              <img className="avatar" src={currentTesti.avatar} alt={currentTesti.name} />
              <blockquote>{currentTesti.text}</blockquote>
              <div className="name text-white">{currentTesti.name}</div>
              <div className="role">{currentTesti.role}</div>
            </div>
            <div className="testi-dots">
              {TESTIMONIALS.map((t, i) => (
                <button key={t.name} className={`testi-dot ${i === testi ? "active" : ""}`} onClick={() => setTesti(i)} aria-label={`testimonial ${i+1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Big stats */}
      <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row g-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`col-6 col-md-3 ${i > 0 ? "border-start" : ""}`} style={{ borderColor: "var(--ub-border) !important" }}>
              <div className="big-stat">
                <div className="num">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Franchise band */}
      <section className="franchise-band">
        <div className="bg-word">Grow</div>
        <div className="row g-0 align-items-stretch position-relative">
          <div className="col-md-6" style={{ minHeight: 420 }}>
            <img src="https://images.pexels.com/photos/29039800/pexels-photo-29039800.jpeg?w=1000" alt="farm" className="figure-img" style={{ display: "block", height: "100%", minHeight: 420 }} />
          </div>
          <div className="col-md-6 p-4 p-lg-6 d-flex align-items-center position-relative">
            <div>
              <span className="eyebrow light"><i className="bi bi-award"></i> Franchise Opportunity</span>
              <h2 className="section-title on-dark mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "#fff" }}>Grow with us. <span className="em" style={{ color: "var(--ub-cream)" }}>Own an organic empire.</span></h2>
              <p className="mt-3" style={{ color: "rgba(255,255,255,.85)", maxWidth: 500 }}>Partner with UB Mart and be part of India's largest organic movement. Established brand, proven model, dedicated support.</p>
              <Link to="/franchise" className="btn bg-white mt-3" style={{ color: "var(--ub-terracotta)", padding: ".8rem 1.8rem", fontWeight: 600, letterSpacing: ".05em", textTransform: "uppercase", fontSize: ".78rem", borderRadius: 0 }}>Explore Franchise <i className="bi bi-arrow-right ms-2"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery + Watch */}
      <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="eyebrow">Watch Our Story</span>
            <h2 className="section-title mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>From <span className="em">farm</span> to your family</h2>
            <p className="mt-3 text-muted-2">Meet the farmers, walk our fields, and see how every product on your shelf begins with love, respect for the land, and a promise of purity.</p>
            <div className="mt-4 d-flex align-items-center gap-3">
              <Link to="/our-video" className="cta-circle"><i className="bi bi-play-fill"></i></Link>
              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.2rem" }}>Play the story</div>
                <div className="text-muted-2 small">6 short films • 3 minutes each</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Link to="/our-video" className="video-tile">
              <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200" alt="video" />
              <div className="grad" />
              <div className="cap">
                <div className="eye">Featured</div>
                <h3>What is Organic Food?</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Instagram-style gallery */}
        <div className="mt-5 pt-5 border-top" style={{ borderColor: "var(--ub-border)" }}>
          <div className="text-center mb-4">
            <span className="eyebrow">Follow us @ubmart</span>
            <h3 className="section-title mt-2" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>Straight from the <span className="em">gram</span></h3>
          </div>
          <div className="row g-2">
            {[
              "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400",
              "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
              "https://images.unsplash.com/photo-1534432182912-63863115e106?w=400",
              "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=400",
              "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
              "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400"
            ].map((src) => (
              <div key={src} className="col-4 col-md-2">
                <a href="#" className="gallery-item">
                  <img src={src} alt="" />
                  <span className="ig-icon"><i className="bi bi-instagram"></i></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

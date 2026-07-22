import React from "react";
import { Link } from "react-router-dom";
import { HISTORY, STATS } from "../mock";

const About = () => (
  <main>
    <section className="page-header-2">
      <div className="bg-word">About</div>
      <div className="container container-editorial px-3 px-lg-4 position-relative">
        <div className="crumb">Home / About Us</div>
        <h1>Rooted in <span className="em">nature.</span></h1>
      </div>
    </section>

    <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="img-reveal"><img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1000" alt="organic" className="w-100" style={{ height: 560, objectFit: "cover" }} /></div>
        </div>
        <div className="col-lg-6">
          <span className="eyebrow">Since 2012</span>
          <h2 className="section-title mt-3" style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", lineHeight: 1.1 }}>Trying to create a new <span className="em">Organic Mart</span> experience since 2012</h2>
          <p className="mt-4 text-muted-2">At UB Mart, we pride ourselves on being more than just a convenience store, pharmacy, and cafe. We are a unique destination that combines the best of these three worlds under one roof, providing convenience, health, and a welcoming atmosphere for our valued customers.</p>
          <p className="text-muted-2">As a convenience store, we offer a wide range of essential products and daily necessities. Our pharmacy is dedicated to your well-being with knowledgeable pharmacists. And our on-site cafe offers a cozy space with fresh, nutritious food.</p>
          <p className="text-muted-2">Welcome to UB Mart, where <b style={{ color: "var(--ub-dark)" }}>convenience, health, and comfort</b> come together to enhance your everyday life.</p>
        </div>
      </div>
    </section>

    <section className="bg-cream">
      <div className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 p-lg-5 h-100 position-relative" style={{ background: "#fff", border: "1px solid var(--ub-border)" }}>
              <i className="bi bi-eye" style={{ fontSize: 40, color: "var(--ub-terracotta)" }}></i>
              <h3 className="section-title mt-3" style={{ fontSize: "2.4rem" }}>Our <span className="em">Vision</span></h3>
              <ul className="list-unstyled mt-3" style={{ color: "var(--ub-text)" }}>
                {[
                  "A world where organic and sustainable is the norm and chemical agriculture is non-existent.",
                  "A world that says no to poisons — for your family, the farmers, and the Earth.",
                  "We started with just a few farmers and products. Today we offer 300+ products sourced from 13 different states.",
                ].map(t => (
                  <li key={t} className="d-flex gap-3 mb-3"><span style={{ minWidth: 22, height: 1, marginTop: 12, background: "var(--ub-terracotta)" }} /> <span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-dark-organic p-4 p-lg-5 h-100 position-relative overflow-hidden">
              <div className="blob-blur" style={{ width: 240, height: 240, background: "rgba(163,200,109,.2)", top: -40, left: -40 }}></div>
              <i className="bi bi-bullseye position-relative" style={{ fontSize: 40, color: "var(--ub-green-light)" }}></i>
              <h3 className="section-title on-dark mt-3" style={{ fontSize: "2.4rem" }}>Our <span className="em">Mission</span></h3>
              <p style={{ color: "rgba(255,255,255,.85)" }}>To make food production more sustainable so we can grow safe and healthy food to feed everyone. We deliver fresh, safe and healthy food straight from the farm to your plate.</p>
              <p style={{ color: "rgba(255,255,255,.85)" }}>We believe everyone has the right to safe food that is grown with love and care. We encourage people to know more about where their food comes from.</p>
              <p className="small" style={{ color: "rgba(255,255,255,.75)" }}>Interested in collaborating? Email us at <a href="mailto:info@ubmarts.com" style={{ color: "var(--ub-green-light)" }}>info@ubmarts.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
      <div className="row g-0">
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

    <section className="bg-cream">
      <div className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <span className="eyebrow">Our History</span>
          <h2 className="section-title mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>A decade of <span className="em">organic growth</span></h2>
        </div>
        <div className="timeline">
          {HISTORY.map((h, i) => (
            <div key={h.year} className="timeline-row row g-4 align-items-center">
              <div className="timeline-dot d-none d-md-block"></div>
              <div className="d-md-none timeline-dot" style={{ left: 2 }}></div>
              {i % 2 === 0 ? (
                <>
                  <div className="col-md-6 text-md-end pe-md-5">
                    <div className="timeline-year">{h.year}</div>
                  </div>
                  <div className="col-md-6 ps-4 ps-md-5">
                    <h3>{h.title}</h3>
                    <p className="text-muted-2 mt-2">{h.text}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 text-md-end order-md-1 pe-md-5 ps-4 ps-md-0">
                    <h3>{h.title}</h3>
                    <p className="text-muted-2 mt-2">{h.text}</p>
                  </div>
                  <div className="col-md-6 order-md-2 ps-md-5">
                    <div className="timeline-year">{h.year}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6 text-center">
      <span className="divider-serif">Ready to begin</span>
      <h2 className="section-title mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>Ready to taste the <span className="em">difference?</span></h2>
      <p className="text-muted-2 mx-auto mt-3" style={{ maxWidth: 480 }}>Join thousands of families who trust UB Mart for their daily organic essentials.</p>
      <Link to="/products" className="btn btn-primary mt-3">Shop Now <i className="bi bi-arrow-right ms-2"></i></Link>
    </section>
  </main>
);

export default About;

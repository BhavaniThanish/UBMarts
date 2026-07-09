import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Target, Eye, Sprout, Users, ArrowRight } from "lucide-react";
import { HISTORY, STATS } from "../mock";

const PageHeader = ({ title, breadcrumb }) => (
  <section className="relative bg-gradient-to-br from-[#f5f0e6] via-[#faf7f2] to-[#e8f0d8] overflow-hidden">
    <div className="absolute -top-20 -right-20 w-96 h-96 rounded-circle bg-[#a3c86d]/20 blur-3xl" />
    <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 md:py-24 text-center">
      <div className="text-xs uppercase tracking-[0.3em] text-[#4a7c2a] mb-4">{breadcrumb}</div>
      <h1 className="font-serif text-5xl md:text-7xl text-[#1f2a1a]">{title}</h1>
    </div>
  </section>
);

const About = () => (
  <main>
    <PageHeader title="About Us" breadcrumb="Home / About Us" />

    {/* Intro */}
    <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 align-items-center">
      <div className="img-reveal rounded-[32px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1000" alt="organic" className="w-100 h-[540px] object-cover" />
      </div>
      <div>
        <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4"><Leaf size={14} /> Since 2012</div>
        <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a] leading-tight">Trying to create a new <span className="italic text-[#4a7c2a]">Organic Mart</span> experience</h2>
        <p className="mt-6 text-[#3a4530] leading-relaxed">At UB Mart, we pride ourselves on being more than just a convenience store, pharmacy, and cafe. We are a unique destination that combines the best of these three worlds under one roof, providing convenience, health, and a welcoming atmosphere for our valued customers.</p>
        <p className="mt-4 text-[#3a4530] leading-relaxed">As a convenience store, we offer a wide range of essential products and daily necessities. Our pharmacy is dedicated to your well-being with knowledgeable pharmacists. And our on-site cafe offers a cozy space with fresh, nutritious food.</p>
        <p className="mt-4 text-[#3a4530] leading-relaxed">Welcome to UB Mart, where <b>convenience, health, and comfort</b> come together to enhance your everyday life.</p>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="bg-[#f5f0e6]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[32px] p-10 border border-[#eae5d8] relative overflow-hidden group">
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-circle bg-[#4a7c2a]/10 group-hover:bg-[#4a7c2a]/20 transition" />
          <Eye size={40} className="text-[#4a7c2a] mb-6" />
          <h3 className="font-serif text-4xl text-[#1f2a1a]">Our Vision</h3>
          <ul className="mt-6 space-y-4 text-[#3a4530]">
            <li className="d-flex gap-3"><Sprout size={18} className="text-[#4a7c2a] mt-0.5 flex-shrink-0" /> A world where organic and sustainable is the norm and chemical agriculture is non-existent.</li>
            <li className="d-flex gap-3"><Sprout size={18} className="text-[#4a7c2a] mt-0.5 flex-shrink-0" /> A world that says no to poisons — for your family, the farmers, and the Earth.</li>
            <li className="d-flex gap-3"><Sprout size={18} className="text-[#4a7c2a] mt-0.5 flex-shrink-0" /> We started with just a few farmers and products. Today we offer 300+ products sourced from 13 different states.</li>
          </ul>
        </div>
        <div className="bg-[#1f2a1a] text-white rounded-[32px] p-10 relative overflow-hidden group">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-circle bg-[#a3c86d]/20 blur-2xl" />
          <Target size={40} className="text-[#a3c86d] mb-6" />
          <h3 className="font-serif text-4xl">Our Mission</h3>
          <p className="mt-6 text-white/85 leading-relaxed">To make food production more sustainable so we can grow safe and healthy food to feed everyone. We deliver fresh, safe and healthy food straight from the farm to your plate.</p>
          <p className="mt-4 text-white/85 leading-relaxed">We believe everyone has the right to safe food that is grown with love and care. We encourage people to know more about where their food comes from.</p>
          <p className="mt-4 text-white/85 leading-relaxed text-sm">Interested in collaborating? Email us at <a href="mailto:info@ubmarts.com" className="text-[#a3c86d] underline">info@ubmarts.com</a></p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <div key={i} className="text-center bg-white rounded-2xl p-8 border border-[#eae5d8] hover:shadow-xl hover:-translate-y-1 transition-all">
            <p className="font-serif text-5xl text-[#2e7d32]">{s.value}</p>
            <p className="text-sm text-[#6b7360] mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* History timeline */}
    <section className="bg-gradient-to-br from-[#f5f0e6] to-[#faf7f2] relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4"><Users size={14} /> Our History</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">A decade of <span className="italic text-[#4a7c2a]">organic growth</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4a7c2a]/30 d-none d-md-block" />
          <div className="space-y-12">
            {HISTORY.map((h, i) => (
              <div key={i} className={`md:grid md:grid-cols-2 md:gap-12 align-items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 1 ? "md:order-2" : ""} md:text-right`}>
                  <p className="font-serif text-6xl md:text-7xl text-[#2e7d32]/25">{h.year}</p>
                </div>
                <div className={`relative pl-8 md:pl-12 border-l-2 md:border-l-0 border-[#4a7c2a]/30 ${i % 2 === 1 ? "md:order-1 md:pr-12 md:pl-0 md:border-r-2 md:text-right" : ""}`}>
                  <span className="absolute -left-2 md:left-auto md:-right-2 top-0 w-4 h-4 rounded-circle bg-[#2e7d32] ring-4 ring-[#f5f0e6]" style={{left: i % 2 === 1 ? "auto" : "-8px", right: i % 2 === 1 ? "-8px" : "auto"}} />
                  <h3 className="font-serif text-3xl text-[#1f2a1a]">{h.title}</h3>
                  <p className="mt-3 text-[#3a4530] leading-relaxed">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">Ready to taste the <span className="italic text-[#4a7c2a]">difference?</span></h2>
      <p className="mt-4 text-[#3a4530] max-w-xl mx-auto">Join thousands of families who trust UB Mart for their daily organic essentials.</p>
      <Link to="/products" className="btn-primary mt-8">Shop Now <ArrowRight size={16} /></Link>
    </section>
  </main>
);

export default About;

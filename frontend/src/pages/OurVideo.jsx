import React, { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  { id: "UG3sfZKtIrE", title: "What is Organic Food?", subtitle: "A quick introduction to organic farming" },
  { id: "Ftn6oCVpMbY", title: "Plant-Based Meat Revolution", subtitle: "Why plant-based is the future" },
  { id: "jGXZ8O_0KUM", title: "Meet Our Farmers", subtitle: "From farm to your family plate" },
  { id: "kuSg2fRXOgo", title: "Ayurvedic Wisdom", subtitle: "Ancient herbs, modern wellness" },
  { id: "C3g8-QP0FKQ", title: "How We Deliver Fresh", subtitle: "Behind the scenes of our supply chain" },
  { id: "ohGXlrGN1RY", title: "Franchise Success Stories", subtitle: "Real partners, real growth" },
];

const OurVideo = () => {
  const [active, setActive] = useState(null);
  return (
    <main>
      <section className="relative bg-gradient-to-br from-[#f5f0e6] via-[#faf7f2] to-[#e8f0d8] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#a3c86d]/20 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 md:py-24 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[#4a7c2a] mb-4">Home / Our Video</div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1f2a1a]">Our <span className="italic text-[#4a7c2a]">Videos</span></h1>
          <p className="mt-6 text-[#3a4530] max-w-2xl mx-auto">Stories from the fields, from our kitchens and from the families we serve.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <button key={i} onClick={() => setActive(v)} className="group relative rounded-3xl overflow-hidden text-left bg-black aspect-video">
              <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition"><Play size={26} className="text-[#2e7d32] ml-1" /></span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-xs uppercase tracking-widest text-[#a3c86d]">{v.subtitle}</p>
                <h3 className="font-serif text-xl mt-1">{v.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div onClick={() => setActive(null)} className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-5 animate-fadeIn">
          <button onClick={() => setActive(null)} className="absolute top-5 right-5 text-white p-2 hover:bg-white/10 rounded-full" aria-label="close"><X size={24} /></button>
          <div onClick={e => e.stopPropagation()} className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe src={`https://www.youtube.com/embed/${active.id}?autoplay=1`} title={active.title} allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full" />
          </div>
        </div>
      )}
    </main>
  );
};

export default OurVideo;

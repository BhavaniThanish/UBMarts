import React, { useState } from "react";

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
      <section className="page-header-2">
        <div className="bg-word">Journal</div>
        <div className="container container-editorial px-3 px-lg-4 position-relative">
          <div className="crumb">Home / Journal</div>
          <h1>Our <span className="em">videos</span></h1>
          <p className="text-muted-2 mt-3" style={{ maxWidth: 620 }}>Stories from the fields, from our kitchens and from the families we serve.</p>
        </div>
      </section>

      <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row g-4">
          {videos.map((v, i) => (
            <div key={v.id} className={i === 0 ? "col-12 col-lg-8" : "col-md-6 col-lg-4"}>
              <button className="video-tile w-100" onClick={() => setActive(v)} style={i === 0 ? { aspectRatio: "16/8" } : {}}>
                <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
                <div className="grad"></div>
                <div className="play"><span><i className="bi bi-play-fill"></i></span></div>
                <div className="cap">
                  <div className="eye">{v.subtitle}</div>
                  <h3>{v.title}</h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4 animate-fadeIn" style={{ background: "rgba(0,0,0,.9)", zIndex: 1080 }} onClick={() => setActive(null)}>
          <button className="btn text-white position-absolute" style={{ top: 20, right: 20 }} onClick={() => setActive(null)}><i className="bi bi-x-lg" style={{ fontSize: 24 }}></i></button>
          <div className="w-100 overflow-hidden shadow" style={{ maxWidth: 960, aspectRatio: "16/9" }} onClick={e => e.stopPropagation()}>
            <iframe title={active.title} src={`https://www.youtube.com/embed/${active.id}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen className="w-100 h-100 border-0" />
          </div>
        </div>
      )}
    </main>
  );
};

export default OurVideo;

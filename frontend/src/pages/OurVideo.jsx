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
      <section className="page-header">
        <div className="crumb">Home / Our Video</div>
        <h1>Our <span className="italic" style={{ color: "var(--ub-green-mid)" }}>Videos</span></h1>
        <p className="text-muted-2 mx-auto mt-3" style={{ maxWidth: 600 }}>Stories from the fields, from our kitchens and from the families we serve.</p>
      </section>

      <section className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="row g-4">
          {videos.map(v => (
            <div key={v.id} className="col-md-6 col-lg-4">
              <button className="video-tile w-100 border-0 p-0" onClick={() => setActive(v)}>
                <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} />
                <div className="grad"></div>
                <div className="play"><span><i className="bi bi-play-fill"></i></span></div>
                <div className="caption">
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
          <div className="w-100 rounded-4xl overflow-hidden shadow" style={{ maxWidth: 960, aspectRatio: "16/9" }} onClick={e => e.stopPropagation()}>
            <iframe title={active.title} src={`https://www.youtube.com/embed/${active.id}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen className="w-100 h-100 border-0" />
          </div>
        </div>
      )}
    </main>
  );
};

export default OurVideo;

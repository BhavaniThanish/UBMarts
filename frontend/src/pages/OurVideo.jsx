import React from "react";

const OurVideo = () => {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-[#f5f0e6] via-[#faf7f2] to-[#e8f0d8] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#a3c86d]/20 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 md:py-24 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[#4a7c2a] mb-4">Home / Our Video</div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1f2a1a]">Our <span className="italic text-[#4a7c2a]">Video</span></h1>
          <p className="mt-6 text-[#3a4530] max-w-2xl mx-auto">Stories from the fields, from our kitchens and from the families we serve.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black">
          <iframe 
            src="https://www.youtube.com/embed/UG3sfZKtIrE" 
            title="UB Mart Video" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="w-full h-full border-0" 
          />
        </div>
      </section>
    </main>
  );
};

export default OurVideo;

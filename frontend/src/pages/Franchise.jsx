import React, { useState } from "react";
import { useToast } from "../context/ToastContext";

const benefits = [
  { icon: "award", title: "Established Brand", text: "12+ years of trust, recognition and organic authority." },
  { icon: "graph-up-arrow", title: "Proven Business Model", text: "Time-tested revenue systems and operational playbooks." },
  { icon: "cash-coin", title: "Attractive ROI", text: "Healthy margins on 300+ premium organic SKUs." },
  { icon: "stars", title: "End-to-end Support", text: "Training, marketing, supply chain — we've got you." },
];
const steps = [
  "Submit the enquiry form below",
  "Our team schedules a discovery call",
  "We evaluate location & feasibility",
  "Sign agreement & receive training",
  "Grand opening & ongoing support",
];

const Franchise = () => {
  const [f, setF] = useState({ name: "", email: "", phone: "", city: "", investment: "", message: "" });
  const { toast } = useToast();
  const submit = (e) => {
    e.preventDefault();
    toast({ title: "Enquiry received!", description: "Our franchise team will reach out within 48 hours." });
    setF({ name: "", email: "", phone: "", city: "", investment: "", message: "" });
  };
  return (
    <main>
      <section className="position-relative overflow-hidden text-white" style={{ background: "linear-gradient(135deg, var(--ub-dark), #2e4a24, var(--ub-green-mid))" }}>
        <div className="grain-overlay"></div>
        <div className="blob" style={{ width: 500, height: 500, background: "rgba(163,200,109,.15)", bottom: -100, right: -100 }}></div>
        <div className="container-xxl px-4 px-lg-5 py-5 py-lg-6 position-relative mx-auto">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow" style={{ color: "var(--ub-green-light)" }}><i className="bi bi-award"></i> Our Franchise</span>
              <h1 className="section-title text-white mt-3" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", lineHeight: 1.1 }}>Grow with the <span className="italic" style={{ color: "var(--ub-green-light)" }}>organic revolution</span></h1>
              <p className="mt-3 lead" style={{ color: "rgba(255,255,255,.85)", maxWidth: 500 }}>Partner with UB Mart and own a piece of India's fastest growing organic movement. Established brand. Proven model. Total support.</p>
              <a href="#enquiry" className="btn btn-primary mt-3">Apply Now <i className="bi bi-arrow-right ms-1"></i></a>
            </div>
            <div className="col-lg-6">
              <img src="https://images.pexels.com/photos/29039800/pexels-photo-29039800.jpeg?w=1000" alt="farm" className="w-100 rounded-5xl shadow" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Why partner with <span className="italic">UB Mart</span></h2>
          <p className="text-muted-2 mt-3">A partnership designed to help you thrive from day one.</p>
        </div>
        <div className="row g-4">
          {benefits.map(b => (
            <div key={b.title} className="col-6 col-lg-3">
              <div className="h-100 bg-white p-4 rounded-4xl" style={{ border: "1px solid var(--ub-border)" }}>
                <div className="feat-icon" style={{ borderRadius: 16 }}><i className={`bi bi-${b.icon}`}></i></div>
                <h3 className="font-serif h4 mt-3">{b.title}</h3>
                <p className="small text-muted-2 mb-0">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow">How it Works</span>
              <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Five steps to <span className="italic">ownership</span></h2>
              <ol className="list-unstyled mt-4">
                {steps.map((s, i) => (
                  <li key={s} className="d-flex gap-3 mb-4">
                    <span className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold" style={{ width: 44, height: 44, background: "var(--ub-green)", color: "#fff", fontFamily: "'Playfair Display',serif" }}>{i + 1}</span>
                    <span className="pt-2 fw-medium">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6">
              <div className="img-reveal"><img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=1000" alt="farm" className="w-100" style={{ height: 540, objectFit: "cover", display: "block" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="row g-4">
          <div className="col-lg-5">
            <span className="eyebrow">Franchise Enquiry</span>
            <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Ready to <span className="italic">start?</span></h2>
            <p className="text-muted-2 mt-3">Fill in the details and our franchise team will reach out within 48 hours to guide you through the next steps.</p>
            <ul className="list-unstyled mt-3">
              {["Zero royalty for the first 6 months", "Complete on-site training", "Dedicated relationship manager", "Marketing kit worth ₹1,00,000"].map(t => (
                <li key={t} className="d-flex gap-2 mb-2 small" style={{ color: "var(--ub-text)" }}><i className="bi bi-check-circle-fill" style={{ color: "var(--ub-green)" }}></i> {t}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-7">
            <form className="bg-white rounded-5xl p-4 p-md-5 row g-3" onSubmit={submit} style={{ border: "1px solid var(--ub-border)" }}>
              {[["name", "Full Name*", "text"], ["email", "Email*", "email"], ["phone", "Phone*", "tel"], ["city", "City*", "text"]].map(([k, l, t]) => (
                <div key={k} className="col-md-6">
                  <label className="eyebrow d-block mb-1">{l}</label>
                  <input required type={t} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} className="form-control rounded-3" style={{ background: "var(--ub-cream)" }} />
                </div>
              ))}
              <div className="col-12">
                <label className="eyebrow d-block mb-1">Investment Range</label>
                <select value={f.investment} onChange={e => setF({ ...f, investment: e.target.value })} className="form-select rounded-3" style={{ background: "var(--ub-cream)" }}>
                  <option value="">Select budget</option>
                  <option>₹15L - ₹25L</option>
                  <option>₹25L - ₹50L</option>
                  <option>₹50L+</option>
                </select>
              </div>
              <div className="col-12">
                <label className="eyebrow d-block mb-1">Message</label>
                <textarea rows={4} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} className="form-control rounded-3" style={{ background: "var(--ub-cream)" }} />
              </div>
              <div className="col-12"><button className="btn btn-primary w-100">Submit Enquiry <i className="bi bi-arrow-right ms-1"></i></button></div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Franchise;

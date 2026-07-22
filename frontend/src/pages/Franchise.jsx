import React, { useState } from "react";
import { useToast } from "../context/ToastContext";

const benefits = [
  { icon: "award", title: "Established Brand", text: "12+ years of trust, recognition and organic authority." },
  { icon: "graph-up-arrow", title: "Proven Model", text: "Time-tested revenue systems and operational playbooks." },
  { icon: "cash-coin", title: "Attractive ROI", text: "Healthy margins on 300+ premium organic SKUs." },
  { icon: "stars", title: "Full Support", text: "Training, marketing, supply chain — we've got you." },
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
      <section className="page-header-2" style={{ background: "var(--ub-charcoal)" }}>
        <div className="bg-word" style={{ color: "rgba(255,255,255,.05)" }}>Grow</div>
        <div className="container container-editorial px-3 px-lg-4 position-relative">
          <div className="crumb" style={{ color: "var(--ub-terracotta)" }}>Home / Franchise</div>
          <h1 style={{ color: "#fff" }}>Grow with the <span className="em">organic</span> revolution</h1>
          <p className="text-white mt-3" style={{ maxWidth: 640, color: "rgba(255,255,255,.75) !important" }}>Partner with UB Mart and own a piece of India's fastest growing organic movement. Established brand. Proven model. Total support.</p>
          <a href="#enquiry" className="btn btn-terracotta mt-3">Apply Now <i className="bi bi-arrow-right ms-2"></i></a>
        </div>
      </section>

      <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <span className="eyebrow">Why UB Mart</span>
          <h2 className="section-title mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Designed for you to <span className="em">thrive</span></h2>
        </div>
        <div className="row g-4">
          {benefits.map((b, i) => (
            <div key={b.title} className="col-6 col-lg-3">
              <div className="h-100 p-4" style={{ background: "#fff", border: "1px solid var(--ub-border)" }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.4rem", color: "var(--ub-terracotta)", lineHeight: 1 }}>0{i+1}</div>
                  <i className={`bi bi-${b.icon}`} style={{ fontSize: 24, color: "var(--ub-green)" }}></i>
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.4rem", fontWeight: 400 }}>{b.title}</h3>
                <p className="small text-muted-2 mb-0">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="eyebrow">How it works</span>
              <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Five steps to <span className="em">ownership</span></h2>
              <ol className="list-unstyled mt-4">
                {steps.map((s, i) => (
                  <li key={s} className="d-flex gap-3 py-3 border-bottom align-items-center" style={{ borderColor: "var(--ub-border)" }}>
                    <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", color: "var(--ub-terracotta)", minWidth: 48 }}>0{i+1}</span>
                    <span className="fw-medium">{s}</span>
                    <i className="bi bi-arrow-right ms-auto text-muted-2"></i>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6">
              <div className="img-reveal"><img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=1000" alt="farm" className="w-100" style={{ height: 580, objectFit: "cover" }} /></div>
            </div>
          </div>
        </div>
      </section>

      <section id="enquiry" className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row g-5">
          <div className="col-lg-5">
            <span className="eyebrow">Enquire</span>
            <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Ready to <span className="em">start?</span></h2>
            <p className="text-muted-2 mt-3">Fill in the details and our franchise team will reach out within 48 hours to guide you through the next steps.</p>
            <ul className="list-unstyled mt-3">
              {["Zero royalty for the first 6 months", "Complete on-site training", "Dedicated relationship manager", "Marketing kit worth ₹1,00,000"].map(t => (
                <li key={t} className="d-flex gap-2 mb-2 small" style={{ color: "var(--ub-text)" }}><i className="bi bi-check2" style={{ color: "var(--ub-terracotta)" }}></i> {t}</li>
              ))}
            </ul>
          </div>
          <div className="col-lg-7">
            <form className="p-4 p-lg-5 row g-3" onSubmit={submit} style={{ background: "#fff", border: "1px solid var(--ub-border)" }}>
              {[["name", "Full Name*", "text"], ["email", "Email*", "email"], ["phone", "Phone*", "tel"], ["city", "City*", "text"]].map(([k, l, t]) => (
                <div key={k} className="col-md-6">
                  <label className="eyebrow d-block mb-2">{l}</label>
                  <input required type={t} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} className="form-control" />
                </div>
              ))}
              <div className="col-12">
                <label className="eyebrow d-block mb-2">Investment Range</label>
                <select value={f.investment} onChange={e => setF({ ...f, investment: e.target.value })} className="form-select">
                  <option value="">Select budget</option>
                  <option>₹15L - ₹25L</option>
                  <option>₹25L - ₹50L</option>
                  <option>₹50L+</option>
                </select>
              </div>
              <div className="col-12">
                <label className="eyebrow d-block mb-2">Message</label>
                <textarea rows={4} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} className="form-control" />
              </div>
              <div className="col-12"><button className="btn btn-primary w-100">Submit Enquiry <i className="bi bi-arrow-right ms-2"></i></button></div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Franchise;

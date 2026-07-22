import React, { useState } from "react";
import { useToast } from "../context/ToastContext";

const infos = [
  { icon: "telephone", title: "Phone", lines: ["+91 9311223026", "+91 7303700961"] },
  { icon: "envelope", title: "Email", lines: ["info@ubmarts.com"] },
  { icon: "geo-alt", title: "Office", lines: ["Corporate Office", "New Delhi, India"] },
  { icon: "clock", title: "Business Hours", lines: ["Mon–Sat: 9:30 AM – 6:30 PM", "Sunday – Closed"] },
];

const Contact = () => {
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const { toast } = useToast();
  const submit = (e) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within one business day." });
    setF({ name: "", email: "", phone: "", subject: "", message: "" });
  };
  return (
    <main>
      <section className="page-header-2">
        <div className="bg-word">Hello</div>
        <div className="container container-editorial px-3 px-lg-4 position-relative">
          <div className="crumb">Home / Contact</div>
          <h1>Get in <span className="em">touch</span></h1>
          <p className="text-muted-2 mt-3" style={{ maxWidth: 620 }}>We'd love to hear from you — whether it's a question, feedback or a partnership opportunity.</p>
        </div>
      </section>

      <section className="container container-editorial px-3 px-lg-4 py-5 py-lg-6">
        <div className="row g-4 mb-5">
          {infos.map(info => (
            <div key={info.title} className="col-6 col-lg-3">
              <div className="h-100 p-4" style={{ background: "#fff", border: "1px solid var(--ub-border)" }}>
                <i className={`bi bi-${info.icon}`} style={{ fontSize: 24, color: "var(--ub-terracotta)" }}></i>
                <div className="eyebrow mt-3">{info.title}</div>
                {info.lines.map(l => <div key={l} style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", marginTop: 4 }}>{l}</div>)}
              </div>
            </div>
          ))}
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <span className="eyebrow">Say hello</span>
            <h2 className="section-title mt-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Let's start a <span className="em">conversation</span></h2>
            <p className="text-muted-2 mt-3">We respond to every enquiry within one business day. Whether you're curious about a product, want to collaborate, or just want to chat organic — write to us.</p>
            <div className="mt-4 d-flex gap-2">
              {["facebook", "instagram", "twitter-x", "youtube"].map(s => (
                <a key={s} href="#" className="social-btn" style={{ borderColor: "var(--ub-border)", color: "var(--ub-dark)" }}><i className={`bi bi-${s}`}></i></a>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <form className="p-4 p-lg-5" onSubmit={submit} style={{ background: "#fff", border: "1px solid var(--ub-border)" }}>
              <div className="row g-3">
                {[["name", "Your Name*", "text"], ["email", "Your Email*", "email"], ["phone", "Your Phone*", "tel"], ["subject", "Your Subject*", "text"]].map(([k, l, t]) => (
                  <div key={k} className="col-md-6">
                    <label className="eyebrow d-block mb-2">{l}</label>
                    <input required type={t} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} className="form-control" />
                  </div>
                ))}
                <div className="col-12">
                  <label className="eyebrow d-block mb-2">Your Message</label>
                  <textarea rows={5} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} className="form-control" />
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-4">Send Message <i className="bi bi-arrow-right ms-2"></i></button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

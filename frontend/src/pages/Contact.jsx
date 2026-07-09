import React, { useState } from "react";
import { useToast } from "../context/ToastContext";

const infos = [
  { icon: "telephone-fill", title: "Phone", lines: ["+91 9311223026", "+91 7303700961"] },
  { icon: "envelope-fill", title: "Email", lines: ["info@ubmarts.com"] },
  { icon: "geo-alt-fill", title: "Office", lines: ["Corporate Office", "New Delhi, India"] },
  { icon: "clock-fill", title: "Business Hours", lines: ["Mon–Sat: 9:30 AM – 6:30 PM", "Sunday – Closed"] },
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
      <section className="page-header">
        <div className="crumb">Home / Contact Us</div>
        <h1>Get in <span className="italic" style={{ color: "var(--ub-green-mid)" }}>Touch</span></h1>
        <p className="text-muted-2 mx-auto mt-3" style={{ maxWidth: 600 }}>We'd love to hear from you — whether it's a question, feedback or a partnership opportunity.</p>
      </section>

      <section className="container-xxl px-4 px-lg-5 py-5 py-lg-6 mx-auto">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {infos.map(info => (
                <div key={info.title} className="bg-white rounded-4xl p-3 d-flex gap-3" style={{ border: "1px solid var(--ub-border)" }}>
                  <div className="feat-icon" style={{ minWidth: 56 }}><i className={`bi bi-${info.icon}`}></i></div>
                  <div>
                    <div className="eyebrow" style={{ letterSpacing: ".25em" }}>{info.title}</div>
                    {info.lines.map(l => <div key={l} className="font-serif h6 mb-0">{l}</div>)}
                  </div>
                </div>
              ))}
              <div className="bg-dark-organic text-white rounded-4xl p-3">
                <div className="font-serif h6 mb-2">Follow us</div>
                <div className="d-flex gap-2">
                  {["facebook", "instagram", "twitter-x", "youtube"].map(s => (
                    <a key={s} href="#" className="social-btn"><i className={`bi bi-${s}`}></i></a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <form className="bg-white rounded-5xl p-4 p-md-5" onSubmit={submit} style={{ border: "1px solid var(--ub-border)" }}>
              <h2 className="section-title" style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)" }}>Send us a <span className="italic">message</span></h2>
              <p className="text-muted-2 small">We respond within one business day.</p>
              <div className="row g-3 mt-2">
                {[["name", "Your Name*", "text"], ["email", "Your Email*", "email"], ["phone", "Your Phone*", "tel"], ["subject", "Your Subject*", "text"]].map(([k, l, t]) => (
                  <div key={k} className="col-md-6">
                    <label className="eyebrow d-block mb-1">{l}</label>
                    <input required type={t} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} className="form-control rounded-3" style={{ background: "var(--ub-cream)" }} />
                  </div>
                ))}
                <div className="col-12">
                  <label className="eyebrow d-block mb-1">Your Message</label>
                  <textarea rows={5} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} className="form-control rounded-3" style={{ background: "var(--ub-cream)" }} />
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-3">Send Message <i className="bi bi-send ms-1"></i></button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

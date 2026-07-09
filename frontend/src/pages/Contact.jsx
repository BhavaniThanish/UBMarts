import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useToast } from "../hooks/use-toast";

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
      <section className="relative bg-gradient-to-br from-[#f5f0e6] via-[#faf7f2] to-[#e8f0d8] overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-circle bg-[#a3c86d]/20 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 md:py-24 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[#4a7c2a] mb-4">Home / Contact Us</div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#1f2a1a]">Get in <span className="italic text-[#4a7c2a]">Touch</span></h1>
          <p className="mt-6 text-[#3a4530] max-w-2xl mx-auto">We'd love to hear from you — whether it's a question, feedback or a partnership opportunity.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-[1fr_1.3fr] gap-10">
        <div className="space-y-4">
          {[
            { Icon: Phone, title: "Phone", lines: ["+91 9311223026", "+91 7303700961"] },
            { Icon: Mail, title: "Email", lines: ["info@ubmarts.com"] },
            { Icon: MapPin, title: "Office", lines: ["Corporate Office", "New Delhi, India"] },
            { Icon: Clock, title: "Business Hours", lines: ["Mon–Sat: 9:30 AM – 6:30 PM", "Sunday – Closed"] },
          ].map(({ Icon, title, lines }, i) => (
            <div key={i} className="bg-white rounded-2xl border border-[#eae5d8] p-6 d-flex gap-4 hover:border-[#2e7d32] transition">
              <div className="w-12 h-12 rounded-circle bg-[#f5f0e6] d-flex align-items-center justify-content-center flex-shrink-0"><Icon size={20} className="text-[#2e7d32]" /></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#6b7360]">{title}</p>
                {lines.map((l, k) => <p key={k} className="font-serif text-lg text-[#1f2a1a]">{l}</p>)}
              </div>
            </div>
          ))}
          <div className="bg-[#1f2a1a] text-white rounded-2xl p-6">
            <p className="font-serif text-lg mb-3">Follow us</p>
            <div className="d-flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-circle bg-white/10 hover:bg-[#4a7c2a] d-flex align-items-center justify-content-center transition"><Ic size={16} /></a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white rounded-[32px] p-8 md:p-10 border border-[#eae5d8]">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1f2a1a]">Send us a <span className="italic text-[#4a7c2a]">message</span></h2>
          <p className="mt-2 text-[#6b7360] text-sm">We respond within one business day.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[["name","Your Name*","text"],["email","Your Email*","email"],["phone","Your Phone*","tel"],["subject","Your Subject*","text"]].map(([k,l,t]) => (
              <div key={k}>
                <label className="text-xs text-[#6b7360] uppercase tracking-widest">{l}</label>
                <input required value={f[k]} onChange={e => setF({...f, [k]: e.target.value})} type={t} className="mt-1 w-100 px-4 py-3 rounded-xl border border-[#eae5d8] bg-[#faf7f2] focus:bg-white focus:border-[#2e7d32] focus:outline-none" />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="text-xs text-[#6b7360] uppercase tracking-widest">Your Message</label>
              <textarea rows={5} value={f.message} onChange={e => setF({...f, message: e.target.value})} className="mt-1 w-100 px-4 py-3 rounded-xl border border-[#eae5d8] bg-[#faf7f2] focus:bg-white focus:border-[#2e7d32] focus:outline-none resize-none" />
            </div>
          </div>
          <button className="mt-6 btn-primary w-100 justify-content-center">Send Message <Send size={16} /></button>
        </form>
      </section>
    </main>
  );
};

export default Contact;

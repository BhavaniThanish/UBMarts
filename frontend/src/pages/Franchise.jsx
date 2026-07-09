import React, { useState } from "react";
import { Award, TrendingUp, HandCoins, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const benefits = [
  { icon: Award, title: "Established Brand", text: "12+ years of trust, recognition and organic authority." },
  { icon: TrendingUp, title: "Proven Business Model", text: "Time-tested revenue systems and operational playbooks." },
  { icon: HandCoins, title: "Attractive ROI", text: "Healthy margins on 300+ premium organic SKUs." },
  { icon: Sparkles, title: "End-to-end Support", text: "Training, marketing, supply chain — we've got you." },
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1f2a1a] via-[#2e4a24] to-[#4a7c2a] text-white">
        <div className="grain-overlay" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-circle bg-[#a3c86d]/15 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 align-items-center">
          <div>
            <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#a3c86d] font-semibold mb-4"><Award size={14} /> Our Franchise</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">Grow with the <span className="italic text-[#a3c86d]">organic revolution</span></h1>
            <p className="mt-6 text-white/85 max-w-lg text-lg">Partner with UB Mart and own a piece of India's fastest growing organic movement. Established brand. Proven model. Total support.</p>
            <a href="#enquiry" className="btn-primary mt-8">Apply Now <ArrowRight size={16} /></a>
          </div>
          <div className="relative">
            <img src="https://images.pexels.com/photos/29039800/pexels-photo-29039800.jpeg?w=1000" alt="farm" className="rounded-[32px] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">Why partner with <span className="italic text-[#4a7c2a]">UB Mart</span></h2>
          <p className="mt-4 text-[#6b7360]">A partnership designed to help you thrive from day one.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => {
            const Ic = b.icon;
            return (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#eae5d8] hover:-translate-y-1 hover:shadow-xl transition group">
                <div className="w-14 h-14 rounded-2xl bg-[#f5f0e6] group-hover:bg-[#2e7d32] d-flex align-items-center justify-content-center mb-5 transition">
                  <Ic size={24} className="text-[#2e7d32] group-hover:text-white transition" />
                </div>
                <h3 className="font-serif text-2xl text-[#1f2a1a]">{b.title}</h3>
                <p className="mt-2 text-sm text-[#6b7360]">{b.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f5f0e6]">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 align-items-center">
          <div>
            <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4">How it Works</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">Five steps to <span className="italic text-[#4a7c2a]">ownership</span></h2>
            <ol className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <li key={i} className="d-flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-circle bg-[#2e7d32] text-white font-serif text-lg d-flex align-items-center justify-content-center">{i+1}</span>
                  <div className="pt-1.5">
                    <p className="text-[#1f2a1a] font-medium">{s}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="img-reveal rounded-[32px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=1000" alt="farm" className="w-100 h-[540px] object-cover" />
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <div className="inline-flex align-items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#4a7c2a] font-semibold mb-4">Franchise Enquiry</div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1f2a1a]">Ready to <span className="italic text-[#4a7c2a]">start?</span></h2>
            <p className="mt-4 text-[#3a4530]">Fill in the details and our franchise team will reach out within 48 hours to guide you through the next steps.</p>
            <ul className="mt-6 space-y-3 text-sm text-[#3a4530]">
              {["Zero royalty for the first 6 months","Complete on-site training","Dedicated relationship manager","Marketing kit worth ₹1,00,000"].map((t, i) => (
                <li key={i} className="d-flex gap-3"><CheckCircle2 size={18} className="text-[#2e7d32] flex-shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <form onSubmit={submit} className="bg-white rounded-[32px] p-8 md:p-10 border border-[#eae5d8] grid sm:grid-cols-2 gap-4">
            {[["name","Full Name*","text"],["email","Email*","email"],["phone","Phone*","tel"],["city","City*","text"]].map(([k,l,t]) => (
              <div key={k}>
                <label className="text-xs text-[#6b7360] uppercase tracking-widest">{l}</label>
                <input required value={f[k]} onChange={e => setF({...f, [k]: e.target.value})} type={t} className="mt-1 w-100 px-4 py-3 rounded-xl border border-[#eae5d8] bg-[#faf7f2] focus:bg-white focus:border-[#2e7d32] focus:outline-none" />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="text-xs text-[#6b7360] uppercase tracking-widest">Investment Range</label>
              <select value={f.investment} onChange={e => setF({...f, investment: e.target.value})} className="mt-1 w-100 px-4 py-3 rounded-xl border border-[#eae5d8] bg-[#faf7f2] focus:bg-white focus:border-[#2e7d32] focus:outline-none">
                <option value="">Select budget</option>
                <option>₹15L - ₹25L</option>
                <option>₹25L - ₹50L</option>
                <option>₹50L+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-[#6b7360] uppercase tracking-widest">Message</label>
              <textarea rows={4} value={f.message} onChange={e => setF({...f, message: e.target.value})} className="mt-1 w-100 px-4 py-3 rounded-xl border border-[#eae5d8] bg-[#faf7f2] focus:bg-white focus:border-[#2e7d32] focus:outline-none resize-none" />
            </div>
            <button className="sm:col-span-2 btn-primary justify-content-center">Submit Enquiry <ArrowRight size={16} /></button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Franchise;

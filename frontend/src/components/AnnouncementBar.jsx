import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative bg-[#1f2a1a] text-[#f5f0e6] text-xs md:text-sm overflow-hidden">
      <div className="marquee-track py-2.5">
        {[0,1].map(k => (
          <div key={k} className="flex items-center gap-10 pr-10 whitespace-nowrap">
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#a3c86d]" /> <b>10% OFF</b> use code <span className="px-2 py-0.5 rounded bg-[#4a7c2a] text-white font-mono">PORTO10</span></span>
            <span>Free next-day delivery on orders over &#8377;499</span>
            <span>Farm-fresh organic, delivered to your door</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-[#a3c86d]" /> 300+ products • 13 states • 12+ years of trust</span>
          </div>
        ))}
      </div>
      <button onClick={() => setVisible(false)} aria-label="close" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded">
        <X size={14} />
      </button>
    </div>
  );
};

export default AnnouncementBar;

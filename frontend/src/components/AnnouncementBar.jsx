import React, { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="announce-bar">
      <div className="marquee-track">
        {[0, 1].map(k => (
          <div key={k}>
            <span><i className="bi bi-stars text-warning me-1"></i><b>10% OFF</b> use code <span className="code-badge">PORTO10</span></span>
            <span>Free next-day delivery on orders over &#8377;499</span>
            <span>Farm-fresh organic, delivered to your door</span>
            <span><i className="bi bi-stars text-warning me-1"></i>300+ products • 13 states • 12+ years of trust</span>
          </div>
        ))}
      </div>
      <button onClick={() => setVisible(false)} aria-label="close" className="btn btn-sm text-white position-absolute" style={{ right: 8, top: 4, background: "transparent", border: 0 }}>
        <i className="bi bi-x-lg small"></i>
      </button>
    </div>
  );
};

export default AnnouncementBar;

import React, { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="announce-bar">
      <div className="track">
        {[0, 1].map(k => (
          <div key={k}>
            <span><b>10% OFF</b> — use code <span className="code">PORTO10</span></span>
            <span className="dot" />
            <span>Free next-day delivery on orders over &#8377;499</span>
            <span className="dot" />
            <span>Farm-fresh organic, delivered to your door</span>
            <span className="dot" />
            <span>300+ products • 13 states • 12+ years of trust</span>
            <span className="dot" />
          </div>
        ))}
      </div>
      <button onClick={() => setVisible(false)} aria-label="close" className="btn btn-sm position-absolute text-white" style={{ right: 8, top: 4, background: "transparent", border: 0 }}>
        <i className="bi bi-x-lg small"></i>
      </button>
    </div>
  );
};

export default AnnouncementBar;

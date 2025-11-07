import React from "react";
export default function Bouquet(){ 
  return (
    <div>
      <div className="hero">
        <h1>🌺 Bouquet</h1>
        <p>Scopri i nostri bouquet artigianali, romantici e su misura.</p>
      </div>
      <div className="card" style={maxWidth:980, margin:'0 auto'}>
        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60" alt="Bouquet" />
        <div className="body">
          <div className="subtitle">Pagina in costruzione — presto online lo shop completo.</div>
        </div>
      </div>
    </div>
  ); 
}
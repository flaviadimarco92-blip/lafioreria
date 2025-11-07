import React from "react";
import { Link } from "react-router-dom";

const cards = [
  { href: "/bouquet", title: "Bouquet", subtitle: "Composizioni romantiche e su misura", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60" },
  { href: "/piante", title: "Piante", subtitle: "Verde d’arredo e idee regalo", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60" },
  { href: "/composizioni", title: "Composizioni", subtitle: "Centrotavola ed eventi speciali", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=60" },
  { href: "/regali", title: "Regali", subtitle: "Piccoli pensieri che stupiscono", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60" }
];

export default function Home(){
  return (
    <div>
      <section className="hero">
        <h1>🌸 La Fioreria</h1>
        <p>Benvenuti nel nostro shop online — spediamo in tutta Italia con cura e imballi protetti.</p>
      </section>
      <section className="grid">
        {cards.map((c)=> (
          <Link key={c.href} to={c.href} className="card">
            <img src={c.img} alt={c.title} />
            <div className="body">
              <div className="title">{c.title}</div>
              <div className="subtitle">{c.subtitle}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

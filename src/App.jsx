import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home.jsx";
import Bouquet from "./pages/Bouquet.jsx";
import Piante from "./pages/Piante.jsx";
import Composizioni from "./pages/Composizioni.jsx";
import Regali from "./pages/Regali.jsx";
import logoUrl from "./assets/logo.png";

const Page = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
    {children}
  </motion.div>
);

export default function App(){
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <Link to="/" style={{display:'inline-flex', alignItems:'center', gap:10, textDecoration:'none'}}>
            <img src={logoUrl} alt="La Fioreria" />
          </Link>
        </div>
      </header>
      <main className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/bouquet" element={<Page><Bouquet /></Page>} />
            <Route path="/piante" element={<Page><Piante /></Page>} />
            <Route path="/composizioni" element={<Page><Composizioni /></Page>} />
            <Route path="/regali" element={<Page><Regali /></Page>} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="footer">
        <div className="footer-inner">© La Fioreria – Consegne in tutta Italia</div>
      </footer>
    </div>
  );
}

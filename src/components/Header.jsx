import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span>VITTA Contábil</span>
          <span className="dot">.</span>
        </div>

        {/* Menu desktop */}
        <nav className="menu">
          <a href="#">Serviços▾</a>
          <a href="#planos">Planos▾</a>
          <a href="#contato">Contatos▾</a>
          <a href="#sobre">Sobre▾</a>
        </nav>

        {/* Ações */}
        <div className="actions">
          <a
              href="https://wa.me/5549998249058" 
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
            Entre em contato
        </a>

          {/* Botão mobile */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <button
            className="close"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <a href="#">Serviços</a>
          <a href="#planos">Planos▾</a>
          <a href="#contato">Contatos▾</a>
          <a href="#sobre">Sobre</a>

          <a
            href="https://wa.me/5549998249058" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta mobile-cta"
          >
            Entre em contato
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;

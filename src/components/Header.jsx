import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span>Contabilizei</span>
          <span className="dot">.</span>
        </div>

        {/* Menu desktop */}
        <nav className="menu">
          <a href="#">Serviços ▾</a>
          <a href="#">Nossa História ▾</a>
          <a href="#">Conteúdos ▾</a>
          <a href="#">Como funciona ▾</a>
        </nav>

        {/* Ações */}
        <div className="actions">
          <button className="cta"> Entre em contato</button>

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
        <div className="mobile-menu">
          <button
            className="close"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <a href="#">Serviços</a>
          <a href="#">Nossa Historia</a>
          <a href="#">Conteúdos</a>
          <a href="#">Como funciona</a>

          <button className="cta mobile-cta">
            Entre em contato
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

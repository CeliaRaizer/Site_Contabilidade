import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ IMPORT CORRETO AQUI EM CIMA
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
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços▾</Link>
          <Link to="/planos">Planos▾</Link>
          <Link to="/contato">Contatos▾</Link>
          <Link to="/sobre">Sobre▾</Link>
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

          <Link to="/servicos" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/planos" onClick={() => setMenuOpen(false)}>Planos</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)}>Contatos</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>

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
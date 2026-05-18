import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="header-container">
          <Link to="/" className="logo" onClick={close}>
            VITTA Contábil<span className="dot">.</span>
          </Link>

          <nav className="menu">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/contato">Contato</Link>
          </nav>

          <div className="actions">
            <a
              href="https://wa.me/5549998249058"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Entre em Contato
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-top">
            <Link to="/" className="logo" onClick={close}>
              VITTA Contábil<span className="dot">.</span>
            </Link>
            <button className="mobile-close" onClick={close}>✕</button>
          </div>
          <nav>
            <Link to="/hero" onClick={close}>Início</Link>
            <Link to="/sobre" onClick={close}>Sobre</Link>
            <Link to="/planos" onClick={close}>Planos</Link>
            <Link to="/contato" onClick={close}>Contato</Link>
          </nav>
          <a
            href="https://wa.me/5549998249058"
            target="_blank"
            rel="noopener noreferrer"
            className="cta mobile-cta"
            onClick={close}
          >
            Entre em Contato
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
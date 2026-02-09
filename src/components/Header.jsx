import "./Header.css";

//topo do site (logo, menu de navegação, botão de contato)
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span>VITTA Contábil</span>
          <span className="dot">.</span>
        </div>

        {/* Menu */}
        <nav className="menu">
          <a href="#">Serviços ▾</a>
          <a href="#">Nossa História▾</a>
          <a href="#">Conteúdos ▾</a>
          <a href="#">Como funciona▾</a>
        </nav>

        {/* Ações */}
        <div className="actions">
          <button className="cta">Entre em Contato</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

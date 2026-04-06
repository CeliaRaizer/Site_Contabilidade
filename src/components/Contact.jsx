import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-card">
        <h1>Entre em Contato</h1>
        <p>Fale com a VITTA Contábil pelos canais abaixo</p>

        <div className="contact-buttons">
          <a 
            href="https://wa.me/5549998249058"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            WhatsApp
          </a>

          <a 
            href="https://www.instagram.com/vitta.contabil"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Instagram Vitta
          </a>

          <a 
            href="https://www.instagram.com/contadora.elainefae"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Instagram Elaine
          </a>
        </div>
      </div>

      {/* ÍCONES FLUTUANTES */}
      <div className="floating-icons">
        <a 
          href="https://www.instagram.com/vitta.contabil"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn insta-btn"
        >
          <FaInstagram />
        </a>

        <a 
          href="https://wa.me/5549998249058"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
        >
          <FaWhatsapp />
        </a>
      </div>

    </div>
  );
}

export default Contact;
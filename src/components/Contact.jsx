import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">

        <span className="contact-tag">Fale conosco</span>
        <h1>Entre em Contato</h1>
        <p>Escolha o canal de sua preferência e fale com a Elaine agora mesmo.</p>

        <div className="contact-channels">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5549998249058"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-btn"
          >
            <div className="channel-icon whatsapp">💬</div>
            <div className="channel-info">
              <div className="channel-label">WhatsApp</div>
              <div className="channel-value">+55 (49) 9 9824-9058</div>
            </div>
            <span className="channel-arrow">→</span>
          </a>

          {/* Instagram VITTA */}
          <a
            href="https://www.instagram.com/vitta.contabil"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-btn"
          >
            <div className="channel-icon instagram">📸</div>
            <div className="channel-info">
              <div className="channel-label">Instagram — Escritório</div>
              <div className="channel-value">@vitta.contabil</div>
            </div>
            <span className="channel-arrow">→</span>
          </a>

          {/* Instagram Elaine */}
          <a
            href="https://www.instagram.com/contadora.elainefae"
            target="_blank"
            rel="noopener noreferrer"
            className="channel-btn"
          >
            <div className="channel-icon instagram2">✨</div>
            <div className="channel-info">
              <div className="channel-label">Instagram — Contadora</div>
              <div className="channel-value">@contadora.elainefae</div>
            </div>
            <span className="channel-arrow">→</span>
          </a>

        </div>

        <div className="contact-card-footer">
          <p>Atendimento <strong>seg–sex, das 8h às 17h30</strong>.<br />Respondemos todas as mensagens.</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;
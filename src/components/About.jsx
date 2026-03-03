import "./About.css";
import fotoElaine from "../assets/1283_0132_Daniela Vieceli.jpg";

function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">

        <div className="about-text">
          <span className="about-tag">Contadora Elaine fae</span>

          <h2>Prazer, eu sou Elaine Faé </h2>

          <p>
            Sou contadora especializada em <strong>Imposto de Renda, MEI e pequenas empresas</strong>. 
            Meu objetivo é ajudar pessoas e negócios a manterem suas finanças organizadas, 
            pagarem menos impostos dentro da lei e evitarem problemas com o fisco.
          </p>

          <p>
            Aqui você encontra orientação clara, atendimento humanizado e soluções práticas 
            para simplificar sua vida financeira.
          </p>

          <a
            href="https://wa.me/5549998249058"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Falar comigo no WhatsApp
          </a>
        </div>

        <div className="about-image">
          <img src={fotoElaine} alt="Contadora Elaine Faé" />
        </div>

      </div>
    </section>
  );
}

export default About;
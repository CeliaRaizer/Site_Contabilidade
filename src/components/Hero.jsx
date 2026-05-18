import heroImage from "../assets/hero.jpg";
import "./Hero.css";

const WHATSAPP = "5549998249058";

const abrirWhatsApp = (msg) => {
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">Contabilidade Digital</div>

        <h1>
          Contabilidade descomplicada<br />
          para quem quer <em>crescer de verdade</em>
        </h1>

        <p>
          Cuidamos do seu MEI ou empresa enquanto você foca
          no que realmente importa: faturar.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-hero-primary"
            onClick={() =>
              abrirWhatsApp(
                "Olá!\n\nGostaria de abrir minha empresa com a VITTA Contábil.\nPoderia me explicar os próximos passos?"
              )
            }
          >
            Abrir Empresa →
          </button>
          <button
            className="btn-hero-secondary"
            onClick={() =>
              abrirWhatsApp(
                "Olá!\n\nTenho interesse em trocar de contador e migrar para a VITTA Contábil.\nVocês podem me orientar sobre os próximos passos?"
              )
            }
          >
            Trocar de Contador
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
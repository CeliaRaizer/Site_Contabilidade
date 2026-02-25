import heroImage from "../assets/hero.jpg";
import "./Hero.css";

const abrirEmpresaWhatsApp = () => {
  const numero = "5549998249058";

  const mensagem = `Olá!

Gostaria de abrir minha empresa com a VITTA Contábil.
Poderia me explicar os próximos passos?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
};

const trocarContador = () => {
  const numero = "5549998249058";

  const mensagem = `Olá!

Tenho interesse em trocar de contador e gostaria de migrar para a VITTA Contábil.
Vocês podem me orientar sobre os próximos passos?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
};

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          Contabilidade Descomplicada para quem quer crescer de verdade
          <br />
        </h1>

        <p>
          Cuidamos do seu MEI ou empresa do Simples <br></br> 
          enquanto você foca no 
          que realmente importa: FATURAR!        
        </p>

        <div className="buttons">
          <button 
            className="primary"
            onClick={abrirEmpresaWhatsApp}
          >
            Abrir Empresa
          </button>
           <button 
            className="primary"
            onClick={trocarContador}
          >
            Trocar de Contador
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

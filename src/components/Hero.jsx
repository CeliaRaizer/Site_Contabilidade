import heroImage from "../assets/hero.jpg";
import "./Hero.css";


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
          <button className="primary">Abrir Empresa</button>
          <button className="primary">Trocar de Contador</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

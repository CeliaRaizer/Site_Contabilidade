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
          Cuidamos do seu MEI ou empresa do Simples enquanto você foca no 
          que realmente importa: faturar.        
        </p>

        <div className="buttons">
          <button className="primary">Abrir Empresa</button>
          <button className="secondary">Trocar de Contador</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

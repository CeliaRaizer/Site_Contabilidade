import "./Services.css";

function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">

        <h2>Nossos Serviços</h2>
        <p className="services-subtitle">
          Soluções completas para sua empresa e sua vida financeira.
        </p>

        <div className="services-grid">

          {/* ABERTURA */}
          <div className="service-card">
            <h3>Abertura e Formalização</h3>
            <ul>
              <li>Abertura de MEI e ME</li>
              <li>Regularização na Prefeitura</li>
              <li>Desenquadramento do MEI</li>
              <li>Alterações e baixa de CNPJ</li>
            </ul>
          </div>

          {/* CONTABILIDADE */}
          <div className="service-card">
            <h3>Contabilidade e Acompanhamento</h3>
            <ul>
              <li>Contabilidade mensal obrigatória (ME)</li>
              <li>Acompanhamento mensal para MEI</li>
              <li>Gestão de funcionários</li>
              <li>Emissão de guias e obrigações fiscais</li>
            </ul>
          </div>

          {/* REGULARIZAÇÃO */}
          <div className="service-card">
            <h3>Regularizações e Pendências</h3>
            <ul>
              <li>Regularização de débitos</li>
              <li>Parcelamentos</li>
              <li>Regularização na Prefeitura</li>
              <li>Declarações em atraso</li>
            </ul>
          </div>

          {/* PESSOA FÍSICA */}
          <div className="service-card">
            <h3>Autônomos e Pessoa Física</h3>
            <ul>
              <li>Carnê-Leão mensal</li>
              <li>Livro Caixa para reduzir imposto</li>
              <li>Emissão de guia de INSS</li>
              <li>Imposto de Renda Pessoa Física</li>
              <li>Gestão de domésticos</li>
            </ul>
          </div>

          {/* PLANEJAMENTO */}
          <div className="service-card">
            <h3>Planejamento e Consultoria</h3>
            <ul>
              <li>Planejamento tributário</li>
              <li>Consultoria financeira</li>
              <li>Estratégias para pagar menos imposto dentro da lei</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;
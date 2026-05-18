import "./Services.css";

const services = [
  {
    icon: "🏢",
    title: "Abertura e Formalização",
    items: [
      "Abertura de MEI e ME",
      "Regularização na Prefeitura",
      "Desenquadramento do MEI",
      "Alterações e baixa de CNPJ",
    ],
  },
  {
    icon: "📊",
    title: "Contabilidade e Acompanhamento",
    items: [
      "Contabilidade mensal obrigatória (ME)",
      "Acompanhamento mensal para MEI",
      "Gestão de funcionários",
      "Emissão de guias e obrigações fiscais",
    ],
  },
  {
    icon: "⚖️",
    title: "Regularizações e Pendências",
    items: [
      "Regularização de débitos",
      "Parcelamentos",
      "Regularização na Prefeitura",
      "Declarações em atraso",
    ],
  },
  {
    icon: "👤",
    title: "Autônomos e Pessoa Física",
    items: [
      "Carnê-Leão mensal",
      "Livro Caixa para reduzir imposto",
      "Emissão de guia de INSS",
      "Imposto de Renda Pessoa Física",
      "Gestão de domésticos",
    ],
  },
  {
    icon: "💡",
    title: "Planejamento e Consultoria",
    items: [
      "Planejamento tributário",
      "Consultoria financeira",
      "Estratégias para pagar menos imposto dentro da lei",
    ],
  },
];

function Services() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">

        <div className="services-header">
          <span className="services-tag">Nossos serviços</span>
          <h2>Tudo que o seu negócio precisa</h2>
          <p className="services-subtitle">
            Soluções completas para sua empresa e sua vida financeira,
            do MEI à empresa consolidada.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
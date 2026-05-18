import "./Plans.css";

const WHATSAPP = "5549998249058";

const enviarWhatsApp = (plano) => {
  const msg = `Olá!\nTenho interesse no plano ${plano} da VITTA Contábil.\nPoderia me passar mais informações?`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
};

function PlanCard({ name, subtitle, price, period, installments, features, featured, destaque, badge }) {
  const cls = ["plan-card", featured && "featured", destaque && "destaque-maior"]
    .filter(Boolean).join(" ");

  return (
    <div className={cls}>
      {badge && <div className="plan-badge">{badge}</div>}
      <div className="plan-name">{name}</div>
      <p className="plan-subtitle">{subtitle}</p>

      <div className="plan-price-row">
        <span className="plan-currency">R$</span>
        <span className="plan-price">{price}</span>
      </div>
      <p className="plan-period">/mês</p>
      {installments && <p className="plan-installments">{installments}</p>}

      <hr className="plan-divider" />

      <ul className="plan-features">
        {features.map((f) => (
          <li key={f}><span className="feat-check">✓</span>{f}</li>
        ))}
      </ul>

      <button className="plan-btn" onClick={() => enviarWhatsApp(name)}>
        Quero esse plano
      </button>
    </div>
  );
}

function Plans() {
  return (
    <section className="plans" id="planos">
      <div className="plans-inner">

        {/* CABEÇALHO */}
        <div className="plans-header">
          <span className="plans-tag">Planos e preços</span>
          <h1>Transparência que você merece</h1>
          <p>Sem letras miúdas, sem surpresas. Escolha o plano ideal para o seu momento.</p>
        </div>

        {/* ── MEI ── */}
        <div className="plans-block">
          <div className="plans-block-title">
            <h2>Contabilidade Digital para <span>MEIs</span></h2>
            <div className="plans-block-line" />
          </div>
          <div className="plans-container">
            <PlanCard
              name="Classic"
              subtitle="Ideal para quem não possui funcionários e precisa do essencial."
              price="50"
              period="/mês"
              installments="No plano anual em 12x no cartão de crédito"
              features={[
                "Abertura da empresa no MEI sem custos",
                "Atendimento humanizado via WhatsApp",
                "Envio de declarações e impostos",
                "Monitoramento de pendências federais",
                "Suporte via WhatsApp das 8h às 17h30",
              ]}
            />
            <PlanCard
              name="Premium"
              subtitle="Para quem tem funcionários e precisa de suporte completo."
              price="100"
              period="/mês"
              installments="No plano anual em 12x no cartão de crédito"
              badge="Mais completo"
              featured
              features={[
                "Abertura da empresa no MEI sem custos",
                "Atendimento humanizado via WhatsApp",
                "Envio de declarações e impostos",
                "Monitoramento de pendências federais",
                "Alteração de MEI",
                "Emissor de Notas Fiscais ilimitado",
                "Folha de pagamento",
                "Suporte via WhatsApp das 8h às 17h30",
              ]}
            />
          </div>
        </div>

        {/* ── PRESTADORES DE SERVIÇO ── */}
        <div className="plans-block">
          <div className="plans-block-title">
            <h2>Contabilidade para <span>Prestadores de Serviço</span></h2>
            <div className="plans-block-line" />
          </div>
          <div className="plans-container">
            <PlanCard
              name="Essencial"
              subtitle="Ideal para quem não possui funcionários e precisa do essencial."
              price="250"
              features={[
                "Escrituração contábil/fiscal/departamento pessoal",
                "Apuração dos impostos",
                "Envio de obrigações mensais",
                "Suporte via WhatsApp",
                "Orientações básicas fiscais",
              ]}
            />
            <PlanCard
              name="Gestão"
              subtitle="Para quem quer organização e acompanhamento mais próximo."
              price="350"
              badge="Mais popular"
              featured
              features={[
                "Tudo do Essencial",
                "Controle e orientação sobre pró-labore",
                "Relatórios básicos de faturamento",
                "Planejamento tributário simplificado",
                "Atendimento prioritário",
              ]}
            />
            <PlanCard
              name="Estratégico"
              subtitle="Para empresas com equipe ou que querem crescimento estruturado."
              price="490"
              destaque
              features={[
                "Tudo do Essencial",
                "Folha de pagamento (até 2 funcionários)",
                "Gestão de férias e rescisões",
                "Relatórios financeiros personalizados",
                "Reunião trimestral de alinhamento",
              ]}
            />
          </div>
        </div>

        {/* ── COMÉRCIO ── */}
        <div className="plans-block">
          <div className="plans-block-title">
            <h2>Contabilidade para <span>Comércio</span></h2>
            <div className="plans-block-line" />
          </div>
          <div className="plans-container">
            <PlanCard
              name="Essencial"
              subtitle="Ideal para pequenos comércios sem funcionários."
              price="300"
              features={[
                "Apuração de impostos",
                "Escrituração fiscal (NF-e de entrada e saída)",
                "Envio das obrigações mensais",
                "Orientação sobre emissão de notas",
                "Suporte via WhatsApp",
              ]}
            />
            <PlanCard
              name="Gestão"
              subtitle="Para comércios com funcionários ou maior volume de operação."
              price="490"
              badge="Mais popular"
              featured
              features={[
                "Tudo do Essencial",
                "Folha de pagamento (até 3 funcionários)",
                "Gestão de férias e rescisões",
                "Orientação sobre fiscal e contabilidade",
                "Relatório básico de faturamento",
                "Atendimento prioritário",
              ]}
            />
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#5a6472" }}>
          Diagnóstico gratuito incluso em todos os planos.
        </p>

      </div>
    </section>
  );
}

export default Plans;
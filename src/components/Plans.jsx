import "./Plans.css";

function Plans() {
  return (
    <section className="plans" id="planos">
        <h1>Consulte nossos planos:</h1>

        <h2>
            Contabilidade Digital para <span>MEIs</span>
        </h2>

        <div className="plans-container">

            {/* CLASSIC */}
            <div className="card">
                <div className="card-content">
                    <h3>Classic</h3>

                    <p className="subtitle">
                        Ideal para quem não possui funcionários e precisa do essencial.
                    </p>

                    <div className="price">
                    <span>R$</span>
                    <h1>50</h1>
                    <small>/mês</small> <br />
                    <p>No Plano Anual em 12x no Cartão de Crédito</p>
                    </div>

                    <ul className="benefits">
                    <li>Abertura da empresa no MEI sem custos</li>
                    <li>Atendimento humanizado via WhatsApp</li>
                    <li>Envio de declarações e impostos</li>
                    <li>Monitoramento de pendências federais</li>
                    <li>Suporte via Whatsapp das 8h às 17h30</li>
                    </ul>
                </div>

                <button>Quero esse Plano</button>
            </div>

            {/* PREMIUM */}
            <div className="card featured">
                {/*<div className="badge">Mais contratado</div>*/}

                <div className="card-content">
                    <h3>Premium</h3>

                    <p className="subtitle">
                        Para quem tem funcionários e precisa de suporte completo.
                    </p>

                    <div className="price">
                        <span>R$</span>
                        <h1>100</h1>
                        <small>/mês</small> <br />
                        <p>No Plano Anual em 12x no Cartão de Crédito</p>
                    </div>

                    <ul className="benefits">
                        <li>Abertura da empresa no MEI sem custos</li>
                        <li>Atendimento humanizado via WhatsApp</li>
                        <li>Envio de declarações e impostos</li>
                        <li>Monitoramento de pendências federais</li>
                        <li>Alteração de MEI</li>
                        <li>Emissor de Notas Fiscais ilimitado</li>
                        <li>Folha de pagamento</li>
                        <li>Suporte via Whatsapp das 8h às 17h30</li>
                    </ul>
                </div>

                    <button>Quero esse Plano</button>
            </div>

        </div>

        <h2>
            <br />
            Contabilidade para Prestadores de Serviço 
        </h2>

        <div className="plans-container">

            {/* Essencial */}
            <div className="card">
                <div className="card-content">
                    <h3>Essencial</h3>

                    <p className="subtitle">
                        Ideal para quem não possui funcionários e precisa do essencial.
                    </p>

                    <div className="price">
                        <span>R$</span>
                        <h1>250</h1>
                        <small>/mês</small> <br />
                    </div>

                    <ul className="benefits">
                        <li>Escrituração contábil/fiscal/departamento pessoal</li>
                        <li>Apuração dos impostos</li>
                        <li>Envio de obrigações mensais</li>
                        <li>Suporte via WhatsApp</li>
                        <li> Orientações básicas fiscais</li>
                    </ul>
                </div>

                <button>Quero esse Plano</button>
            </div>

            {/* Gestão */}
            <div className="card featured">
                {/*<div className="badge">Mais contratado</div>*/}

                <div className="card-content">
                    <h3>Gestão</h3>

                    <p className="subtitle">
                        Para quem quer organização e acompanhamento mais próximo
                    </p>

                    <div className="price">
                        <span>R$</span>
                        <h1>350</h1>
                        <small>/mês</small> <br />
                    </div>

                    <ul className="benefits">
                        <li>Tudo do Essencial</li>
                        <li>Controle e orientação sobre pró-labore</li>
                        <li>Relatórios básicos de faturamento</li>
                        <li>Planejamento tributário simplificado</li>
                        <li>Atendimento prioritário</li>
                    </ul>
                </div>

                    <button>Quero esse Plano</button>
            </div>

            {/* Estrategico */}
            <div className="card featured destaque-maior">
                {/*<div className="badge">Mais contratado</div>*/}

                <div className="card-content">
                    <h3>Estratégico</h3>

                    <p className="subtitle">
                        Para empresas com equipe ou que querem crescimento estruturado
                    </p>

                   <div className="price">
                        <span>R$</span>
                        <h1>490</h1>
                        <small>/mês</small>
                    </div>
                    <ul className="benefits">
                        <li>Tudo do Essencial</li>
                        <li>Folha de pagamento (até 2 funcionários)</li>
                        <li>Gestão de férias e rescisões</li>
                        <li>Relatórios financeiros personalizados</li>
                        <li>Reunião trimestral de alinhamento</li>
                    </ul>
                </div>

                <button>Quero esse Plano</button>
            </div>
        </div>
    
        <h2>
            <br />
            Contabilidade para Comércio 
        </h2>

        <div className="plans-container">

            {/* Essencial */}
            <div className="card">
                <div className="card-content">
                    <h3>Essencial</h3>

                    <p className="subtitle">
                        Ideal para pequenos comércios sem funcionários
                    </p>

                    <div className="price">
                    <span>R$</span>
                    <h1>300</h1>
                    <small>/mês</small> <br />
                    </div>

                    <ul className="benefits">
                    <li>Apuração do Impostos</li>
                    <li>Escrituração fiscal (NF-e de entrada e saída)</li>
                    <li>Envio das obrigações mensais</li>
                    <li>Orientação sobre emissão de notas</li>
                    <li>Suporte via WhatsApp</li>
                    </ul>
                </div>

                <button>Quero esse Plano</button>
            </div>

            {/* Gestão */}
            <div className="card featured">
                {/*<div className="badge">Mais contratado</div>*/}

                <div className="card-content">
                    <h3>Gestão</h3>

                    <p className="subtitle">
                        Para comércios com funcionários ou maior volume de operação
                    </p>

                    <div className="price">
                        <span>R$</span>
                        <h1>490</h1>
                        <small>/mês</small>
                    </div>

                    <ul className="benefits">
                        <li>Tudo do Essencial</li>
                        <li>Folha de pagamento (até 3 funcionários)</li>
                        <li>Gestão de férias e rescisões</li>
                        <li>Orientação sobre fiscal e contabilidade</li>
                        <li>Relatório básico de faturamento</li>
                        <li>Atendimento prioritário</li>
                    </ul>
                </div>

                    <button>Quero esse Plano</button>
            </div>

        </div>
    
    </section>
  );
}

export default Plans;

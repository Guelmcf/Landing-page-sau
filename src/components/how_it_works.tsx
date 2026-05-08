import "./how_it_works.css"

function HowItWorks() {
    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="hw-container" id="como-funciona">

            <h2 className="hw-titulo" data-reveal>Como Funciona</h2>
            <p className="hw-subtitulo" data-reveal data-reveal-delay="50">
                Em poucos passos sua empresa terá a melhor solução
                de alimentação do mercado.
            </p>

            <ol className="hw-steps" role="list" data-reveal data-reveal-delay="100">
                <li className="hw-step">
                    <div className="hw-step-symbol" aria-hidden="true">1</div>
                    <h3 className="hw-step-title">Contato Inicial</h3>
                    <p className="hw-step-desc">
                        Preencha o formulário ou fale diretamente com nosso consultor
                        para entender suas necessidades.
                    </p>
                </li>
                <li className="hw-step">
                    <div className="hw-step-symbol" aria-hidden="true">2</div>
                    <h3 className="hw-step-title">Proposta Personalizada</h3>
                    <p className="hw-step-desc">
                        Elaboramos uma proposta sob medida com cardápio, valores e
                        condições específicas para sua empresa.
                    </p>
                </li>
                <li className="hw-step">
                    <div className="hw-step-symbol" aria-hidden="true">3</div>
                    <h3 className="hw-step-title">Receba Diariamente</h3>
                    <p className="hw-step-desc">
                        Após aprovação, começamos as entregas pontuais no horário
                        e local definidos por você.
                    </p>
                </li>
                <li className="hw-step">
                    <div className="hw-step-symbol" aria-hidden="true">4</div>
                    <h3 className="hw-step-title">Gestão Contínua</h3>
                    <p className="hw-step-desc">
                        Acompanhamento permanente com ajustes de cardápio e suporte
                        dedicado sempre que precisar.
                    </p>
                </li>
            </ol>

            <div className="hw-call" data-reveal data-reveal-delay="200">
                <div className="hw-call-content">
                    <p className="hw-call-badge">⚡ Processo Ágil</p>
                    <p className="hw-call-text">
                        Comece a receber em até{' '}
                        <strong className="hw-call-highlight">48 horas</strong>
                    </p>
                </div>
                <button className="hw-call-cta" onClick={scrollToForm}>
                    Solicitar Agora
                </button>
            </div>

        </section>
    );
}

export default HowItWorks;

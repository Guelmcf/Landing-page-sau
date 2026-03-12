import "./how_it_works.css"

function HowItWorks() {
    return (
        <div className="how-it-works" id="como-funciona">
            <h1 className="titulo-how-it-works">Como Funciona</h1>
            <h3 className="subtitulo">Em poucos passos sua empresa tera a melhor solução de alimentação do mercado</h3>
            <div className="steps">
                <div className="step">
                    <div className="symbol">1</div>
                    <h2 className="step-title">Contato Inicial</h2>
                    <p className="step-description">Preencha o formulário ou fale diretamente com nosso consultor para entender suas necessidades.</p>
                </div>
                <div className="step">
                    <div className="symbol">2</div>
                    <h2 className="step-title">Proposta Personalizada</h2>
                    <p className="step-description">Elaboramos uma proposta sob medida com cardápio, valores e condições específicas para sua empresa.</p>
                </div>
                <div className="step">
                    <div className="symbol">3</div>
                    <h2 className="step-title">Receba diariamente</h2>
                    <p className="step-description">Após aprovação, começamos as entregas pontuais no horário e local definidos por você.</p>
                </div>
                <div className="step">
                    <div className="symbol">4</div>
                    <h2 className="step-title">Gestão Continua</h2>
                    <p className="step-description">Acompanhamento permanente com ajustes de cardápio e suporte dedicado sempre que precisar.</p>
                </div>
            </div>
            <div className="call">
                <h1 className="call-title">⚡ Processo Agil</h1>
                <p className="call-description">Começe a Receber em até <span className="call-span">48 Horas</span></p>
            </div>
        </div>
    )
}

export default HowItWorks;
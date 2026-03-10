import "./quem_somos.css"
import Pai from "../assets/images/Pai.jpeg"

function QuemSomos() {
    return (
        <>
            <div className="container-quem-somos">
                <h1 className="titulo-quem-somos">Quem Somos</h1>
                <div className="corpo-quem-somos">
                    <div className="conteudo-quem-somos">
                    <p>
                    Comandada pelo Chef William Mendes, nossa operação é especializada na produção de refeições empresariais com padrão profissional de qualidade, organização e consistência. Atendemos empresas que buscam soluções confiáveis para alimentação diária de equipes, com processos estruturados, ingredientes selecionados e foco em eficiência operacional. Nosso compromisso é entregar refeições equilibradas, saborosas e pontuais, contribuindo diretamente para o bem-estar e a produtividade no ambiente de trabalho.
                    </p>
                </div>
                <div className="foto-quem-somos">
                    <img src={Pai} alt="Pai" className="Chef" />
                </div>
                </div>

            </div>
        </>
    )
}
export default QuemSomos;
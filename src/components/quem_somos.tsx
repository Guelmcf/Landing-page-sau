import "./quem_somos.css"
import Pai from "../assets/images/Pai.webp"

function QuemSomos() {
    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="qs-container" id="quem-somos">

            <h2 className="qs-titulo" data-reveal>Quem Somos</h2>

            <div className="qs-corpo" data-reveal data-reveal-delay="100">

                <div className="qs-foto">
                    <img
                        src={Pai}
                        alt="Chef William Mendes, fundador da SAÚ Culinária"
                        className="qs-chef-img"
                        loading="lazy"
                        width={1179}
                        height={1178}
                    />
                </div>

                <div className="qs-conteudo">
                    <p className="qs-texto">
                        Comandada pelo Chef William Mendes, nossa operação é especializada
                        na produção de refeições empresariais com padrão profissional de
                        qualidade, organização e consistência.
                    </p>
                    <p className="qs-texto">
                        Atendemos empresas que buscam soluções confiáveis para a alimentação
                        diária de equipes — com processos estruturados, ingredientes
                        selecionados e foco em eficiência operacional.
                    </p>
                    <p className="qs-texto">
                        Nosso compromisso é entregar refeições equilibradas, saborosas e
                        pontuais, contribuindo diretamente para o bem-estar e a produtividade
                        no ambiente de trabalho.
                    </p>

                    <button className="qs-cta" onClick={scrollToForm}>
                        Solicitar Orçamento
                    </button>
                </div>

            </div>

        </section>
    );
}

export default QuemSomos;

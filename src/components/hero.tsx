import './hero.css'
import foto_prato from "../assets/images/foto_prato.avif"
import right_symbol from "../assets/images/right_symbol.png"

function Hero() {
    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="container-hero" id="home">

            <div className="wrapper-txt">
                <div className="hero-header">
                    <h1 className="hero-titulo">
                        Alimentação pra sua Empresa{' '}
                        <span className="hero-highlight">Sem Complicação</span>
                    </h1>
                    <p className="hero-subtitulo">
                        Fornecimento de marmitas para sua empresa.
                        Praticidade, qualidade e economia entregues diariamente até você.
                    </p>
                </div>

                <button className="btn-hero-cta" onClick={scrollToForm}>
                    Solicitar Orçamento
                </button>

                <div className="hero-divider" role="separator" />

                <ul className="stats" role="list">
                    <li className="stat-item">
                        <span className="stat-value">20+</span>
                        <span className="stat-label">Empresas parceiras</span>
                    </li>
                    <li className="stat-item">
                        <span className="stat-value">+10.000</span>
                        <span className="stat-label">Refeições entregues</span>
                    </li>
                    <li className="stat-item">
                        <span className="stat-value">90%</span>
                        <span className="stat-label">de satisfação</span>
                    </li>
                </ul>
            </div>

            <div className="wrapper-img">
                <div className="img-container">
                    <img
                        src={foto_prato}
                        alt="Marmita SAÚ Culinária"
                        className="fotoComida"
                    />
                    <div className="texto-da-foto">
                        <img
                            src={right_symbol}
                            alt=""
                            aria-hidden="true"
                            className="simbolo"
                        />
                        comida de verdade,<br />no seu tempo
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;

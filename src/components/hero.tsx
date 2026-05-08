import './hero.css'
import foto_prato from "../assets/images/foto_prato.avif"

function Hero() {
    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="container-hero" id="home">

            <div className="wrapper-txt" data-reveal>
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

            <div className="wrapper-img" data-reveal data-reveal-delay="150">
                <div className="img-container">
                    <img
                        src={foto_prato}
                        alt="Marmita SAÚ Culinária"
                        className="fotoComida"
                        fetchPriority="high"
                        width={600}
                        height={450}
                    />
                    <div className="texto-da-foto">
                        <svg
                            aria-hidden="true"
                            className="simbolo"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="12" fill="#000" />
                            <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        comida de verdade,<br />no seu tempo
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;

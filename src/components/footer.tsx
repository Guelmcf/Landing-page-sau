import './footer.css'
import logosau from '../assets/images/logosau.webp'

function Footer() {
    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className="ft-footer">

            <div className="ft-main" data-reveal>

                {/* MARCA */}
                <div className="ft-brand">
                    <a href="#home" className="ft-logo-link" aria-label="Ir para o início">
                        <div className="ft-logo-wrapper">
                            <img src={logosau} alt="SAÚ Culinária" className="ft-logo" loading="lazy" width={612} height={408} />
                        </div>
                    </a>
                    <p className="ft-tagline">
                        Alimentação empresarial de qualidade,
                        entregue diariamente em Belo Horizonte.
                    </p>
                </div>

                {/* NAVEGAÇÃO */}
                <div className="ft-col">
                    <p className="ft-col-title">Navegação</p>
                    <nav aria-label="Links do rodapé">
                        <ul className="ft-links">
                            <li><a href="#home"            className="ft-link">Home</a></li>
                            <li><a href="#como-funciona"   className="ft-link">Como Funciona</a></li>
                            <li><a href="#nossos-clientes" className="ft-link">Nossos Clientes</a></li>
                            <li><a href="#formulario"      className="ft-link">Solicitar Orçamento</a></li>
                        </ul>
                    </nav>
                </div>

                {/* CONTATO */}
                <div className="ft-col">
                    <p className="ft-col-title">Contato</p>
                    <ul className="ft-links">
                        <li>
                            <a
                                href="https://wa.me/5531992325030"
                                className="ft-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (31) 99232-5030
                            </a>
                        </li>
                        <li>
                            <a href="mailto:saurestaurante@gmail.com" className="ft-link">
                                saurestaurante@gmail.com
                            </a>
                        </li>
                        <li className="ft-location">Belo Horizonte, MG</li>
                    </ul>
                </div>

                {/* CTA BOX */}
                <div className="ft-cta-box">
                    <p className="ft-cta-title">Pronto para começar?</p>
                    <p className="ft-cta-desc">
                        Receba seu orçamento em até 24 horas
                    </p>
                    <button className="ft-cta-btn" onClick={scrollToForm}>
                        Solicitar Orçamento
                    </button>
                    <a
                        href="https://wa.me/5531992325030"
                        className="ft-cta-wpp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ou fale pelo WhatsApp →
                    </a>
                </div>

            </div>

            <div className="ft-divider" role="separator" />

            <div className="ft-bottom">
                <p className="ft-copyright">
                    © {new Date().getFullYear()} SAÚ Culinária. Todos os direitos reservados.
                </p>
                <p className="ft-dev">
                    Desenvolvido por{' '}
                    <a
                        href="https://instagram.com/guel_mcf"
                        className="ft-dev-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @guel_mcf
                    </a>
                </p>
            </div>

        </footer>
    );
}

export default Footer;

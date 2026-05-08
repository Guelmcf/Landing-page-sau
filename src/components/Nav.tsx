import { useState, useEffect } from "react";
import logosau from "../assets/images/logosau.png";
import "./Nav.css";

function Header() {
    const [menuOpen,  setMenuOpen]  = useState(false);
    const [scrolled,  setScrolled]  = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const closeMenu = () => setMenuOpen(false);

    const scrollToForm = () => {
        closeMenu();
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={scrolled ? 'header--scrolled' : undefined}>
            <a href="#home" className="logo-link" aria-label="Ir para o início">
                <img src={logosau} alt="SAÚ Culinária" className="logo" />
            </a>

            <nav
                className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}
                aria-label="Menu principal"
            >
                <ul className="menu" role="list">
                    <li>
                        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
                    </li>
                    <li>
                        <a href="#como-funciona" className="nav-link" onClick={closeMenu}>Como Funciona</a>
                    </li>
                    <li>
                        <a href="#nossos-clientes" className="nav-link" onClick={closeMenu}>Nossos Clientes</a>
                    </li>
                </ul>
            </nav>

            <div className="header-actions">
                <a
                    href="https://wa.me/5531992325030"
                    className="header-phone"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    (31) 99232-5030
                </a>
                <button className="btn-cta" onClick={scrollToForm}>
                    Solicitar orçamento
                </button>
            </div>

            <button
                className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}
            >
                <span />
                <span />
                <span />
            </button>
        </header>
    );
}

export default Header;

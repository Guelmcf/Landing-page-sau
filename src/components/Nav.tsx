import logosau from "../assets/images/logosau.png";
import "./Nav.css";

function Header() {
    return( 
        <header>
            <img src={logosau} alt="logo" className="logo"/>

            <ul className="menu">
                <li className="item-menu">
                    <a href="#home" className="item-menu-link">Home</a>
                </li>
                <li className="item-menu">
                    <a href="#como-funciona" className="item-menu-link">Como Funciona</a>
                </li>
                <li className="item-menu">
                    <a href="#nossos-clientes" className="item-menu-link">Nossos Clientes</a>
                </li>
            </ul>

            <div className="header-actions">
                <h3 className="botao-chamada">
                    <a id="tel"  href="https://wa.me/5531992325030" target="_blank" rel="noopener noreferrer" className="item-menu">(31) 99232-5030</a>
                    </h3>
                <button 
                    className="btn-header"
                    onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Solicitar orçamento
                </button>
            </div>

        </header>
    )
}

export default Header;
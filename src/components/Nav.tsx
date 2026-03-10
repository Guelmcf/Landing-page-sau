import logosau from "../assets/images/logosau.png";
import "./Nav.css";

function Header() {
    return( 
        <header>
            <img src={logosau} alt="logo" className="logo"/>

            <ul className="menu">
                <li className="item-menu">
                    <a id="home">Home</a>
                </li>
                <li className="item-menu">
                    <a id="quem-somos">Quem somos</a>
                </li>
                <li className="item-menu">
                    <a id="como-funciona">Como Funciona</a>
                </li>
                <li className="item-menu">
                    <a id="nossos-clientes">Nossos Clientes</a>
                </li>
            </ul>

            <div className="header-actions">
                <h3 className="botao-chamada">
                    <a id="tel" href="tel:31999999999" className="item-menu">(31) 99232-5030</a>
                    </h3>
                <button 
                    className="btn-header"
                    onClick={() => console.log("clicou")}
                >
                    Solicitar orçamento
                </button>
            </div>

        </header>
    )
}

export default Header;
import logosau from "../assets/images/logosau.png";
import "./Nav.css";

function Header() {
    return( 
        <header>
            <img src={logosau} alt="logo" className="logo"/>

            <ul className="menu">
                <li className="item-menu">Home</li>
                <li className="item-menu">Quem somos</li>
                <li className="item-menu">Como Funciona</li>
                <li className="item-menu">Nossos Clientes</li>
            </ul>

            <div className="header-actions">
                <h3 className="botao-chamada">(31) 99999-9999</h3>
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
import './hero.css'
import foto_prato from "../assets/images/foto_prato.avif"
import right_symbol from "../assets/images/right_symbol.png"

function Hero() {
    return(
            <div className="container-hero">
                <div className='wrapper-txt'>
                    <h1 className='titulo'>
                    Alimentação pra sua Empresa <br />  
                    <span className='complicado'>Sem Complicação</span>
                    </h1> 
                    <h3 className='subtitulo'>Fornecimento de marmitas pra sua empresa. <br />
                    Praticidade,qualidade e economia <br /> 
                    sendo entregues diariamente ate você</h3>
                <button className='btn-orçamento'>Pedir Orçamento</button>
                
                </div>
                    <div className='wrapper-img'>
                    <img src={foto_prato} alt="Foto do prato" className='fotoComida' />
                     <div className='texto-da-foto'>  
                    <img src={right_symbol} alt="Símbolo de verificação" className='simbolo' /> 
                    comida de verdade <br />
                    no seu tempo
                    </div>
                </div>
            </div>
    )
}

export default Hero;
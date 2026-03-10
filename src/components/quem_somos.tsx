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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dolorem consequatur id ab adipisci exercitationem soluta, <br />
                        iusto corporis reiciendis blanditiis? Officiis sequi et voluptatibus <br />
                        cum dolorem voluptas similique vitae dolores architecto? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dolorem consequatur id ab adipisci exercitationem soluta, <br />
                        iusto corporis reiciendis blanditiis? Officiis sequi et voluptatibus <br />
                        cum dolorem voluptas similique vitae dolores architecto? <br />
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
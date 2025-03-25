import Botao from "../Botao"
import "./banner.css"

const Banner = () => {
    return(
        <section className="banner">
            <div>
                <img src="/imagens/cooelpe.svg" alt="Logo coelpe"></img>
            </div>
            <div className="div-botoes">
                <Botao
                texto = "Quem somos"
                />
                <Botao
                texto = "Nossos objetivos"
                />

                <button>Teste</button>
            </div>
        </section>
    )
}

export default Banner
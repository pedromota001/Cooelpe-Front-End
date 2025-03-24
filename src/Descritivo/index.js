import Imagem from "../Imagem"
import "./Descritivo.css"

const Descritivo = (props) => {
    return(
        <section className= "section-descritivo" style={{backgroundColor:props.background}}>
            <h1>{props.title}</h1>
            <p>{props.text}</p> 
            {props.title === 'Nossos objetivos' ? 
                <div className="div-imagens">
                    <Imagem imagem = "/imagens/imagemSolar.svg"/>
                    <Imagem imagem = "/imagens/imagemSolar2.svg"/>
                </div>
            : ''} 
        </section>
        
    )
}

export default Descritivo
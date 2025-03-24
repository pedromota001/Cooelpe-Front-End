import "./Imagem.css"


const Imagem = (props) => {
    return(
        <div className="fundo-imagem">
            <img src={props.imagem} alt="Imagem Cooelpe"></img>
        </div>
    )
}


export default Imagem
import { Button } from "react-bootstrap"; 
import "./Cabecalho.css";
import Ancora from "../Ancora";

const Cabecalho = () => {
    return(
        <header className="cabecalho">
            <div>
                <img src="/imagens/cooelpe.svg" alt="Logo coelpe"></img>
            </div>
            <div className="botoes">
                <Button className="btn btn-light botao-personalizado">
                    <i className="bi bi-box-arrow-right"></i>
                </Button>
                <Ancora className="btn btn-light"
                    icone = 'ig'
                    url = 'https://www.instagram.com/'
                />
                <Ancora className="btn btn-light"
                    icone = 'celular'
                    url = 'https://chatgpt.com/'
                />
                <Ancora className="btn btn-light"
                    icone = 'email'
                    url = 'https://www.youtube.com/'
                />
            </div>
        </header>
    )
}

export default Cabecalho
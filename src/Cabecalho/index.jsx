import "./Cabecalho.css";
import Ancora from "../Ancora";
import BotaoLogin from "../BotaoLogin";

const Cabecalho = () => {
    return(
        <header className="cabecalho">
            <div>
                <img src="/imagens/cooelpe.svg" alt="Logo coelpe"></img>
            </div>
            <div className="botoes">
                <BotaoLogin/>
                <Ancora
                    icone = 'ig'
                    url = 'https://www.instagram.com/'
                />
                <Ancora
                    icone = 'celular'
                    url = 'https://chatgpt.com/'
                />
                <Ancora 
                    icone = 'email'
                    url = 'https://www.youtube.com/'
                />
            </div>
        </header>
    )
}

export default Cabecalho
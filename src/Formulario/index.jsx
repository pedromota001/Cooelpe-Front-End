import "./formulario.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Formulario = (submit_login) => {
    return(
        <>
        <div className="div-form-login">
            <img src="/imagens/cooelpe.svg" alt="logo cooelpe"></img>
            <label className="input-label">
                <FontAwesomeIcon icon={faEnvelope} className="icon-edit" />
                <input type="text" placeholder="Digite seu usuário"/>
            </label>
            <label className="input-label">
                <FontAwesomeIcon icon={faLock} className="icon-edit"/>
                <input type="password" placeholder="Digite sua senha"/>
            </label>
            <button className="btn btn-primary btn-sm btn-submit-edit" onClick={submit_login}>Entrar</button>
        </div>
        </>
    )
}


export default Formulario
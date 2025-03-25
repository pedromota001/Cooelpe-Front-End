import "./Ancora.css"

const Ancora = (props) => {
    let getIcone = () => {
        if(props.icone === 'ig'){
            return <i className="bi bi-instagram icone-personalizado"></i>
        }
        else if(props.icone === 'celular'){
            return <i className="bi bi-telephone icone-personalizado"></i>
        }
        else if(props.icone === 'email'){
            return <i className="bi bi-envelope icone-personalizado"></i>
        }
        else{
            return <i className="bi bi-moon icone-personalizado"></i>
        }
    }

    return(
        <a href={props.url}>{getIcone()}</a>
    )
}

export default Ancora
import "./Botao.css"

const Botao = (props) => {
    const onClickButton = () => {
        if(props.texto === "Quem somos"){
            const redirect = document.getElementById('quem-somos');
            if (redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
        else{
            const redirect = document.getElementById("nossos-objetivos");
            if(redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
    }

    return(
        <button className="btn btn-outline-warning" style={{margin: '40px 100px 100px 100px'}} onClick={onClickButton}>
            {props.texto}
        </button>
    )
}

export default Botao
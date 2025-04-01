import { useNavigate } from "react-router-dom";

const BotaoLogin = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <button 
      onClick={handleRedirect} className="btn btn-light botao-personalizado"
    >
      <i className="bi bi-box-arrow-right"></i>
    </button>
  );
};

export default BotaoLogin;

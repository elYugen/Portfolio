import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function NoPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/')
  }

  return (
      <>
      <div className="notfound">
        <p style={{color: "#43449b", fontSize: "40px"}}>404</p>
        <h1>Page non trouvé</h1>
        <p style={{color: "grey"}}>Désolé, nous n'arrivons pas à trouver la page que vous cherchez.</p>
        <button onClick={handleGoHome}>Retour à l'Accueil</button>
      </div>
      </>
  );
};

export default NoPage;
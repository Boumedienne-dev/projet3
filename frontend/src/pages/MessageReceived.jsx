import "../assets/style/MessageReceived.css";
import { Link } from "react-router-dom";
import Btnaccueil from "../assets/image/accueil.jpg";

export default function MessageReceived() {
  return (
    <div className="">
      <p className="texte-message">
        Madame, Monsieur, nous avons bien reçu votre message et nous vous
        remercions de l'intérêt que vous portez à notre site. Avec notre équipe,
        nous reviendrons très vite pour vous répondre à votre questions.
      </p>
      <div>
        <Link to="/accueil">
          <img className="Btnaccueil-message" src={Btnaccueil} alt="accueil" />
        </Link>
      </div>
    </div>
  );
}

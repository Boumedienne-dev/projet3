import { Link } from "react-router-dom";
import trainTrack from "../assets/image/train-track.webp";
import "../assets/style/User.css";

export default function ConnexionUser() {
  return (
    <div className="">
      <p className="welcomeConnexionUser">
        Bienvenue, avez-vous déjà un profil?
      </p>
      <div>
        <div>
          <img
            className="picture-train"
            src={trainTrack}
            alt="Train Jaune Occitanie"
          />
        </div>
        <div className="grid-container-user">
          <div className="toggle-pill-dark">
            <Link to="/connexion">
              <button type="button">
                <span className="text-btn-white">Connexion</span>
              </button>
            </Link>
          </div>
          <div className="toggle-pill-blue">
            <Link to="/inscription">
              <button type="button">
                <span className="text-btn-black">Inscription</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

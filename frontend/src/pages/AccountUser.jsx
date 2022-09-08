import { Link } from "react-router-dom";

export default function AccountUser() {
  return (
    <div className="">
      <p>Page profil utilisateur</p>
      <div>
        <p>
          <Link to="/connexionuser">Lien vers la connexion Utilisateur</Link>
        </p>
        <Link to="/registrationuser">Lien vers l'inscription Utilisateur</Link>
      </div>
    </div>
  );
}

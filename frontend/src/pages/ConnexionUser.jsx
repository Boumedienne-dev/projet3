import { Link } from "react-router-dom";

export default function ConnexionUser() {
  return (
    <div className="">
      <p>Page de connexion pour l'utilisateur</p>
      <div>
        <Link to="/adminaccount">Lien vers compte Utilisateur</Link>
      </div>
    </div>
  );
}

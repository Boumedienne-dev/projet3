import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <div className="unauthorizedPage">
      <h3>Accès non autorisé</h3>
      <p>
        Votre profil n'est pas autorisé à accéder a cette page. Si vous avez des
        problèmes sur notre site veuillez contacter un administrateur. Vous
        allez être redirigé automatiquement vers la page d'acceuil.
      </p>
    </div>
  );
}

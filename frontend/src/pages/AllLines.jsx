import { Link } from "react-router-dom";

export default function AllLines() {
  return (
    <div className="">
      <p>Pages de toutes les lignes</p>
      <div>
        <Link to="/city">Lien sur Ville et ses activités</Link>
      </div>
    </div>
  );
}

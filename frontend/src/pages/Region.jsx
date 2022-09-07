import { Link } from "react-router-dom";

export default function Region() {
  return (
    <div className="">
      <ul>
        <li>
          <Link to="/alllines">Region 1 lien vers toutes les lignes</Link>
        </li>
        <li>Region 2</li>
        <li>Region 3</li>
        <li>Region 4</li>
        <li>Region 5</li>
        <li>Region 6</li>
        <li>Region 7</li>
        <li>Region 8</li>
      </ul>
    </div>
  );
}

import { Link } from "react-router-dom";
import "../assets/style/allLines.css";

function AllLinesList({ line }) {
  return (
    <div className="">
      <li className="line-map">
        <div>
          <Link to={`/les_villes/${line.id}`}>
            <div className="lineposflex">
              {line.picture ? (
                <img
                  className="line-map-img"
                  src={line.picture}
                  alt={line.line_name}
                />
              ) : (
                ""
              )}
              <p className="line-text">{line.line_name}</p>
            </div>
          </Link>
        </div>
      </li>
    </div>
  );
}

export default AllLinesList;

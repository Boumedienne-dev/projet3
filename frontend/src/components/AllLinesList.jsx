import { Link } from "react-router-dom";

function AllLinesList({ line }) {
  return (
    <div className="lineposflex">
      <div className="line-map">
        <div>
          <Link to={`/les_villes/${line.id}`}>
            <div className="lineflex">
              {line.picture ? (
                <img
                  className="line-map-img"
                  src={line.picture}
                  alt={line.line_name}
                />
              ) : (
                ""
              )}
            </div>
          </Link>
        </div>
        <p>{line.line_name}</p>
      </div>
    </div>
  );
}

export default AllLinesList;

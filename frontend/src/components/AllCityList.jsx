import { Link } from "react-router-dom";
import "../assets/style/allLines.css";

function AllCityList({ city }) {
  return (
    <div className="">
      <li className="line-map">
        <div>
          <Link to={`/ville/${city.id}`}>
            <div className="lineposflex">
              {city.picture ? (
                <img
                  className="line-map-img"
                  src={city.picture}
                  alt={city.city_name}
                />
              ) : (
                ""
              )}
              <p className="line-text">{city.city_name}</p>
            </div>
          </Link>
        </div>
      </li>
    </div>
  );
}

export default AllCityList;

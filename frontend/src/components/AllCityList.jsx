import { Link } from "react-router-dom";
import "../assets/style/allLines.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function AllCityList({ city }) {
  const [getLogo, setGetLogo] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${city.id}/logo`)
      .then((response) => response.data)
      .then((data) => setGetLogo(data));
  }, []);
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
                  key={city.id}
                />
              ) : (
                ""
              )}
              <p className="line-text">{city.city_name}</p>
            </div>
          </Link>
          {/* import des Themes */}
          <div className="themeContainerFlex">
            {getLogo &&
              getLogo.map((theme) => (
                <img
                  className="themeContainerPos"
                  src={theme.image}
                  alt={theme.theme_name}
                />
              ))}
          </div>
        </div>
      </li>
    </div>
  );
}

export default AllCityList;

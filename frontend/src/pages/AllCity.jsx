import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function AllCity() {
  const [getCity, setGetCity] = useState("");
  const [getLine, setGetLine] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${id}`)
      .then((response) => response.data)
      .then((data) => setGetLine(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${id}/city`)
      .then((response) => response.data)
      .then((data) => setGetCity(data));
  }, []);

  return (
    <div>
      <li className="line-map">
        <img
          className="AllLinesRegionImg"
          src={getLine.picture}
          alt={getLine.name}
        />
        <h2 className="line-h1">{getLine.line_name}</h2>
        <nav className="nav-all-lines">
          {getCity &&
            getCity.map((city) => (
              <div className="lineposflex" key={city.id}>
                <img
                  className="line-map-img"
                  src={city.picture}
                  alt={city.city_name}
                />
                <p className="line-text">{city.city_name}</p>
              </div>
            ))}
        </nav>
      </li>
    </div>
  );
}

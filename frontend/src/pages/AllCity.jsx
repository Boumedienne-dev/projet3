import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AllCityList from "../components/AllCityList";
import "../assets/style/allLines.css";

export default function AllCity() {
  const [getCity, setGetCity] = useState("");
  const [getLine, setGetLine] = useState("");
  const [legacy, setLegacy] = useState("");
  const { id } = useParams();

  // affichage de la photo en-tête
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${id}`)
      .then((response) => response.data)
      .then((data) => setGetLine(data));
  }, []);

  // affichege des villes dans la lignes
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${id}/cities`)
      .then((response) => response.data)
      .then((data) => setGetCity(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/themes`)
      .then((response) => response.data)
      .then((data) => setLegacy(data));
  }, []);

  return (
    <div>
      <img
        className="AllLinesRegionImg"
        src={getLine.picture}
        alt={getLine.name}
      />
      <p className="AllLinesRegionText">{getLine.description}</p>
      {getLine.id ? (
        <h2 className="line-h1">{getCity.city_name}</h2>
      ) : (
        <h2>Page en cours de construction</h2>
      )}
      <div className="legendethemeContainerFlex">
        {legacy &&
          legacy.map((leg) => (
            <div>
              <img
                className="legendethemeContainerPos"
                src={leg.image}
                alt={leg.label}
              />
              <h2 className="legendeh2">{leg.label}</h2>
            </div>
          ))}
      </div>
      <nav className="nav-all-lines">
        {getCity &&
          getCity.map((city) => <AllCityList key={city.id} city={city} />)}
      </nav>
    </div>
  );
}

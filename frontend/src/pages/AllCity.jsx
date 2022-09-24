import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AllCityList from "../components/AllCityList";
import "../assets/style/allLines.css";

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
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${id}/citys`)
      .then((response) => response.data)
      .then((data) => setGetCity(data));
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
      <nav className="nav-all-lines">
        {getCity &&
          getCity.map((city) => <AllCityList key={city.id} city={city} />)}
      </nav>
    </div>
  );
}

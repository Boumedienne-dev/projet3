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
      <h2>{getLine.line_name}</h2>
      {getCity &&
        getCity.map((city) => (
          <div key={city.id}>
            <h4>{city.city_name}</h4>
          </div>
        ))}
    </div>
  );
}

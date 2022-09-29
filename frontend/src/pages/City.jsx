import "../assets/style/activityCity.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Activity from "../components/Activity";

export default function City() {
  const [getActivities, setGetActivities] = useState("");

  const [getCity, setGetCity] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cities/${id}`)
      .then((response) => response.data)
      .then((data) => setGetCity(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cities/${id}/activities`)
      .then((response) => response.data)
      .then((data) => setGetActivities(data));
  }, []);

  return (
    <div className="cityDivPrincipal">
      <img className="cityImg" src={getCity.picture} alt="" />
      <div className="cityDivName">
        <h2 className="cityDivNameH2">{getCity.city_name}</h2>
      </div>
      <div>
        {getActivities &&
          getActivities.map((activity) => (
            <Activity key={activity.id} activity={activity} />
          ))}
      </div>
    </div>
  );
}

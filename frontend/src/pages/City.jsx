import "../assets/style/activityCity.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function City() {
  const [getActivities, setGetActivities] = useState();
  const [getCity, setGetCity] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cities/1`)
      .then((response) => response.data)
      .then((data) => setGetCity(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/cities/1/activities`)
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
            <section className="cityContainer">
              <div className="cityContainerDiv1">
                <img
                  className="cityContainerImg"
                  src={activity.picture}
                  alt=""
                />
              </div>
              <div className="cityContainerDiv2">
                <p className="cityContainerParagraph">
                  {activity.activity_name}
                </p>
                <p className="cityContainerParagraph">{activity.description}</p>
                <p className="cityContainerParagraph">{activity.adress}</p>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
}

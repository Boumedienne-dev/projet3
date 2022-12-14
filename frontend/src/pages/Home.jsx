import { useState, useEffect } from "react";
import axios from "axios";
import RegionList from "../components/RegionList";

import "../assets/style/home.css";

export default function Home() {
  const [getRegion, setGetRegion] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setGetRegion(data));
  }, []);
  return (
    <div className="homeDivMain">
      <h2 className="homeTitle">
        Bienvenue sur l'application Sncf Exploration
      </h2>
      <p>
        Vous voulez trouver une activité proche de nos gare TER? Vous êtes au
        bon endroit
      </p>
      <div className="homeDiv">
        {getRegion &&
          getRegion.map((region) => (
            <RegionList region={region} key={region.id} />
          ))}
      </div>
    </div>
  );
}

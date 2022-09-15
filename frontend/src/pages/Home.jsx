import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "../assets/style/home.css";

export default function Home() {
  const [getRegion, setGetRegion] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setGetRegion(data));
  });
  return (
    <div>
      <header>
        <h2>Bienvenue sur l'application Sncf Exploration</h2>
        <p>
          Vous voulez trouver une activité proche de nos gare TER? Vous êtes au
          bon endroit
        </p>
      </header>
      <div className="homeDiv">
        {getRegion &&
          getRegion.map((region) => (
            <div className="homeRegionContainersParent">
              <Link to={`/les_lignes/${region.id}`}>
                <h4 className="homeRegionTitle">{region.name}</h4>
                <div className="homeRegionContainersEnfant" key={region.id}>
                  <img
                    className="homeRegionImg"
                    src={region.picture}
                    alt={region.name}
                  />
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

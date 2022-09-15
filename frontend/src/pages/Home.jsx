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
    <div className="homeDivMain">
      <header>
        <h2 className="homeTitle">
          Bienvenue sur l'application Sncf Exploration
        </h2>
        <p>
          Vous voulez trouver une activité proche de nos gare TER? Vous êtes au
          bon endroit
        </p>
      </header>
      <div className="homeDiv">
        {getRegion &&
          getRegion.map((region) => (
            <div className="homeRegionContainers">
              <Link to={`/les_lignes/${region.id}`}>
                <div className="homeRegionContainersChild" key={region.id}>
                  <h4 className="homeRegionTitle">{region.name}</h4>
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

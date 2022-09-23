import React, { useState } from "react";
import "../assets/style/userConnexion.css";

function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ mail: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h1 className="userCoTitle">
          Bienvenue sur la page de connexion à votre profil.
        </h1>
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="userCoInput-containerUser">
          <label className="userCoApp" htmlFor="mail">
            mail:{" "}
          </label>
          <input
            type="mail"
            name="mail"
            id="mail"
            value={details.mail}
            onChange={(e) => setDetails({ ...details, mail: e.target.value })}
          />
        </div>
        <div className="userCoInput-containerPass">
          <label className="userCoApp" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <div className="pictureP-UserConnexion">
          <img
            className="pictureT-UserConnexion"
            src="https://res.cloudinary.com/otire82/image/upload/v1662624134/image/train-jaune.jpg"
            alt="train touristique"
            srcset=""
          />
        </div>
        <div className="posBtnCo">
          <a href="/inscription">
            <div className="toggle-pill-blueUserCo button">
              <button type="submit">
                <span className="text-btn-blackUserCo">Connexion</span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;

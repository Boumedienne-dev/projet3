import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
import AuthApi from "../services/AuthApi";
import CurrentUserContext from "../context/CurrentUserContext";

import "../assets/style/userConnexion.css";

export default function UserConnexion() {
  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    AuthApi.logout();
    setIsAuthenticated(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        ...user,
      })
      .then((response) => response.data)
      .then((data) => {
        window.localStorage.setItem("authToken", data.token);
        axios.defaults.headers.Authorization = `Bearer ${data.token}`;
        setCurrentUser(jwtDecode(data.token));
      })
      .then(() => {
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate("/compte_utilisateur");
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="userCoTitle">
        <h1>Formulaire de connexion</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="userCoInput-containerUser">
            <label className="userCoApp" htmlFor="Email">
              mail:
            </label>
            <input
              className="userCoInput"
              type="email"
              value={user.mail}
              onChange={(e) =>
                setUser({
                  ...user,
                  mail: e.target.value,
                })
              }
              placeholder="Email"
            />
          </div>
          <div className="userCoInput-containerPass">
            <label className="userCoApp" htmlFor="password">
              password:
            </label>
            <input
              className="userCoInput"
              type="password"
              placeholder="Mot de passe"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className="pictureP-UserConnexion">
            <img
              className="pictureT-UserConnexion"
              src="https://res.cloudinary.com/otire82/image/upload/v1662624134/image/train-jaune.jpg"
              alt="train touristique"
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
        </form>
      </div>
      <button type="button" onClick={() => handleLogout()}>
        DeconnnneeeezzzzziiiiiiiioooNNNNN!!!!
      </button>
    </div>
  );
}

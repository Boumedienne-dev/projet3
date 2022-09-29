import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthContext from "../context/AuthContext";
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
          <input
            className="userCoInput"
            type="password"
            placeholder="Mot de passe"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input type="submit" />
          <div>
            <button
              type="button"
              className="MDP"
              onClick={() => navigate("/modification")}
            >
              mot de passe oublié
            </button>
          </div>
          <div className="connect_button_container">
            <button
              type="button"
              className="buttonForm1"
              onClick={() => navigate("/")}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

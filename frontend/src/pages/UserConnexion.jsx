import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

import "../assets/style/userConnexion.css";
import AuthApi from "../services/AuthApi";

export default function UserConnexion() {
  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    AuthApi.logout();
    setIsAuthenticated(false);
  };
  const navigate = useNavigate();

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
      })
      .then(() => {
        setIsAuthenticated(true);
        navigate("/compte_utilisateur");
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
        </form>
      </div>
      <button type="button" onClick={() => handleLogout()}>
        DeconnnneeeezzzzziiiiiiiioooNNNNN!!!!
      </button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import "../assets/style/userConnexion.css";

function UserProfile() {
  const [database, setDatabase] = useState([]);
  const [user, setUser] = useState({ mail: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users`)
      .then((response) => response.data)
      .then((data) => setDatabase(data));
  }, []);

  const login = (details) => {
    if (
      details.mail == database.mail &&
      details.password == database.password
    ) {
      setUser({
        mail: details.mail,
      });
    } else {
      setError("Details do not match!");
    }
  };

  const logout = () => {
    setUser({ mail: "" });
  };

  return (
    <div>
      {user.mail != "" ? (
        <div>
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
}

export default UserProfile;

//

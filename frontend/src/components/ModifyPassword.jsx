import axios from "axios";
import React, { useState } from "react";
import "../assets/style/ModifyPassword.css";

function ModifyPassword() {
  const [mail, setMail] = useState("");
  const [userExist, setUserExist] = useState("");
  const [mailSent, setMailSent] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/mail/`, {
        mail,
      })
      .then((response) => {
        // console.error(response);
        console.warn(response.data);
        setMailSent(true);
        setUserExist(false);
      })
      .catch((error) =>
        error.response.status === 404 ? setUserExist(true) : setUserExist(false)
      );
  };
  return (
    <div className="contact1">
      <div className="Contact">
        <h1 className="createuser_title">Modification de votre mot de passe</h1>
        <form>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="createruser_container">
            <p>Entrez votre mail valide</p>
            <input
              className="createuser_password"
              type="email"
              id="createuser_password"
              defaultValue={mail}
              placeholder="@ Mail *"
              onChange={(e) => setMail(e.target.value)}
            />
            {userExist ? <p>Utilisateur non existant</p> : ""}
            {mailSent ? <p>Mail envoyé</p> : ""}
          </div>
          <div className="grid-container-user">
            <button
              className="pill-dark"
              type="submit"
              onClick={(e) => sendMail(e)}
            >
              <span className="textbtnbalck">Valider</span>
            </button>
            <button className="pill-blue" type="submit">
              <span className="textbtnwhite">Annuler</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifyPassword;

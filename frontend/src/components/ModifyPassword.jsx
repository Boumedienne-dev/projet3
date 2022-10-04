import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/ModifyPassword.css";

function ModifyPassword() {
  const [mail, setMail] = useState("");
  const [userExist, setUserExist] = useState("");
  const [mailSent, setMailSent] = useState("");
  const nav = useNavigate();

  const sendMail = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/mail/`, {
        mail,
      })
      .then((response) => response.data)
      .then((data) => {
        console.warn(data);
      })
      .then(() => {
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
        <h2 className="createuser_title">Modification de votre mot de passe</h2>
        <form>
          <div className="createruser_container">
            <p>Veuillez entrer une adresse mail valide</p>
            <input
              className="createuser_password"
              type="email"
              id="createuser_password"
              defaultValue={mail}
              placeholder="@ Mail *"
              onChange={(e) => setMail(e.target.value)}
            />
            {userExist ? (
              <p className="redUser">Utilisateur non existant</p>
            ) : (
              ""
            )}
            {mailSent ? <p className="redUser">Mail envoyé</p> : ""}
          </div>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="pictureP-UserModif">
            <img
              className="pictureT-UserModif"
              src="https://res.cloudinary.com/otire82/image/upload/v1664874035/image/image_cewabb.jpg"
              alt="train touristique"
            />
          </div>
          <div className="buttonsContainer">
            <div className="pill-blue">
              <button type="button" onClick={() => nav("/")}>
                <span className="textbtnblack">Annuler</span>
              </button>
            </div>
            <div className="pill-dark">
              <button type="button" onClick={(e) => sendMail(e)}>
                <span className="textbtnwhite">Valider</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifyPassword;

/* eslint-disable no-unused-expressions */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/style/ModifyPassword.css";

function ModifyPasswordWithMail() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [regBool, setRegBool] = useState(false);
  const [equalTest, setEqualTest] = useState(false);
  const [passChangeSuccess, setpassChangeSuccess] = useState(true);
  const { token } = useParams();
  const tokenCorrected = token.replace("$").join(".");
  const nav = useNavigate();
  useEffect(() => {
    // test regex: lettre capital, normal,un chiffre, un charactere spécial et 8 de long
    const regExTest =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).{8,}$/;
    setRegBool(!regExTest.test(newPassword));
    setEqualTest(newPassword === confirmNewPassword);
  }, [newPassword, confirmNewPassword]);

  const editPass = () => {
    const password = newPassword;
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/mail/${tokenCorrected}`, {
        password,
      })
      .then((response) => {
        response === "success" ? nav("/login") : setpassChangeSuccess(false);
        console.warn(response);
      })
      .catch((error) => {
        setpassChangeSuccess(false);
        console.warn(error);
      });
  };
  return (
    <div className="">
      <div className="Contact">
        <h2 className="createuser_title">Modification de votre mot de passe</h2>
        <form>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="createruser_container">
            <input
              className="createuser_password"
              type="password"
              id="createuser_password"
              value={newPassword}
              placeholder="Nouveau mot de passe*"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="createuser_confirm_password"
              type="password"
              id="createuser_confirm_password"
              value={confirmNewPassword}
              placeholder="Confirmez le nouveau mot de passe*"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          {passChangeSuccess ? "" : <p>Echec de mise a jour du mot de passe</p>}
          {equalTest ? "" : <p>Mot de passe différent</p>}
          {regBool ? <p>Mot de passe ne respectant pas les critères</p> : ""}
          <div className="buttonsContainer">
            <button
              className="pill-dark"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                equalTest === true ? editPass(e) : "";
              }}
            >
              <span className="textbtnbalck">Valider</span>
            </button>
            <button
              className="pill-blue"
              type="button"
              onClick={() => nav("/")}
            >
              <span className="textbtnwhite">Annuler</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifyPasswordWithMail;

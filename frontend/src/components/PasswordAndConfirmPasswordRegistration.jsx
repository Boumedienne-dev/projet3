/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import PasswordInputField from "./PasswordInputField";
import ConfirmPasswordInputField from "./ConfirmPasswordInputField";
import "../assets/style/RegistrationUser.css";

// fonction REGEX du mot de passe et de la confirmation
export default function PasswordAndConfirmPasswordRegistration({
  password,
  setPassword,
  setErrorsPassword,
}) {
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // mot de passe avec REGEX
  const handleValidation = (e) => {
    // retire si un espace vide est au début
    const passwordInputValue = e.target.value.trim();
    const passwordInputFieldName = e.target.name;
    // pour le mot de passe
    if (passwordInputFieldName === "password") {
      // une majuscule
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      // une minuscule
      const lowercaseRegExp = /(?=.*?[a-z])/;
      // un chiffre
      const digitsRegExp = /(?=.*?[0-9])/;
      // caractère spécial
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      // 8 caracteres minimum
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      // indique un mesage au fur et à mesure que l'utilisateur tape sur son clavier
      if (passwordLength === 0) {
        errMsg = "Veuillez indiquer un mot de passe";
        setErrorsPassword(true);
      } else if (!uppercasePassword) {
        errMsg = "Au minimum une majuscule";
        setErrorsPassword(true);
      } else if (!lowercasePassword) {
        errMsg = "Au moins une minuscule";
        setErrorsPassword(true);
      } else if (!digitsPassword) {
        errMsg = "Au minimum un chiffre";
        setErrorsPassword(true);
      } else if (!specialCharPassword) {
        errMsg = "Au moins un caractère spécial";
        setErrorsPassword(true);
      } else if (!minLengthPassword) {
        errMsg = "Au minimum 8 caractères";
        setErrorsPassword(true);
      } else {
        errMsg = "";
        setErrorsPassword(false);
      }
      setPasswordError(errMsg);
    }
  };
  // useEffect pour eviter l'erreur asynchrome il compare en boucle
  // le mot de passe et confirmation de mot de passe.
  useEffect(() => {
    // si différent erreur
    if (confirmPassword !== password) {
      setConfirmPasswordError("Le mot de passe n'est pas identique");
    } else {
      // sinon pas d'erreur
      setConfirmPasswordError("");
    }
  }, [confirmPassword, password]);

  return (
    <div>
      <div>
        <PasswordInputField
          password={password}
          setPassword={setPassword}
          handleValidation={handleValidation}
          passwordError={passwordError}
        />
        <ConfirmPasswordInputField
          handleValidation={handleValidation}
          confirmPasswordError={confirmPasswordError}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      </div>
    </div>
  );
}

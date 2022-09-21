import { useState } from "react";
import PasswordInputField from "./PasswordInputField";
import ConfirmPasswordInputField from "./ConfirmPasswordInputField";
import "../assets/style/RegistrationUser.css";

export default function PasswordAndConfirmPasswordRegistration({
  password,
  setPassword,
  setErrorsPassword,
}) {
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleValidation = (e) => {
    const passwordInputValue = e.target.value.trim();
    const passwordInputFieldName = e.target.name;
    // for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";

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
      }
      setPasswordError(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" && confirmPassword.length > 0)
    ) {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Le mot de passe n'est pas identique");
      } else {
        setConfirmPasswordError("");
        setErrorsPassword(false);
      }
    }
  };
  return (
    <div>
      <div>
        <PasswordInputField
          password={password}
          setPassword={setPassword}
          handleValidation={handleValidation}
          passwordError={passwordError}
          setErrorsPassword={setErrorsPassword}
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

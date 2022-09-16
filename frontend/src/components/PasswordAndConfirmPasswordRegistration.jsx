import { useState } from "react";
import PasswordInputField from "./PasswordInputField";
import ConfirmPasswordInputField from "./ConfirmPasswordInputField";
import "../assets/style/RegistrationUser.css";

export default function PasswordAndConfirmPasswordRegistration() {
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const handlePasswordChange = (e) => {
    const passwordInputValue = e.target.value.trim();
    const passwordInputFieldName = e.target.name;
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };
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
      } else if (!uppercasePassword) {
        errMsg = "Au minimum une majuscule";
      } else if (!lowercasePassword) {
        errMsg = "Au moins une minuscule";
      } else if (!digitsPassword) {
        errMsg = "Au minimum un chiffre";
      } else if (!specialCharPassword) {
        errMsg = "Au moins un caractère spécial";
      } else if (!minLengthPassword) {
        errMsg = "Au minimum 8 caractères";
      } else {
        errMsg = "";
      }
      setPasswordError(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        passwordInput.confirmPassword.length > 0)
    ) {
      if (passwordInput.confirmPassword !== passwordInput.password) {
        setConfirmPasswordError("Le mot de passe n'est pas identique");
      } else {
        setConfirmPasswordError("");
      }
    }
  };
  return (
    <div>
      <div>
        <PasswordInputField
          handlePasswordChange={handlePasswordChange}
          handleValidation={handleValidation}
          passwordValue={passwordInput.password}
          passwordError={passwordError}
        />
        <ConfirmPasswordInputField
          handlePasswordChange={handlePasswordChange}
          handleValidation={handleValidation}
          confirmPasswordValue={passwordInput.confirmPassword}
          confirmPasswordError={confirmPasswordError}
        />
      </div>
    </div>
  );
}

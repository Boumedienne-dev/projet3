function PasswordInputField({
  handleValidation,
  handlePasswordChange,
  passwordValue,
  passwordError,
}) {
  return (
    <div>
      <input
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
        onKeyUp={handleValidation}
        name="password"
        placeholder="Mot de passe"
      />
      <p className="text-danger">{passwordError}</p>
    </div>
  );
}
export default PasswordInputField;

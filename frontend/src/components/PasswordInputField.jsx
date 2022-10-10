// Fonction Input du mot de passe qui sera vérifié avec le REGEX
function PasswordInputField({
  password,
  setPassword,
  handleValidation,
  passwordError,
}) {
  function handleInputChange(e) {
    setPassword(e.target.value);
    handleValidation(e);
  }

  return (
    <div>
      <input
        type="password"
        defaultValue={password}
        onChange={(e) => handleInputChange(e)}
        name="password"
        placeholder="Mot de passe"
        required
      />
      <p className="text-danger">{passwordError}</p>
    </div>
  );
}
export default PasswordInputField;

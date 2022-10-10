// fonction du deuxieme input qui comparera à l'autre input mot de passe
function ConfirmPasswordInputField({
  handleValidation,
  confirmPasswordError,
  confirmPassword,
  setConfirmPassword,
}) {
  function handleInputChangeConfirm(e) {
    setConfirmPassword(e.target.value);
    handleValidation(e);
  }
  return (
    <div>
      <input
        type="password"
        defaultValue={confirmPassword}
        onChange={(e) => handleInputChangeConfirm(e)}
        name="confirmPassword"
        placeholder="Répéter le mot de passe"
      />
      <p className="text-danger">{confirmPasswordError}</p>
    </div>
  );
}
export default ConfirmPasswordInputField;

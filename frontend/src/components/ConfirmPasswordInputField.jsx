function ConfirmPasswordInputField({
  handleValidation,
  handlePasswordChange,
  confirmPasswordValue,
  confirmPasswordError,
}) {
  return (
    <div>
      <input
        type="password"
        value={confirmPasswordValue}
        onChange={handlePasswordChange}
        onKeyUp={handleValidation}
        name="confirmPassword"
        placeholder="Répéter le mot de passe"
      />
      <p className="text-danger">{confirmPasswordError}</p>
    </div>
  );
}
export default ConfirmPasswordInputField;

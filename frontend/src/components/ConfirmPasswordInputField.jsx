function ConfirmPasswordInputField({
  handleValidation,
  confirmPasswordError,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <div>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onBlur={(e) => handleValidation(e)}
        name="confirmPassword"
        placeholder="Répéter le mot de passe"
      />
      <p className="text-danger">{confirmPasswordError}</p>
    </div>
  );
}
export default ConfirmPasswordInputField;

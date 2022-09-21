function PasswordInputField({
  password,
  setPassword,
  handleValidation,
  passwordError,
}) {
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={(e) => handleValidation(e)}
        name="password"
        placeholder="Mot de passe"
        required
      />
      <p className="text-danger">{passwordError}</p>
    </div>
  );
}
export default PasswordInputField;

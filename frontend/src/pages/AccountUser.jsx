import EditProfile from "../components/EditProfile";

export default function AccountUser() {
  return (
    <div>
      <div className="accountuserDivPrincipal">
        <h2 className="accountUserTitle">Mon profil</h2>
        <EditProfile />
      </div>
    </div>
  );
}

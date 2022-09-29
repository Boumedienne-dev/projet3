import EditProfile from "../components/EditProfile";
import "../assets/style/editProfile.css";

export default function AccountUser() {
  return (
    <div className="accountuserDivPrincipal">
      <h2 className="accountUserTitle">Mon profil</h2>
      <EditProfile />
    </div>
  );
}

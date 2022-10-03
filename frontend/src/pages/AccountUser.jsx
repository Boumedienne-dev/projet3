import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import "../assets/style/editProfile.css";
import "../assets/style/accountUser.css";
import ActivityByUserId from "../components/ActivityByUserId";
import AuthApi from "../services/AuthApi";
import AuthContext from "../context/AuthContext";
import CurrentUserContext from "../context/CurrentUserContext";

export default function AccountUser() {
  const [getActivityByUserId, setGetActivityByUserId] = useState("");
  const { currentUser } = useContext(CurrentUserContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/users/${
          currentUser.sub
        }/activities`
      )
      .then((response) => response.data)
      .then((data) => setGetActivityByUserId(data));
  }, []);

  function deleteAccoumpt() {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.sub}`)
      .then(() => {
        AuthApi.logout();
        setIsAuthenticated(false);
      })
      .then(navigate("/"));
  }

  return (
    <div className="accountUserDivPrincipal">
      <h2 className="accountUserTitle">Mon profil</h2>
      <EditProfile />
      {getActivityByUserId &&
        getActivityByUserId.map((activity) => (
          <ActivityByUserId key={activity.id} activity={activity} />
        ))}
      <div className="acountUserDeleteAccountDiv">
        <button
          className="acountUserDeleteAccountButton"
          type="button"
          onClick={deleteAccoumpt}
        >
          <span className="acountUserDeleteAccountButtonSpan">
            SUPPRIMER MON COMPTE
          </span>
        </button>
      </div>
    </div>
  );
}

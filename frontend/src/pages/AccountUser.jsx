import axios from "axios";
import { useContext, useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";
import "../assets/style/editProfile.css";
import ActivityByUserId from "../components/ActivityByUserId";
import CurrentUserContext from "../context/CurrentUserContext";

export default function AccountUser() {
  const [getActivityByUserId, setGetActivityByUserId] = useState("");
  const { currentUser } = useContext(CurrentUserContext);

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

  return (
    <div className="accountUserDivPrincipal">
      <h2 className="accountUserTitle">Mon profil</h2>
      <EditProfile />
      {getActivityByUserId &&
        getActivityByUserId.map((activity) => (
          <ActivityByUserId key={activity.id} activity={activity} />
        ))}
    </div>
  );
}

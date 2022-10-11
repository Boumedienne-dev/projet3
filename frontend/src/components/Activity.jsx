/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
import { useState, useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import "../assets/style/activityCity.css";

function Activity({ activity }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [activities] = useState({});
  const [favorite, setFavorite] = useState(false);

  function postFavorite() {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/usersActivities`, {
        ...activities,
        id_activity: activity.id,
        id_user: currentUser.sub,
      })
      .then(() => {
        setFavorite(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <section key={activity.id} className="cityContainer">
      <div className="cityContainerDiv1">
        <img className="cityContainerImg" src={activity.picture} alt="" />
      </div>
      <div className="cityContainerDiv2">
        <p className="cityContainerParagraph">{activity.activity_name}</p>
        <p className="cityContainerParagraph">{activity.description}</p>
        <p className="cityContainerParagraph">{activity.adress}</p>
      </div>
      <div
        className="cityContainerDiv3"
        onClick={() => {
          postFavorite();
        }}
      >
        {favorite ? (
          <img
            className="cityContainerImgFavorite"
            src="https://res.cloudinary.com/otire82/image/upload/v1662553315/theme/favoriYES_rtxfnm.png"
            alt="logo non favoris"
          />
        ) : (
          <img
            className="cityContainerImgFavorite"
            src="https://res.cloudinary.com/otire82/image/upload/v1662553315/theme/favoriNO_jhu2ja.png"
            alt="logo non favoris"
          />
        )}
      </div>
    </section>
  );
}

export default Activity;

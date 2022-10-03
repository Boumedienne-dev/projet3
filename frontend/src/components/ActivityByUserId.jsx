/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "../assets/style/activityByUserId.css";
import axios from "axios";

function ActivityByUserId({ activity }) {
  function deleteFavorite() {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/usersActivities/${activity.id}`
      )
      .then(() => window.location.reload());
  }

  return (
    <section key={activity.id} className="activityContainer">
      <div className="activityContainerDiv1">
        <h1>{activity.id}</h1>
        <img className="activityContainerImg" src={activity.picture} alt="" />
      </div>
      <div className="activityContainerDiv2">
        <p className="activityContainerParagraph">{activity.activity_name}</p>
        <p className="activityContainerParagraph">{activity.description}</p>
        <p className="activityContainerParagraph">{activity.adress}</p>
      </div>
      <div
        className="activityContainerDiv3"
        onClick={() => {
          deleteFavorite();
        }}
      >
        <img
          className="activityContainerFlat"
          src="https://res.cloudinary.com/otire82/image/upload/v1664466232/theme/poubelle_x6itdh.png"
          alt="logo poubelle"
        />
      </div>
    </section>
  );
}

export default ActivityByUserId;

import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/style/editProfile.css";

export default function EditProfile() {
  const [image, setImage] = useState("");
  const [getUser, setGetUser] = useState("");
  const [user, setUser] = useState({
    last_name: "",
    first_name: "",
    mail: "",
    picture: "",
  });

  function updateProfile() {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/users/55`, {
        ...user,
      })
      .then((res) => {
        console.error(res);
        console.error(res.data);
      });
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/55`)
      .then((response) => response.data)
      .then((data) => setGetUser(data));
  }, []);

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "sncf-exploration");
    data.append("cloud_name", "otire82");
    fetch("  https://api.cloudinary.com/v1_1/otire82/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data1) => {
        setUser({ ...user, picture: data1.url });
      })
      .catch((err) => console.error(err));
  };

  function handleUpdateProfile(e) {
    setImage(e.target.files[0]);
    setUser({ ...user, picture: e.target.value });
  }

  return (
    <div className="editProfileDivPrincipal">
      <div className="editProfileDivImg">
        <img className="editProfileImg" src={getUser.picture} alt="" />
      </div>
      <form
        className="editProfileForm"
        onSubmit={(e) => {
          e.preventDefault();
          updateProfile();
        }}
      >
        <section className="editProfileContainers">
          <div className="editProfileContainer1">
            <label htmlFor="lastname">Votre nom</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder={getUser.last_name}
              onChange={(e) => {
                setUser({
                  ...user,
                  last_name: e.target.value,
                });
              }}
            />
          </div>
          <div className="editProfileContainer2">
            <label htmlFor="firstname">Votre Prenom</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder={getUser.first_name}
              onChange={(e) => {
                setUser({
                  ...user,
                  first_name: e.target.value,
                });
              }}
            />
          </div>
        </section>
        <section className="">
          <div>
            <label htmlFor="mail">Votre email</label>
            <br />
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder={getUser.mail}
              onChange={(e) => {
                setUser({
                  ...user,
                  mail: e.target.value,
                });
              }}
            />
          </div>
          {/* <div>
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
            />*
            </div> */}
        </section>
        <div className="editProfileDivUploadImg">
          <label htmlFor="file">Modifier votre photo:</label>
          <input
            type="file"
            name="file"
            id="file"
            alt="Profil"
            accept="image/*"
            onChange={(e) => handleUpdateProfile(e)}
          />
          <button
            className="editProfileDivUploadImgbtn"
            type="button"
            onClick={uploadImage}
          >
            Charger votre photo
          </button>
        </div>
        <div className="editProfile-toggle-pill-dark">
          <button className="editProfileupdateBtn" type="submit" value="submit">
            <span className="text-btn-white">Mettre a jour</span>
          </button>
        </div>
      </form>
    </div>
  );
}

/* <div className="accountUser-grid-container-user">
          <div className="accountUser-toggle-pill-dark">
            <button type="button">
              <span className="text-btn-white">Editer</span>
            </button>
          </div>
          <div className="accountUser-toggle-pill-blue">
            <button type="button">
              <span className="text-btn-black">Deconnexion</span>
            </button>
          </div>
          </div> */

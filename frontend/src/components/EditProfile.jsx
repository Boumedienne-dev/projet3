import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../assets/style/editProfile.css";
import { useNavigate } from "react-router-dom";
import AuthApi from "../services/AuthApi";
import AuthContext from "../context/AuthContext";
import CurrentUserContext from "../context/CurrentUserContext";

export default function EditProfile() {
  const { currentUser } = useContext(CurrentUserContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const [getUser, setGetUser] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    AuthApi.logout();
    setIsAuthenticated(false);
    navigate("/");
  };

  function updateProfile() {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.sub}`, {
        ...getUser,
      })
      .then((res) => {
        console.error(res);
        console.error(res.data);
      })
      .then(() => navigate("/compte_utilisateur"));
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${currentUser.sub}`)
      .then((response) => response.data)
      .then((data) => setGetUser(data), setLoading(false));
  }, [currentUser]);

  if (loading) {
    return "En cours de chargement";
  }

  const uploadImage = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "sncf-exploration");
    data.append("cloud_name", "otire82");
    fetch("  https://api.cloudinary.com/v1_1/otire82/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data1) => {
        setGetUser({ ...getUser, picture: data1.url });
      })
      .catch((err) => console.error(err));
  };

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
        <section className="editProfileSectionContainer1">
          <div className="editProfileContainer1">
            <label htmlFor="lastname">Votre nom</label>
            <input
              className="editProfileLastname"
              type="text"
              name="lastname"
              id="lastname"
              value={getUser.last_name}
              onChange={(e) => {
                setGetUser({
                  ...getUser,
                  last_name: e.target.value,
                });
              }}
            />
          </div>
          <div className="editProfileContainer2">
            <label htmlFor="firstname">Votre Prenom</label>
            <input
              className="editProfileFirstname"
              type="text"
              name="firstname"
              id="firstname"
              value={getUser.first_name}
              onChange={(e) => {
                setGetUser({
                  ...getUser,
                  first_name: e.target.value,
                });
              }}
            />
          </div>
        </section>
        <section className="editProfileSectionContainer2">
          <div>
            <label htmlFor="mail">Votre email</label>
            <br />
            <input
              className="editProfileMail"
              type="email"
              name="mail"
              id="mail"
              value={getUser.mail}
              onChange={(e) => {
                setGetUser({
                  ...getUser,
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
            className="editProfileInputImg"
            type="file"
            name="file"
            id="file"
            alt="Profil"
            accept="image/*"
            onChange={(e) => uploadImage(e)}
          />
        </div>
        <div className="editProfileDivButtons">
          <button className="editProfileUpdateBtn" type="submit" value="submit">
            <span className="text-btn-white">Mettre a jour</span>
          </button>
          <button
            className="editProfileDeconnexionbtn"
            type="button"
            onClick={() => handleLogout()}
          >
            Deconnexion
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

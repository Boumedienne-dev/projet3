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
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("mail");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("id");
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
      <form>
        <div className="editProfileDivImg">
          <img className="editProfileImg" src={getUser.picture} alt="avatar" />
          {currentUser.isAdmin === 1 ? (
            <a href="/administrateur">
              <button className="buttonAccessAdmin" type="button">
                Accès Admin
              </button>
            </a>
          ) : (
            ""
          )}
        </div>
      </form>
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
            <br />
            <input
              className="editProfileLastname"
              type="text"
              name="lastname"
              id="lastname"
              defaultValue={getUser.last_name}
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
            <br />
            <input
              className="editProfileFirstname"
              type="text"
              name="firstname"
              id="firstname"
              defaultValue={getUser.first_name}
              onChange={(e) => {
                setGetUser({
                  ...getUser,
                  first_name: e.target.value,
                });
              }}
            />
          </div>
          <div className="editProfileContainer3">
            <label htmlFor="mail">Votre email</label>
            <br />
            <input
              className="editProfileMail"
              type="email"
              name="mail"
              id="mail"
              defaultValue={getUser.mail}
              onChange={(e) => {
                setGetUser({
                  ...getUser,
                  mail: e.target.value,
                });
              }}
            />
          </div>
          <div className="editProfileDivPassword">
            <br />
            <div className="editProfileDivButtons" id="editProfileDivPassword">
              <button
                className="editProfilPassBtn"
                type="button"
                onClick={() => navigate("/modification")}
              >
                <span className="text-btn-black-user">
                  Changer de mot de passe
                </span>
              </button>
            </div>
          </div>
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
            <span className="text-btn-white-user">Mettre a jour</span>
          </button>
          <button
            className="editProfileDeconnexionbtn"
            type="button"
            onClick={() => handleLogout()}
          >
            <span className="text-btn-black-user">Deconnexion</span>
          </button>
        </div>
      </form>
    </div>
  );
}

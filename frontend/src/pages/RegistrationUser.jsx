import { useState } from "react";
import "../assets/style/RegistrationUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PasswordAndConfirmPasswordRegistration from "../components/PasswordAndConfirmPasswordRegistration";

export default function RegistrationUser() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [errorsPassword, setErrorsPassword] = useState(false);
  const [user, setUser] = useState({
    last_name: "",
    first_name: "",
    mail: "",
    picture: "",
  });

  const postUser = () => {
    if (!errorsPassword) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          ...user,
          password,
        })
        .then((res) => {
          console.error(res);
          console.error(res.data);
        })
        .then(() => navigate("/connexion"));
    }
  };

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
        setUser({ ...user, picture: data1.url });
      })
      .catch((err) => console.error(err));
  };

  function handleInputProfile(e) {
    uploadImage(e);
    setUser({ ...user, picture: e.target.value });
  }

  return (
    <div className="">
      <h3 className="title-registration">
        Bienvenue sur le formulaire d'inscription:
      </h3>
      <p className="text-registration">
        En tant qu’utilisateur, tu pourras retrouver facilement les activités
        que tu as ajoutées en favoris.
      </p>
      <p className="text-require">* Champs obligatoires.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postUser();
        }}
      >
        <div className="form-container">
          <label htmlFor="name">Nom:*</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) =>
              setUser({
                ...user,
                last_name: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-container">
          <label htmlFor="firstname">Prénom:*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={(e) =>
              setUser({
                ...user,
                first_name: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-container">
          <label htmlFor="email">Email:*</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) =>
              setUser({
                ...user,
                mail: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-container">
          <label htmlFor="password">Mot de passe:*</label>
          <PasswordAndConfirmPasswordRegistration
            password={password}
            setPassword={setPassword}
            errorsPassword={errorsPassword}
            setErrorsPassword={setErrorsPassword}
          />
        </div>
        <div className="form-container">
          <label htmlFor="file">Photo de profil:</label>
          <input
            type="file"
            name="file"
            id="file"
            alt="Profil"
            accept="image/*"
            onChange={(e) => handleInputProfile(e)}
          />
        </div>
        <div className="review-picture">
          <p>Prévualisation de votre avatar:</p>
          <img alt={user.picture} src={user.picture} />
        </div>
        <div className="toggle-blue">
          <button type="submit" value="Submit">
            <span className="text-btn-black">Valider</span>
          </button>
        </div>
      </form>
    </div>
  );
}

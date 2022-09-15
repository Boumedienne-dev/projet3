import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/RegistrationUser.css";
import axios from "axios";
import PasswordAndConfirmPasswordRegistration from "../components/PasswordAndConfirmPasswordRegistration";

export default function RegistrationUser() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState({
    last_name: "",
    first_name: "",
    mail: "",
    password: "",
    picture: false,
  });

  const postUser = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/user`, { ...user })
      .then((res) => {
        console.error(res);
        console.error(res.data);
      });
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "sncf-exploration");
    data.append("cloud_name", "otire82");
    fetch("  https://api.cloudinary.com/v1_1/otire82/image/upload", {
      method: "post",
      body: data,
      sources: ["local", "url", "camera"],
    })
      .then((resp) => resp.json())
      .then((data1) => {
        setUrl(data1.url);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="">
      <h3 className="title-registration">
        Bienvenue sur le formulaire d'inscription:
      </h3>
      <p className="text-registration">
        En tant qu’utilisateur, tu pourras retrouver facilement- retrouver les
        activités que tu as ajoutées en favoris.
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
          <PasswordAndConfirmPasswordRegistration />
        </div>
        <div className="form-container">
          <label htmlFor="file">Photo de profil:</label>
          <input
            type="file"
            name="file"
            id="file"
            alt="Profil"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files[0]) &&
              setUser({ picture: e.target.value })
            }
          />
          <button className="btn-picture" type="button" onClick={uploadImage}>
            Charger votre photo
          </button>
        </div>
        <div className="review-picture">
          <p>Prévualisation de votre avatar:</p>
          <img alt={url} src={url} />
        </div>
        <div className="toggle-blue">
          <Link to="/compte_utilisateur">
            <button type="submit">
              <span className="text-btn-black">Valider</span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

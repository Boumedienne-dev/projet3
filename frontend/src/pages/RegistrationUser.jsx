import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/RegistrationUser.css";

export default function RegistrationUser() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
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
      <h3 className="title-registration">Bienvenue sur le formulaire d'inscription:</h3>
      <p className="text-registration">
        En tant qu’utilisateur, tu pourras retrouver facilement- retrouver les
        activités que tu as ajoutées en favoris.
      </p>
      <p className="text-require">* Champs obligatoires.</p>
      <form>
        <div className="form-container">
          <label htmlFor="name">Nom:*</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-container">
          <label htmlFor="firstname">Prénom:*</label>
          <input type="text" name="firstname" id="firstname" required />
        </div>
        <div className="form-container">
          <label htmlFor="email">Email:*</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-container">
          <label htmlFor="password">Mot de passe:*</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-container">
          <label htmlFor="password">Confirmez le mot de passe:*</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-container">
          <label htmlFor="file">Photo de profil:</label>
          <input
            type="file"
            name="file"
            id="file"
            alt="Profil"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="button" onClick={uploadImage}>
            Charger votre photo
          </button>
        </div>
        <div className="review-picture">
          <p>Prévualisation de votre avatar:</p>
          <img alt={url} src={url} />
        </div>
        <div className="toggle-pill-blue">
          <Link to="/compte_utilisateur">
            <button type="button">
              <span className="text-btn-black">Valider</span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

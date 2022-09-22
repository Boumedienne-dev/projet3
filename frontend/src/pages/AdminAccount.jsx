import plusIcon from "../assets/image/icone_plus.png";
import buttonAdmin from "../assets/image/Btnvalider.png";
import "../assets/style/AdminAccount.css";
import { useState } from "react";

export default function AdminAccount() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "sncf-exploration");
    data.append("cloud_name", "boumdev");
    fetch("  https://api.cloudinary.com/v1_1/boumdev/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data1) => {
        setUrl({ ...url, picture: data1.url });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <div>
        <h2 className="adminAccount">COMPTE ADMIN</h2>
        <h3 className="multipleUsers">Utilisateurs multiples</h3>
      </div>
      <form>
        <label>
          <input
            className="inputAdmin"
            type="text"
            placeholder="Moi (administrateur)"
            name="name"
          />
        </label>
      </form>
      <div className="lineActivity">
        <div>
          <img className="plusIconB" src={plusIcon} alt="icone plus" />
          <input className="addActivity" type="submit" value="Activites" />
        </div>
      </div>
      <div>
        <form action="#">
          <select className="regions" name="destination">
            <option selected="selected">Auvergne-Rhône-Alpes</option>
            <option>Bourgogne-Franche-comté</option>
            <option>Grand-Est</option>
            <option>Hauts-de-France</option>
            <option>Île-De-France</option>
            <option>Normandie</option>
            <option>Centre-Val-De-Loire</option>
            <option>Les Pays De La Loire</option>
            <option>Provence-Alpes-Côte d'Azur</option>
            <option>Corse</option>
            <option>Bretagne</option>
            <option>Nouvelle Aquitaine</option>
            <option>Occitanie</option>
          </select>
        </form>
      </div>
      <div>
        <form action="#">
          <select className="lines" name="destination">
            <option selected="selected">Ligne 1</option>
            <option>Ligne 2</option>
            <option>Ligne 3</option>
            <option>Ligne 4</option>
            <option>Ligne 5</option>
            <option>Ligne 6</option>
            <option>Ligne 7</option>
            <option>Ligne 8</option>
          </select>
        </form>
      </div>
      <div>
        <form action="#">
          <select className="city" name="destination">
            <option selected="selected">Amberieu</option>
            <option>Villefranche-sur-Saône</option>
            <option>Roanne</option>
            <option>Vienne</option>
          </select>
        </form>
        <input
          className="plusActivity"
          type="submit"
          value="Ajouter une activité"
        />
      </div>
      <div>
        <form action="#">
          <select className="themes" name="theme">
            <option selected="selected">Sport</option>
            <option>Restaurant</option>
            <option>Monuments</option>
          </select>
        </form>
      </div>
      <div>
        <form>
          <input className="description" type="text" placeholder="descriptif" />
        </form>
      </div>
      <div>
        <form>
          <input
            className="adress"
            type="text"
            placeholder="Rue, Code Postal et Ville"
          />
        </form>
      </div>
      <div>
        <div className="insertPicture">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit" onClick={uploadImage}>
            Charger
          </button>
        </div>
        <div>
          <img className="pictureAdmin" src={url} alt="admin" />
        </div>
        <div className="validateAdmin">
          <button type="submit" className="buttonAdmin">
            <img className="validateAdminB" src={buttonAdmin} alt="valider" />
          </button>
        </div>
      </div>
    </div>
  );
}

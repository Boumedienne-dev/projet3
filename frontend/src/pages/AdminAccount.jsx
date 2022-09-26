import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import plusIcon from "../assets/image/icone_plus.png";
import AdminInput from "../components/AdminInput";
import "../assets/style/AdminAccount.css";
import RegionsListAdmin from "../components/RegionsListAdmin";
import AllLinesListAdmin from "../components/AllLinesListAdmin";
import AllCityAdmin from "../components/AllCityAdmin";
import AllActivityAdmin from "../components/AllActivityAdmin";

export default function AdminAccount() {
  const [user, setUser] = useState("");
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`)
      .then((response) => response.data)
      .then((data) => setUser(data));
  }, []);

  const [regions, setRegions] = useState("");
  const [selectedRegionId, setSelectedRegionId] = useState(1);
  const [selectedLineId, setSelectedLineId] = useState(1);
  const [selectedCityId, setSelectedCityId] = useState(1);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setRegions(data));
  }, []);

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
          {user && (
            <AdminInput
              input
              type="text"
              placeholder="Moi (administrateur)"
              admin={user}
            />
          )}
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
          <RegionsListAdmin
            regions={regions}
            setSelectedRegionId={setSelectedRegionId}
          />
        </form>
      </div>
      <div>
        <form action="#">
          <AllLinesListAdmin
            selectedRegionId={selectedRegionId}
            setSelectedLineId={setSelectedLineId}
          />
        </form>
      </div>
      <div>
        <form action="#">
          <AllCityAdmin
            selectedLineId={selectedLineId}
            setSelectedCityId={setSelectedCityId}
          />
        </form>
        <form action="#">
          <AllActivityAdmin selectedCityId={selectedCityId} />
        </form>
      </div>
      <div>
        <form action="#">
          <select className="themes" name="theme">
            <option>Sport</option>
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
        <div className="toggle-blue">
          <button type="submit" value="Submit">
            <span className="text-btn-black">Valider</span>
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import AdminInput from "../components/AdminInput";
import "../assets/style/AdminAccount.css";
import RegionsListAdmin from "../components/RegionsListAdmin";
import AllLinesListAdmin from "../components/AllLinesListAdmin";
import AllCityAdmin from "../components/AllCityAdmin";
// import AllActivityAdmin from "../components/AllActivityAdmin";
import ThemesAdmin from "../components/ThemesAdmin";

export default function AdminAccount() {
  // const params = useParams();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/users/${params.id}`)
  //     .then((response) => response.data)
  //     .then((data) => setUser(data));
  // }, []);

  const [regions, setRegions] = useState("");
  const [selectedRegionId, setSelectedRegionId] = useState(1);
  const [selectedLineId, setSelectedLineId] = useState(1);
  const [selectedCityId, setSelectedCityId] = useState(1);
  const [selectedThemeId, setSelectedThemeId] = useState(1);
  const [activityName, setActivityName] = useState("");
  const [activityAddress, setActivityAddress] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityPicture, setActivityPicture] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setRegions(data));
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();
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
        setActivityPicture(data1.url);
      })
      .catch((err) => console.error(err));
  };

  const postActivity = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/activities`, {
        city: selectedCityId,
        theme: selectedThemeId,
        name: activityName,
        adress: activityAddress,
        description: activityDescription,
        picture: activityPicture,
      })
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch((error) => {
        console.error(error);
      });
    // navigate("/admininistrateur/activities");
  };

  return (
    <div>
      <h2 className="adminAccount">COMPTE ADMIN</h2>
      <form className="adminForm">
        <div>
          <RegionsListAdmin
            regions={regions}
            setSelectedRegionId={setSelectedRegionId}
          />
        </div>
        <div>
          <AllLinesListAdmin
            selectedRegionId={selectedRegionId}
            setSelectedLineId={setSelectedLineId}
          />
        </div>
        <div>
          <AllCityAdmin
            selectedLineId={selectedLineId}
            setSelectedCityId={setSelectedCityId}
          />
          {/* <form action="#">
            <AllActivityAdmin selectedCityId={selectedCityId} />
          </form> */}
        </div>
        <div>
          <ThemesAdmin setSelectedThemeId={setSelectedThemeId} />
        </div>
        <div>
          <input
            className="nameActivity"
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            placeholder="Nom de l'activité"
          />
        </div>
        <div>
          <input
            className="description"
            type="text"
            placeholder="descriptif"
            value={activityDescription}
            onChange={(e) => setActivityDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            className="adress"
            type="text"
            placeholder="Rue, Code Postal et Ville"
            value={activityAddress}
            onChange={(e) => setActivityAddress(e.target.value)}
          />
        </div>
        <div>
          <div className="insertPicture">
            <input type="file" onChange={(e) => uploadImage(e)} />
          </div>
          <div>
            <img
              className="pictureAdmin"
              src={activityPicture}
              alt={activityName}
            />
          </div>
          <div className="toggle-blue">
            <button
              type="submit"
              value="Submit"
              onClick={(e) => postActivity(e)}
            >
              <span className="text-btn-black">Valider</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

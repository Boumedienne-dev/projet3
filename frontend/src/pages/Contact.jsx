import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/Contact.css";

export default function Contact() {
  const [lastnameValue, setLastnameValue] = useState("");
  const [firstnameValue, setFirstnameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [pictureValue, setPictureValue] = useState("");
  const navigate = useNavigate();

  const postComment = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`, {
        lastname: lastnameValue,
        firstname: firstnameValue,
        mail: mailValue,
        comment: commentValue,
        picture: pictureValue,
        date: "2022-10-05",
      })
      .then(() => {
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        setPictureValue(data1.url);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="ContactContainer">
      <h2 className="contactUs">Nous Contacter</h2>
      <p className="ContactText">
        Merci de nous laisser vos questions, commentaires ou suggestions en
        complétant ce formulaire.
      </p>
      <form className="ContactForm" onSubmit={(e) => postComment(e)}>
        <p className="ContactRequired">*Champs obligatoires</p>
        <label className="ContactName" htmlFor="Nom" placeholder="Doe">
          Nom*
        </label>
        <input
          type="text"
          name="name"
          defaultValue={lastnameValue}
          onChange={(e) => setLastnameValue(e.target.value)}
          required
        />
        <label className="ContactFirstName" htmlFor="prenom" placeholder="Jhon">
          Prenom*
        </label>
        <input
          type="text"
          name="name"
          defaultValue={firstnameValue}
          onChange={(e) => setFirstnameValue(e.target.value)}
          required
        />
        <label
          className="ContactEmail"
          htmlFor="email"
          placeholder="Jhon.Doe@example.com"
        >
          Email*
        </label>
        <input
          type="email"
          email="email"
          defaultValue={mailValue}
          onChange={(e) => setMailValue(e.target.value)}
          required
        />
        <label
          className="ContactComment"
          htmlFor="message"
          placeholder="message"
        >
          Votre commentaire :*
        </label>
        <input
          className="ContactTextarera"
          type="textarera"
          name="message"
          defaultValue={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          required
        />
        <label className="ContactPicture" htmlFor="file">
          Photo:
        </label>
        <input type="file" accept="image/*" onChange={(e) => uploadImage(e)} />
        <div className="ReviewContact">
          <p>Prévualisation de votre photo:</p>
          <img
            className="ReviewContactPicture"
            alt={lastnameValue}
            src={pictureValue}
          />
        </div>
        <div className="ContactBtnPos">
          <button className="ContactToggleBlue" type="submit" value="Submit">
            <span className="ContactTextBlack">Valider</span>
          </button>
        </div>
      </form>
    </div>
  );
}

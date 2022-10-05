import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/Contact.css";

export default function Contact() {
  const [comment, setComment] = useState({
    lastname: "",
    firstname: "",
    mail: "",
    comment: "",
    picture: "",
  });
  const navigate = useNavigate();

  const postComment = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/comments`)
      .then((res) => {
        console.error(res);
        console.error(res.data);
      })
      .then(() => navigate("/"));
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
        setComment({ ...comment, picture: data1.url });
      })
      .catch((err) => console.error(err));
  };

  function handleInputProfile(e) {
    uploadImage(e);
    setComment({ ...comment, picture: e.target.value });
  }
  return (
    <div className="ContactContainer">
      <h2 className="contactUs">Nous Contacter</h2>
      <p className="ContactText">
        Merci de nous laisser vos questions, commentaires ou suggestions en
        complétant ce formulaire.
      </p>
      <form
        className="ContactForm"
        onSubmit={(e) => {
          e.preventDefault();
          postComment();
        }}
      >
        <p className="ContactRequired">*Champs obligatoires</p>
        <label className="ContactName" htmlFor="Nom" placeholder="Doe">
          Nom*
        </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setComment.lastname(e.target.value)}
          required
        />
        <label className="ContactFirstName" htmlFor="prenom" placeholder="Jhon">
          Prenom*
        </label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setComment({
              ...comment,
              firstName: e.target.value,
            })
          }
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
          onChange={(e) =>
            setComment({
              ...comment,
              mail: e.target.value,
            })
          }
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
          onChange={(e) =>
            setComment({
              ...comment,
              comment: e.target.value,
            })
          }
          required
        />
        <label className="ContactPicture" htmlFor="file">
          Photo:
        </label>
        <input
          type="file"
          name="file"
          id="file"
          alt="Photo"
          accept="image/*"
          onChange={(e) => handleInputProfile(e)}
        />
        <div className="ReviewContact">
          <p>Prévualisation de votre photo:</p>
          <img
            className="ReviewContactPicture"
            alt={comment.picture}
            src={comment.picture}
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

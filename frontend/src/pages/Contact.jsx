import "../assets/style/Contact.css";
import { Link } from "react-router-dom";
import Btnenvoyer from "../assets/image/Btnenvoyer.png";

export default function Contact() {
  return (
    <div className="FormContainer">
      <h2 className="contactUs">Nous Contacter</h2>
      <p className="text-contact">
        Merci de nous laisser vos questions, commentaires ou suggestions en
        complétant ce formulaire.
      </p>
      <form>
        <p className="requiredFields">*Champs obligatoires</p>
        <label className="name" htmlFor="Nom" placeholder="Doe">
          Nom*
        </label>
        <input type="text" name="name" />
        <label className="firstName" htmlFor="prenom" placeholder="Jhon">
          Prenom*
        </label>
        <input className="input-firstName" type="text" name="name" />
        <label
          className="email"
          htmlFor="email"
          placeholder="Jhon.Doe@example.com"
        >
          Email*
        </label>
        <input className="input-email" type="email" email="email" />
        <label className="comment" htmlFor="message" placeholder="message">
          Votre commentaire :*
        </label>
        <textarea className="textarera-comment" name="message" />
      </form>
      <Link to="/accueil" className="buttonSubmit">
        <img src={Btnenvoyer} alt="envoi-formulaire" />
      </Link>
    </div>
  );
}

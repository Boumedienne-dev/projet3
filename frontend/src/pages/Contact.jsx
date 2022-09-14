import "../assets/style/Contact.css";
import { Link } from "react-router-dom";
import Btnenvoyer from "../assets/image/Btnenvoyer.png";

export default function Contact() {
  return (
    <div className="FormContainer">
      <h2 className="nous-contacter">Nous Contacter</h2>
      <p className="texte-contact">
        Merci de nous laisser vos questions, commentaires ou suggestions en
        complétant ce formulaire.
      </p>
      <form>
        <p className="champs-obligatoires">*Champs obligatoires</p>
        <label className="nom" htmlFor="Nom" placeholder="Doe">
          Nom*
        </label>
        <input type="text" name="name" />
        <label className="prenom" htmlFor="prenom" placeholder="Jhon">
          Prenom*
        </label>
        <input className="input-prenom" type="text" name="name" />
        <label
          className="email"
          htmlFor="email"
          placeholder="Jhon.Doe@example.com"
        >
          Email*
        </label>
        <input className="input-email" type="email" email="email" />
        <label className="commentaire" htmlFor="message" placeholder="message">
          Votre commentaire :*
        </label>
        <textarea className="textarera-commentaire" name="message" />
      </form>
      <Link to="/message_recu" className="buttonSubmit">
        <img src={Btnenvoyer} alt="envoi-formulaire" />
      </Link>
    </div>
  );
}

import "../assets/style/Contact.css";

export default function Contact() {
  return (
    <div className="ContactContainer">
      <h2 className="contactUs">Nous Contacter</h2>
      <p className="ContactText">
        Merci de nous laisser vos questions, commentaires ou suggestions en
        complétant ce formulaire.
      </p>
      <form className="ContactForm">
        <p className="ContactRequired">*Champs obligatoires</p>
        <label className="ContactName" htmlFor="Nom" placeholder="Doe">
          Nom*
        </label>
        <input type="text" name="name" />
        <label className="ContactFirstName" htmlFor="prenom" placeholder="Jhon">
          Prenom*
        </label>
        <input type="text" name="name" />
        <label
          className="ContactEmail"
          htmlFor="email"
          placeholder="Jhon.Doe@example.com"
        >
          Email*
        </label>
        <input type="email" email="email" />
        <label
          className="ContactComment"
          htmlFor="message"
          placeholder="message"
        >
          Votre commentaire :*
        </label>
        <input className="ContactTextarera" type="textarera" name="message" />
        <div className="ContactBtnPos">
          <button className="ContactToggleBlue" type="submit" value="Submit">
            <span className="ContactTextBlack">Valider</span>
          </button>
        </div>
      </form>
    </div>
  );
}

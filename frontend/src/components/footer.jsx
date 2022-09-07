import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer_css">
      <ul className="footer">
        <li className="liWithName">
          <Link to="/home">accueil</Link>
        </li>
        <li className="contact_css">
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/accountuser">Mon Compte</Link>
        </li>
        <img
          className="sncf-explo-logo"
          src="../assets/image/sncfexplowhite.png"
          alt="logo de sncf exploration"
        />
        <li>
          <Link
            to="/instagram"
            img
            src="frontend\src\assets\image\instagram.svg"
          />
        </li>
        <li>
          <Link to="tiktok" img src="frontend\src\assets\image\tiktok.svg" />
        </li>
        <li>
          <Link
            to="/facebook"
            img
            src="frontend\src\assets\image\facebook.png"
          />
        </li>
        <li>
          <Link to="/twitter" img src="frontend\src\assets\image\twitter.svg" />
        </li>
        <li>
          <Link
            to="/pinterest"
            img
            src="frontend\src\assets\image\pinterest.svg"
          />
        </li>
      </ul>
    </div>
  );
}

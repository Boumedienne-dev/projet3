import { Link } from "react-router-dom";
import Tiktok from "../assets/image/tiktok.png";
import Fb from "../assets/image/facebook.png";
import Insta from "../assets/image/instagram1.png";
import Twitter from "../assets/image/twitter.png";
import Pinterest from "../assets/image/pinterest.png";
import "../assets/style/Footer.css";

export default function Footerb() {
  return (
    <div className="footer_css">
      <div className="menu">
        <ul className="planForSite">
          <li>
            <p>Plan du Site</p>
          </li>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/connexion">Mon Compte</Link>
          </li>
        </ul>
      </div>
      <div className="sncf-connect-logo">
        <a href="https://www.sncf-connect.com/">
          <img
            src="https://res.cloudinary.com/otire82/image/upload/v1662553361/logo/SNCFConnectLogo_x5eclf.svg"
            alt="sncf connect"
          />
        </a>
      </div>
      <div>
        <ul className="social-networks">
          <li>
            <a href="https://www.instagram.com/sncfconnect/?hl=fr">
              <img src={Insta} alt="logo d'instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@sncfconnect?lang=fr">
              <img src={Tiktok} alt="logo de tiktok" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/SNCFConnect/">
              <img src={Fb} alt="logo de facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/sncfconnect">
              <img src={Twitter} alt="logo de twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.fr/sncfconnect/">
              <img src={Pinterest} alt="logo de pinterest" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

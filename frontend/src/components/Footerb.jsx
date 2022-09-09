import { Link } from "react-router-dom";
import Tiktok from "../assets/image/tiktok.png";
import Fb from "../assets/image/facebook.png";
import Insta from "../assets/image/instagram1.png";
import Twitter from "../assets/image/twitter.png";
import Pinterest from "../assets/image/pinterest.png";

export default function Footerb() {
  return (
    <div className="footer_css">
      <div className="menu">
        <ul className="menu">
          <li className="plan-du-site">
            <Link to="plandusite">Plan du Site</Link>
          </li>
          <li>
            <Link to="/home">accueil</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/accountuser">Mon Compte</Link>
          </li>
        </ul>
      </div>
      <div className="sncf-connect-logo">
        <img
          src="https://res.cloudinary.com/otire82/image/upload/v1662553361/logo/SNCFConnectLogo_x5eclf.svg"
          alt="logo de sncf exploration"
        />
      </div>
      <div className="social-network">
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
            <a href="www.google.com">
              <img src={Fb} alt="logo de facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SNCFConnect?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
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

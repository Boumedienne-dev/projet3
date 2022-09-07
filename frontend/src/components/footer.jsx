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
          src="https://res.cloudinary.com/otire82/image/upload/v1662553361/logo/SNCFConnectLogo_x5eclf.svg"
          alt="logo de sncf exploration"
        />
        <li>
          <Link
            to="/instagram"
            img
            src="https://res.cloudinary.com/otire82/image/upload/v1662553360/logo/instagram_lho6sp.svg"
            alt="logo d'instagram"
          />
        </li>
        <li>
          <Link
            to="tiktok"
            img
            src="https://res.cloudinary.com/otire82/image/upload/v1662553361/logo/tiktok_kn7lua.svg"
            alt="logo de tiktok" 
          />
        </li>
        <li>
          <Link
            to="/facebook"
            img
            src="https://res.cloudinary.com/otire82/image/upload/v1662553360/logo/facebook_sbn4rk.svg"
            alt="logo de facebook"
          />
        </li>
        <li>
          <Link
            to="/twitter"
            img
            src="https://res.cloudinary.com/otire82/image/upload/v1662553361/logo/twitter_shp47g.svg"
            alt="logo de twitter"
          />
        </li>
        <li>
          <Link
            to="/pinterest"
            img
            src="https://res.cloudinary.com/otire82/image/upload/v1662553361/logo/pinterest_k9pjvi.svg"
            alt="logo de pinterest"
          />
        </li>
      </ul>
    </div>
  );
}

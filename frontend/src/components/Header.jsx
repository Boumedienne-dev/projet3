import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/Navbar.css";

export default function Header() {
  return (
    <div>
      <div className="navbarmain">
        <ul className="navbar">
          <li className="liWithName">
            <Link to="/">
              <img
                className="sncf-explo-logo"
                src="https://res.cloudinary.com/otire82/image/upload/v1662557593/logo/sncfexplowhite_wxzckg.png"
                alt="logo de sncf exploration"
              />
            </Link>
          </li>
          <li className="liWithName">
            <Link to="/acces_compte">
              <img
                className="user-account-logo"
                src="https://res.cloudinary.com/otire82/image/upload/v1662558227/logo/userHC_n5pb8l.png"
                alt="logo du compte utilisateur"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

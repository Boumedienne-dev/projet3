import React from "react";
import { Link } from "react-router-dom";
import "@assets/style/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbarmain">
        <ul className="navbar">
          <li className="liWithName">
            <Link to="/">
              <img
                className="sncf-explo-logo"
                src="../assets/image/sncfexplowhite.png"
                alt="logo de sncf exploration"
              />
            </Link>
          </li>
          <li className="liWithName">
            <Link to="/">
              <img
                className="user-account-logo"
                src="../assets/image/userHC.png"
                alt="logo du compte utilisateur"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

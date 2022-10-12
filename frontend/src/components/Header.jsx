import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../assets/style/Navbar.css";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

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
          {isAuthenticated ? (
            <li className="liWithName">
              <Link to="/compte_utilisateur">
                {/* <span>{AuthContext.first_name}</span> */}
                <img
                  className="user-account-logo"
                  src="https://res.cloudinary.com/otire82/image/upload/v1662558227/logo/userCO_urz833.png"
                  alt="logo du compte utilisateur"
                />
              </Link>
            </li>
          ) : (
            <li className="liWithName">
              <Link to="/acces_compte">
                <img
                  className="user-account-logo"
                  src="https://res.cloudinary.com/otire82/image/upload/v1662558227/logo/userHC_n5pb8l.png"
                  alt="logo du compte utilisateur"
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

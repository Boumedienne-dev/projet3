/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AccountUser from "./pages/AccountUser";
import Contact from "./pages/Contact";
import City from "./pages/City";
import AllLines from "./pages/AllLines";
import User from "./pages/User";
import RegistrationUser from "./pages/RegistrationUser";
import AdminAccount from "./pages/AdminAccount";
import Header from "./components/Header";
import Footerb from "./components/Footerb";
import UserConnexion from "./pages/UserConnexion";
import Home from "./pages/Home";
import AllCity from "./pages/AllCity";
import AuthContext from "./context/AuthContext";
import AuthApi from "./services/AuthApi";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import CurrentUserContext from "./context/CurrentUserContext";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ModifyPasswordPage from "./pages/ModifyPasswordPage";
import ModifyPasswordPageBis from "./pages/ModifyPasswordPageBis";

import "./App.css";
import "./assets/style/Footer.css";

AuthApi.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthApi.isAuthenticated
  );

  const [currentUser, setCurrentUser] = useState(AuthApi.isCurrentUser);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/les_villes/:id" element={<AllCity />} />
              <Route
                path="/compte_utilisateur"
                element={
                  <PrivateRoute>
                    <AccountUser />
                  </PrivateRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/les_lignes/:id" element={<AllLines />} />
              <Route path="/ville/:id" element={<City />} />
              <Route path="/acces_compte" element={<User />} />
              <Route path="/connexion" element={<UserConnexion />} />
              <Route path="/inscription" element={<RegistrationUser />} />
              <Route
                path="/administrateur"
                element={
                  <AdminRoute>
                    <AdminAccount />
                  </AdminRoute>
                }
              />
              <Route
                path="/administrateur/:id"
                element={
                  <AdminRoute>
                    <AdminAccount />
                  </AdminRoute>
                }
              />
              <Route path="/acces_refuse" element={<UnauthorizedPage />} />
              <Route
                path="/modification/:token"
                element={<ModifyPasswordPageBis />}
              />
              <Route path="/modification/" element={<ModifyPasswordPage />} />
            </Routes>
            <Footerb />
          </div>
        </Router>
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

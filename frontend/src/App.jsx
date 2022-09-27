/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable prettier/prettier */
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

import "./App.css";
import "./assets/style/Footer.css";

AuthApi.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthApi.isAuthenticated
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
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
            <Route path="/ville" element={<City />} />
            <Route path="/acces_compte" element={<User />} />
            <Route path="/connexion" element={<UserConnexion />} />
            <Route path="/inscription" element={<RegistrationUser />} />
            <Route
              path="/administrateur/"
              element={
                <PrivateRoute>
                  <AdminAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/administrateur/:id"
              element={
                <PrivateRoute>
                  <AdminAccount />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footerb />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

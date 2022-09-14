/* eslint-disable prettier/prettier */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountUser from "./pages/AccountUser";
import Contact from "./pages/Contact";
import MessageReceived from "./pages/MessageReceived";
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

import "./App.css";
import "./assets/style/Footer.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/accueil" element={<Home />} />
          <Route path="/les_villes" element={<AllCity />} />
          <Route path="/compte_utilisateur" element={<AccountUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message_recu" element={<MessageReceived />} />
          <Route path="/ligne" element={<AllLines />} />
          <Route path="/les_lignes" element={<AllLines />} />
          <Route path="/ville" element={<City />} />
          <Route path="/acces_compte" element={<User />} />
          <Route path="/connexion" element={<UserConnexion />} />
          <Route path="/inscription" element={<RegistrationUser />} />
          <Route path="/administrateur" element={<AdminAccount />} />
        </Routes>
        <Footerb />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "@assets/style/Footer.css";
import Region from "@pages/Region";
import AccountUser from "@pages/AccountUser";
import Contact from "@pages/Contact";
import City from "@pages/City";
import AllLines from "@pages/AllLines";
import ConnexionUser from "@pages/ConnexionUser";
import RegistrationUser from "@pages/RegistrationUser";
import AdminAccount from "@pages/AdminAccount";
import Navbar from "@components/Navbar";
import Footer from "@components/footer";
import Home from "@pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/region" element={<Region />} />
          <Route path="/accountuser" element={<AccountUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alllines" element={<AllLines />} />
          <Route path="/city" element={<City />} />
          <Route path="/connexionuser" element={<ConnexionUser />} />
          <Route path="/registrationuser" element={<RegistrationUser />} />
          <Route path="/adminaccount" element={<AdminAccount />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

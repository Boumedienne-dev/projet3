import { Link } from "react-router-dom";

export default function Home() {
  return (
    <header>
      <div className="">
        <ul className="">
          <li>
            <Link to="/">Logo sncf exploration</Link>
          </li>
          <li>
            <Link to="/accountuser">Mon compte</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <div className="">
          <ul className="">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

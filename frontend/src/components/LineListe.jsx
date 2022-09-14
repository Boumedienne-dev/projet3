import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Line from "./Line";

export default function RegionList() {
  const [lines, setLines] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines`)
      .then((response) => response.data)
      .then((data) => setLines(data));
  }, []);

  return (
    <div className="line-esp-foot">
      {lines &&
        lines.map((line) => (
          <Link to={`/lines/${line.id}`} key={line.id}>
            <Line line={line} />
          </Link>
        ))}
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LinePage() {
  const [lines, setLines] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${params.id}`)
      .then((response) => response.data)
      .then((data) => setLines(data));
  }, []);

  return (
    <div>
      <h2>Page d'une ligne</h2>
      {lines &&
        lines.map((line) => (
          <div>
            <h2>{line.line_name}</h2>
          </div>
        ))}
    </div>
  );
}

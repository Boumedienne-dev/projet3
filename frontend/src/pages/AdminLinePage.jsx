import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminLinePage() {
  const [lines, setLines] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines`)
      .then((response) => response.data)
      .then((data) => setLines(data));
  }, []);

  return (
    <div>
      {lines ? (
        <table>
          <thead>
            <tr>
              <th>Nom de la région</th>
              <th>Nom de ligne</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((region) => (
              <tr key={region.id}>
                <td>{region.id_region}</td>
                <td>{region.line_name}</td>
                <th>{region.picture}</th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

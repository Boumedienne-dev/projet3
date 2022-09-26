import axios from "axios";
import { useEffect, useState } from "react";

export default function AllLinesListAdmin({
  selectedRegionId,
  setSelectedLineId,
}) {
  const [lines, setLines] = useState("");

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/regions/${selectedRegionId}/lines`
      )
      .then((response) => response.data)
      .then((data) => setLines(data));
  }, [selectedRegionId]);

  return (
    <select
      className="destination"
      onChange={(e) => setSelectedLineId(e.target.value)}
    >
      {lines &&
        lines.map((line) => (
          <option key={line.id} value={line.id}>
            {line.line_name}
          </option>
        ))}
    </select>
  );
}

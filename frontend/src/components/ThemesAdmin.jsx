import { useState, useEffect } from "react";
import axios from "axios";

export default function ThemesAdmin({ setSelectedThemeId }) {
  const [themes, setThemes] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/themes`)
      .then((response) => response.data)
      .then((data) => setThemes(data));
  }, []);

  return (
    <select className="themes">
      {themes &&
        themes.map((theme) => (
          <option
            onChange={(e) => setSelectedThemeId(e.target.value)}
            key={theme.value}
            value={theme.value}
          >
            {theme.label}
          </option>
        ))}
    </select>
  );
}

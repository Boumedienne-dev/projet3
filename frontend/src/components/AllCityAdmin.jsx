import { useState, useEffect } from "react";
import axios from "axios";

export default function AllCityAdmin({ selectedLineId, setSelectedCityId }) {
  const [cities, setCities] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${selectedLineId}/cities`)
      .then((response) => response.data)
      .then((data) => setCities(data));
  }, [selectedLineId]);

  return (
    <select
      className="city"
      onChange={(e) => setSelectedCityId(e.target.value)}
    >
      {cities &&
        cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.city_name}
          </option>
        ))}
    </select>
  );
}

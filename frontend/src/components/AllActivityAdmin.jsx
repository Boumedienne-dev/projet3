import { useState, useEffect } from "react";
import axios from "axios";

export default function AllActivityAdmin({ selectedCityId }) {
  const [activities, setactivities] = useState("");

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/cities/${selectedCityId}/activities`
      )
      .then((response) => response.data)
      .then((data) => setactivities(data));
  }, [selectedCityId]);

  return (
    <select className="plusActivity">
      {activities &&
        activities.map((activity) => (
          <option key={activity.activity_name} value={activity.activity_name}>
            {activity.activity_name}
          </option>
        ))}
    </select>
  );
}

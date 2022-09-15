import Line from "@components/Line";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LinePage() {
  const [line, setLine] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines/${params.id}`)
      .then((response) => response.data)
      .then((data) => setLine(data));
  }, []);

  return (
    <>
      <h2>Page d'une ligne</h2>
      <div>
        <Line line={line} />
      </div>
    </>
  );
}

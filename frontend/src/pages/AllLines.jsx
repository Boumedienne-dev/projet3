import LineList from "@components/LineListe";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../line.css";

export default function AllLines() {
  const [getLines, setGetLines] = useState();
  const [getRegion, setGetRegion] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions/${id}`)
      .then((response) => response.data)
      .then((data) => setGetRegion(data));
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions/${id}/lines`)
      .then((response) => response.data)
      .then((data) => setGetLines(data));
  });
  return (
    <div className="">
      <img
        className="AllLinesRegionImg"
        src={getRegion.picture}
        alt={getRegion.name}
      />
      {getLines &&
        getLines.map((line) => (
          <div>
            <h2>{line.line_name}</h2>
          </div>
        ))}
      <h1 className="line-h1">DE LYON PART DIEU</h1>
      <LineList />
      <div>
        <Link to="/city">Lien sur Ville et ses activités</Link>
      </div>
    </div>
  );
}

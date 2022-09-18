import { Link } from "react-router-dom";
import LineList from "../components/LineListe";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllLinesList from "../components/AllLinesList";
import "../assets/style/allLines.css";

export default function AllLines() {
  const [getLines, setGetLines] = useState("");
  const [getRegion, setGetRegion] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions/${id}`)
      .then((response) => response.data)
      .then((data) => setGetRegion(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions/${id}/lines`)
      .then((response) => response.data)
      .then((data) => setGetLines(data));
  }, []);

  return (
    <div className="">
      <img
        className="AllLinesRegionImg"
        src={getRegion.picture}
        alt={getRegion.name}
      />
      <p>{getRegion.description}</p>
      {getRegion.id === 1 ? (
        <h1 className="line-h1">DE LYON PART DIEU</h1>
      ) : (
        <h2>Page en cours de construction</h2>
      )}
      {getLines &&
        getLines.map((line) => <AllLinesList key={line.id} line={line} />)}
    </div>
  );
}

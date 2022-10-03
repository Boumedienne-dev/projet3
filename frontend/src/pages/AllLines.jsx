import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
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
      <p className="AllLinesRegionText">{getRegion.description}</p>
      {getRegion.id === 1 ? (
        <h2 className="line-h1">DE LYON PART DIEU</h2>
      ) : (
        <div className="constructionImage">
          <h2 className="rémiePasDeClass">Page en cours de construction</h2>
          <img
            src="https://res.cloudinary.com/otire82/image/upload/v1664545436/construction/en-construction_vldcnz.jpg"
            alt=""
            srcSet=""
          />
        </div>
      )}
      <div>
        <nav className="nav-all-lines lineposflex">
          {getLines &&
            getLines.map((line) => <AllLinesList key={line.id} line={line} />)}
        </nav>
      </div>
    </div>
  );
}

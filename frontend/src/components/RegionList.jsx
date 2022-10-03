import { Link } from "react-router-dom";

function RegionList({ region }) {
  return (
    <div className="homeRegionContainers">
      <Link to={`/les_lignes/${region.id}`}>
        <div className="homeRegionContainersChild" key={region.id}>
          <img
            className="homeRegionImg"
            src={region.picture}
            alt={region.name}
          />
          <h4 className="homeRegionTitle">{region.name}</h4>
        </div>
      </Link>
    </div>
  );
}

export default RegionList;

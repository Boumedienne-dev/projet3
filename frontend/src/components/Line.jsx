export default function Line({ line }) {
  return (
    <div className="line-map">
      <div>
        <div>
          {line.picture ? (
            <img
              className="line-map-img"
              src={line.picture}
              alt={line.line_name}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <p>{line.line_name}</p>
    </div>
  );
}

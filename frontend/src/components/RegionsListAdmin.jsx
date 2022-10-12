export default function RegionsListAdmin({ regions, setSelectedRegionId }) {
  return (
    <select
      className="regions"
      onChange={(e) => setSelectedRegionId(e.target.value)}
    >
      {regions &&
        regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
    </select>
  );
}

import Planet from "./Planet";

function Table({ planets }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Terrain</th>
          <th>Surface Water Percentage</th>
          <th>Population</th>
          <th>Residents</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <Planet planet={planet} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

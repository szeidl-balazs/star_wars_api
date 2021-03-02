import Planet from "./Planet";
import { showRes } from "./ajax";

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
        {planets.map((planet, index) => (
          <Planet planet={planet} showResidents={showRes} key={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;

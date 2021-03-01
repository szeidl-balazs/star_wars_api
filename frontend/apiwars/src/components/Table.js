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
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>
              <button>{planet.residents.length} residents</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

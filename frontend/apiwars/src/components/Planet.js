function Planet({ planet }) {
  return (
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
  );
}

export default Planet;

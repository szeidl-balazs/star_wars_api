function Planet({ planet }) {
  let residentBtn = "";

  if (planet.residents.length === 0) {
    residentBtn = "No known residents";
  } else {
    residentBtn = <button>{planet.residents.length} resident(s)</button>;
  }

  return (
    <tr key={planet.name}>
      <td>{planet.name}</td>
      <td>{planet.diameter}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.population}</td>
      <td>{residentBtn}</td>
    </tr>
  );
}

export default Planet;

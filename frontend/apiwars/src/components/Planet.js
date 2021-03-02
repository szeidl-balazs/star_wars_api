function Planet({ planet, showResidents }) {
  let residentBtn = "";

  if (planet.residents.length === 0) {
    residentBtn = "No known residents";
  } else {
    residentBtn = (
      <button onClick={showResidents}>
        {planet.residents.length} resident(s)
      </button>
    );
  }

  return (
    <tr>
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

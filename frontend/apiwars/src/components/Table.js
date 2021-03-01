function Table({ planets }) {
  return (
    <div>
      {planets.map((planet) => (
        <h2 key={planet.name}>{planet.name}</h2>
      ))}
    </div>
  );
}

export default Table;

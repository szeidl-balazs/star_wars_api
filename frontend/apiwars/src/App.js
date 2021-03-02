import "./App.scss";
import Table from "./components/Table";
import { useState } from "react";
import { usePlanets } from "./components/fetch";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const planets = usePlanets(currentPage);

  function nextPage(e) {
    planets.next !== null ? setCurrentPage(currentPage + 1) : setCurrentPage(6);
  }

  function prevPage() {
    planets.previous !== null
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(1);
  }

  if (planets.results === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <h1>Star Wars universe planets</h1>
      <button onClick={prevPage}>previous</button>
      <button onClick={nextPage}>next</button>
      <Table planets={planets.results}></Table>
    </div>
  );
}

export default App;

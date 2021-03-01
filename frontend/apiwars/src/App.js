import "./App.scss";
import Table from "./components/Table";
import { useState } from "react";
import { usePlanets } from "./components/fetch";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const planets = usePlanets(currentPage);

  if (planets.results === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <Table planets={planets.results}></Table>
    </div>
  );
}

export default App;

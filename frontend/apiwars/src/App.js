import "./scss/App.scss";
import Tables from "./components/Tables";
import { useState } from "react";
import { usePlanets } from "./components/fetch";
import { Header } from "./components/Header";
/*import Modaltable from "./components/Modaltable";*/

//Bootstrap
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
 

  const planets = usePlanets(currentPage);

  function nextPage() {
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
      <Header/>
      <div className="table-container">
        <h1>Star Wars universe planets</h1>
        <Button className="pagebutton" variant="primary" active onClick={prevPage}>Previous</Button>
        <Button className="pagebutton" variant="primary" active onClick={nextPage}>Next</Button>
        <Tables planets={planets.results}></Tables>
        {/*<Modaltable residentsArray={planets.results[0].residents} />*/}
      </div>
    </div>
  );
}


export default App;

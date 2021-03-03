import "./App.scss";
import Table from "./components/Table";
import { useState } from "react";
import { usePlanets } from "./components/fetch";

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

  /*
  let docBod = document.getElementById('docBod');
  let f = 1;
  let req = new XMLHttpRequest();
  let URLhost = 'https://swapi.dev/api/planets/?page=' + f;
  req.open('GET', URLhost, true);
  req.addEventListener('load', function() {
    if (req.status >= 200 && req.status < 400) {
      let response = JSON.parse(req.responseText);
      console.log(response);
      let planetHead = document.createElement('h3');
      docBod.appendChild(planetHead);
      planetHead.textContent = 'Planets Page - ' + f;
      let planetList = document.createElement('ol');
      planetHead.appendChild(planetList);
  
      for (let k = 0; k < response.results.length; k++) {
        (function(y) {
          let planetIn = document.createElement('li');
          planetIn.textContent = response.results[y].name;
          if (response.results[y].films.length > 0) {
            let movieHead = document.createElement('h6');
            movieHead.textContent = 'Movie Appearancess:';
            planetIn.appendChild(movieHead)
            let movieList = document.createElement('ol');
            movieHead.appendChild(movieList);
            for (let e = 0; e < response.results[y].films.length; e++) {
              (function(x) {
                let newURLhost = response.results[y].films[x];
                let newReq = new XMLHttpRequest();
                newReq.open('GET', newURLhost, true);
                newReq.addEventListener('load', function(){
                  if(newReq.status >= 200 && newReq.status < 400){
                    let newResponse = JSON.parse(newReq.responseText);
                    let movie = document.createElement('li');
                    movie.textContent = newResponse.title;
                    movieList.appendChild(movie);
                  } else {
                    console.log("Error in network request: " + newReq.statusText);
                  }});
                newReq.send();
              })(e);
            }
          }
          planetList.appendChild(planetIn);
        })(k);
      }
    } else {
      console.log('Error in network request: ' + req.statusText);
    }
  });
  req.send();
  */

  return (
    <div className="App">
      <h1>Star Wars universe planets</h1>
      <button onClick={prevPage}>previous</button>
      <button onClick={nextPage}>next</button>
      <Table planets={planets.results}></Table>
      <div id="docBod"></div>
    </div>
  );
}

export default App;

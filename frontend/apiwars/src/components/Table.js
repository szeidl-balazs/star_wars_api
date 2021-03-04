import Planet from "./Planet";
import React, { useState } from "react";
import Modaltable from "./Modaltable";

function Table({ planets }) {
  const [residentUrl, setResidentUrl] = useState([]);
  const [btnClick, setBtnClick] = useState(false);

  let modale = "";

  const clickHandler = () => {
    setBtnClick(false);
  };

  if (btnClick) {
    modale = (
      <div>
        <Modaltable residentsArray={residentUrl} />
        <button onClick={clickHandler}>Close</button>
      </div>
    );
  } else {
    modale = "";
  }

  return (
    <div>
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
            <Planet
              planet={planet}
              key={index}
              setResidentUrl={setResidentUrl}
              setBtnClick={setBtnClick}
            />
          ))}
        </tbody>
      </table>
      {modale}
    </div>
  );
}

export default Table;

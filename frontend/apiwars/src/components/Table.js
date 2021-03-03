import Planet from "./Planet";
import React, {useState} from 'react';
import Modaltable from './Modaltable';


function Table({ planets }) {
  const [residentUrl, setResidentUrl] = useState([]);
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
          <Planet planet={planet} key={index} setResidentUrl={setResidentUrl} />
        ))}
      </tbody>
    </table>
    <Modaltable residentsArray={residentUrl} />
    </div>
  );
}

export default Table;

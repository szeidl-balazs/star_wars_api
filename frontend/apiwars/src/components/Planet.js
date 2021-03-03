import React, {useState, useEffect} from 'react';

function Planet({ planet, setResidentUrl }) {
  let residentBtn = "";

  const [btnClick, setBtnClick] = useState(false) 
  
  
  useEffect (() => {
    setBtnClick();    
  }, [btnClick]);

  const clickHandler = () => {
    setBtnClick(true);
    setResidentUrl(planet.residents);  //a residentUrl statet írjuk át a residenseket tartalmazó objectekre
  };

  if (planet.residents.length === 0) {
    residentBtn = "No known residents";
  } else {
    residentBtn = (
      <button onClick={clickHandler}>
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

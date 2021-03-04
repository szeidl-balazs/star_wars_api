import Resident from "./Residents";

const Modaltable = ({ residentsArray }) => {
  return (
    <div>
      <h1>Residents of</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
            <th>Skin color</th>
            <th>Eye Color</th>
            <th>Birth year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {residentsArray.map((resident, index) => (
            <Resident key={index} residentData={resident} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Modaltable;

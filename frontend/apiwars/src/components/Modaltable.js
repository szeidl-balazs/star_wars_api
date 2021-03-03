import Resident from './Residents';

const Modaltable = ({ residentsArray }) => {

	return (
		<tbody> {residentsArray.map((resident, index) => 
		<Resident key={index} residentData={resident} />)} </tbody> //resident egy url
	);
}

export default Modaltable;
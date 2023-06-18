import Table from "./Table";
import useStore from "../Store";
function NewWorkout() {
  // const storeArry = useStore((state: any) => state.temporaryWorkout);
  // const [table, setTable] = useState({});
	
  const handleClick = () => {
  	console.log("saving ...")
		console.log(grab)}
	;
  return (
    <>
      <Table></Table>
      <button onClick={handleClick}>Save Workout</button>
    </>
  );
}

export default NewWorkout;

// setTable -> props tree until row
// TO-DO grab templateWorkouts form the store and send it using fetch to endpoint of backend

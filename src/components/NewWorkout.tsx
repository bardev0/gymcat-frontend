import Table from "./Table";
import useStore from "../Store";
import { useEffect, useState } from "react";
function NewWorkout() {
  // const storeArry = useStore((state: any) => state.temporaryWorkout);
  // const [table, setTable] = useState({});

  const [value, setValue] = useState(useStore.getState().startingTemplate);

  // redo for learning
  useEffect(() => {
    const unsubscribe = useStore.subscribe(
      (newValue) => {
        setValue(newValue);
      },
      (state) => state.value
    );

    return () => {
      unsubscribe();
    };
  }, []);

  // remove hardcode endpiont
	//
  const handleClick = async () => {
    let respons = await fetch("http://localhost:5001/addWorkout", {
			headers: {'Content-Type': 'application/json'},
      method: "POST",
      mode: "cors",
      body: JSON.stringify({"work": value.startingTemplate}),
    }) 
		}
	

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

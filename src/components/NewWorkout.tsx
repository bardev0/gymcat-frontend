import Table from "./Table";
import useStore from "../Store";
import { useEffect, useState } from "react";
function NewWorkout() {
  // const storeArry = useStore((state: any) => state.temporaryWorkout);
  // const [table, setTable] = useState({});

  const [value, setValue] = useState(useStore.getState().startingTemplate);
  const userName = useStore((state: any) => state.userName);

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
  let temp = {
    workoutNumber: 0,
    date: "07.05.2023",
    timeStart: "20:00",
    timeEnd: "n/a",
    listOfRows: [
      {
        seriesNumber: 1,
        muscleGroup: "biecps",
        exerciseName: "dumbbell%curls",
        exerciseMultiplier: 2,
        repetitions: 12,
        weight: 4,
        totalExercise: 96,
      },
    ],
    totalDay: 624,
  };

  const handleClick = async () => {
    let dateAdded = new Date().toJSON();
    console.log(value.startingTemplate);
	

		// combine with types 
    let workoutToSend = {
			userName: userName,
			dateAdded: dateAdded,
			date: "",
			timeStart: "",
			timeEnd: "",
			listOfRows: value.startingTemplate
		};
		
		console.log(workoutToSend)
		//

    let respons = await fetch("http://localhost:5001/addWorkout", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(workoutToSend),
    });
  };

  return (
    <>
      <Table></Table>
      <button onClick={handleClick}>Save Workout</button>
    </>
  );
}

export default NewWorkout;

//how the fuck it works 

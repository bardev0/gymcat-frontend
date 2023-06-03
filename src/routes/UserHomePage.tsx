import { useEffect, useState } from "react";
import useStore from "../Store";

function UserHomePage() {
  const usName = useStore((state: any) => state.userName);
  const loged_status = useStore((state: any) => state.isUserLoggedIn);
  const setWorkouts = useStore((state: any) => state.setUserWorkouts);
  const userWorkouts = useStore((state: any) => state.userWorkouts);

  useEffect(() => {
    fetch("http://localhost:5001/testExport", { method: "get" })
      .then((response) => response.json())
      .then((wok) => {
        setWorkouts(wok);
      });
  }, []);

  console.log(loged_status);
  console.log(usName);

  // add dashboard component
  return (
    <>
      <div>
        {loged_status ? (
          <div>
            <button>Logout</button>
            <h1>Hello {usName}</h1>
            <button onClick={() => console.log(userWorkouts)}>
              Show Workouts
            </button>
            {userWorkouts.map((workout, idx: number) => (
							<div>
              <span>{workout.date} &nbsp;</span>
							<span>{workout.totalDay}</span></div>
            ))}
          </div>
        ) : (
          <h1>Login To Enter first!</h1>
        )}
      </div>
    </>
  );
}

export default UserHomePage;

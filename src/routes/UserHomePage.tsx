import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useStore from "../Store";
import WorkoutsPage from "./WorkoutsPage";
import WorkoutTableHead from "../components/WorkoutTableHead";
import WorkoutTableBody from "../components/WorkoutTableBody";
function UserHomePage() {
  const usName = useStore((state: any) => state.userName);
  const loged_status = useStore((state: any) => state.isUserLoggedIn);
  const setWorkouts = useStore((state: any) => state.setUserWorkouts);
  const userWorkouts = useStore((state: any) => state.userWorkouts);

  // move server path out of code
  useEffect(() => {
    fetch("http://191.96.53.225:3000/testExport", {
      method: "get",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((wok) => {
        console.log(wok);
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
            <h1>Hello again! {usName}</h1>
            <SideBar />
            <WorkoutTableHead />
            <WorkoutTableBody />

            {userWorkouts.map((workout, idx: number) => (
              <div>
                <span>data : {workout.date} &nbsp;</span>
                <span>total dnia : {workout.totalDay}</span>
              </div>
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

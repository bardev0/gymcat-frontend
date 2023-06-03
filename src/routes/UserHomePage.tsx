import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useStore from "../Store";
import WorkoutsPage from "./WorkoutsPage";

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
							<SideBar />
						<WorkoutsPage woks={userWorkouts}/>

            {/* {userWorkouts.map((workout, idx: number) => (
              <div>
                <span>{workout.date} &nbsp;</span>
                <span>{workout.totalDay}</span>
              </div>
            ))} */}
          </div>
        ) : (
          <h1>Login To Enter first!</h1>
        )}
      </div>
    </>
  );
}

export default UserHomePage;

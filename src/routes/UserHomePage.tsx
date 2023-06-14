import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import useStore from "../Store";

function EditTemplate() {
  // const startingTemplate = useStore((state: any) => state.startingTemplate);
  const [currentTemplate, setCurrentTemplate] = useState({});

  let a = {
    rows: 1,
    series: 1,
    rowsA: [1],
    seriesA: [1],
  };

  let startingPoint = {
    numberOfSeries: 1,
    series: [
      {
        seriesNum: 1,
        numberOfExer: 1,
        exercies: [{ mg: "klatka", e: "benchpress" }],
      },
    ],
  };

  useEffect(() => {
    setCurrentTemplate(startingPoint);
    console.log(currentTemplate);
  }, []);

  console.log(currentTemplate);
  return (
    <>
      <div>
        {startingPoint.series.map((obj, idx) => (
          <div>
            <p>
              Series # :{obj.seriesNum}
              {obj.exercies.map((obj1, idx1) => (
                <div>{obj1.mg} and {obj1.e}</div>
              ))}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

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
            <EditTemplate />
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

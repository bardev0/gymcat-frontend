import { useEffect, useState } from "react";
import MainView from "../components/MainView";
import SideBar from "../components/SideBar";
import Table from "../components/Table";
import "../MainStyle.css";

import useStore from "../Store";

function UserHomePage() {
  const usName = useStore((state: any) => state.userName);
  const loged_status = useStore((state: any) => state.isUserLoggedIn);
  const setWorkouts = useStore((state: any) => state.setUserWorkouts);
  const userWorkouts = useStore((state: any) => state.userWorkouts);

  const [view, setView] = useState("dashboard");
  // move server path out of code
  useEffect(() => {
    fetch("http://191.96.53.225:3000/testExport", {
      method: "get",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((wok) => {
        // console.log(wok);
        setWorkouts(wok);
      });
  }, []);

  function changeView(view: string) {
    console.log(view);
    setView(view);
  }
  // console.log(loged_status);
  // console.log(usName);

  // add dashboard component

  return (
    <>
      <div className="home">
        {loged_status ? (
          <div>
            <button>Logout</button>
            <h1>Hello again! {usName}</h1>
            {<SideBar logic={changeView} />}
            <MainView view={view} />
          </div>
        ) : (
          <h1 className="home">Login To Enter first!</h1>
        )}
      </div>
    </>
  );
}

export default UserHomePage;

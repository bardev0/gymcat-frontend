import { useEffect, useState } from "react";
import MainView from "../components/MainView";
import SideBar from "../components/SideBar";
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
        async function f() {
            let result = await fetch(
                "http://localhost:5001/retriveUserWorkouts",
                {
                    method: "POST",
                    mode: "cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ user: usName }),
                }
            )
                .then((response) => response.json())
                .then((wok) => {
                    console.log(wok);
                    setWorkouts(wok);
                });
        }

        f();
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
            <div className="main">
                {loged_status ? (
                    <div>
                        <button>Logout</button>
                        <h1>Hello again {usName} !</h1>
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

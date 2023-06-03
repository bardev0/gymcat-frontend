import { useState } from "react";
import useStore from "../Store";
import Store from "../Store";

function UserHomePage() {
  // check if user is logged in on current machine, if not navigate to login box
  const usName = useStore((state: any) => state.userName);
  const loged_status = useStore((state: any) => state.isUserLoggedIn);

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
          </div>
        ) : (
          <h1>Login To Enter first!</h1>
        )}
      </div>
    </>
  );
}

export default UserHomePage;

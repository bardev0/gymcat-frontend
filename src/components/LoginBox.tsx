import { useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import useStore from "../Store";

import paths from "../utils";

// add logic that enters also logs user in
function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState("password");
  const setSUserName = useStore((state: any) => state.setUserName);
  const setIsUserLogged = useStore((state: any) => state.setIsUserLogged);

  const navigate = useNavigate();

  const handleName = (e: any) => setUsername(e.target.value);
  const handlePassw = (e: any) => setPassword(e.target.value);

  let data = {
    name: username,
    pass: password,
  };

  console.log(username + " " + password);

  const sendData = async () => {
    const resposne = await fetch("http://localhost:5001/login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(resposne);
    resposne.json().then((o) => {
      console.log(o);
      if (o.loginStatus == "logged in") {
        setSUserName(username);
        setIsUserLogged(true);
        navigate("/gymcat/home");
      } else {
        setLoginError(o.loginStatus);
      }
    });
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <form>
            <label className="loginLabel">username :</label>
            <input onChange={handleName} type="text"></input>
          </form>
          <form>
            <label className="loginLabel">password :</label>
            <input onChange={handlePassw} type={passwordVisible}></input>
          </form>
          <button onClick={sendData}>Login</button>
        </div>
        <div>{loginError}</div>
      </div>
    </>
  );
}

export default LoginBox;

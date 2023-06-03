import { useState } from "react";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState("password");
	
	const navigate = useNavigate()

  const handleName = (e: any) => setUsername(e.target.value);
  const handlePassw = (e: any) => setPassword(e.target.value);
	
  let data = {
    name: username,
    pass: password,
  };
	
	function moveToUserHome(userStatus: string) {
				if(userStatus == "logged in") {
						navigate('/home')
				}
	}

  // pass
  //
  console.log(username + " " + password);

  const sendData = async () => {
    // let satlR = 13
    // let salt = await bcryptjs.genSalt(satlR)
    // let hash = await bcryptjs.hash(password, salt)
    // Object.assign(data, {pass: hash})
    // console.log(data)
    const resposne = await fetch("http://localhost:5001/login", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    resposne.json().then((o) => {
			moveToUserHome(o.loginStatus)
      console.log(o);
      setLoginError(o.loginStatus);
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

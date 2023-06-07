import { useState } from "react";
import * as bcryptjs from "bcryptjs";

function RegisterBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
	const [email, setEmail] = useState("")
  const [passwordVisible, setPasswordVisible] = useState("password");

  const handleName = (e: any) => setUsername(e.target.value);
  const handlePassw = (e: any) => setPassword(e.target.value);
	const handleEmail = (e: any) => setEmail(e.target.value);
  console.log(username + " " + password);

  const sendData = async () => {
    let saltR = 13;
    let data = { name: username, email: email };

    let salt = await bcryptjs.genSalt(saltR);
    let hash = await bcryptjs.hash(password, salt);

    Object.assign(data, { password: hash });
    console.log(data);
    const resposne = await fetch("http://localhost:5001/addUser", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(resposne);
  };

  return (
    <>
      <div>
        <h1>Register</h1>
        <div>
          <form>
            <label className="registerLabel" id="regInpUsername">
              username :
            </label>
            <input onChange={handleName} type="text"></input>
          </form>
          <form>
            <label className="registerLabel" id="regInpPass">
              password :
            </label>
            <input onChange={handlePassw} type={passwordVisible}></input>
          </form>
          <form>
            <label className="emailLabel" id="regInpEmail">
              email:
            </label>
            <input onChange={handleEmail} type="text"></input>
          </form>
          <button onClick={sendData}>Regiser</button>
        </div>
      </div>
    </>
  );
}

export default RegisterBox;

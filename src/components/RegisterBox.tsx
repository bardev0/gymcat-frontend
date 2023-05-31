import { useState } from "react";

function RegisterBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e: any) => setUsername(e.target.value);
  const handlePassw = (e: any) => setPassword(e.target.value);
	
    console.log(username + " " + password);

	const sendData = async () => {
		let data = { name: username, pass: password }
		const resposne = await fetch('http://localhost:5001/addUser', {method: "POST", body: JSON.stringify(data)})
		console.log(resposne)
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
            <input onChange={handlePassw} type="text"></input>
          </form>
          <button onClick={sendData}>Regiser</button>
        </div>
      </div>
    </>
  );
}

export default RegisterBox;

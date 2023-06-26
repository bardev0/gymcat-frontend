import { useState } from "react";
import * as bcryptjs from "bcryptjs";
import * as z from "zod";

import paths from "../utils";
function RegisterBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // use special font to do password visivility icon
  const [passwordVisible, setPasswordVisible] = useState("password");

  const handleName = (e: any) => setUsername(e.target.value);
  const handlePassw = (e: any) => setPassword(e.target.value);

  const handleEmail = (e: any) => setEmail(e.target.value);
  // console.log(username + " " + password);

  const sendData = async () => {

    let data = { name: username };

    // add requierments for pass strenght
    const passwordStrenght = z.string().min(5).max(12);
    const emailSchema = z.string().email();

    // add validation for username, password strenght, email

    let passwValid = passwordStrenght.safeParse(password);
    let emailValid = emailSchema.safeParse(email);
    console.log(passwValid);
    console.log(emailValid);
		
		if (emailValid.success) {
			Object.assign(data, {email: email})
		} else {
			window.alert("Enter Valid Email")
		}

    if (passwValid.success) {
      console.log("pass safe");
    } else {
      window.alert("Enter Safer Password");
    }

		// move this inside password Validation and execute request
    let saltR = 13;
    let salt = await bcryptjs.genSalt(saltR);
    let hash = await bcryptjs.hash(password, salt);

    Object.assign(data, { password: hash });
    console.log(data);

    const resposne = await fetch(paths.prodRegister, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // add logic to veryfi if :
    // user already exists
    // resitration complete -> move to sign in!

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

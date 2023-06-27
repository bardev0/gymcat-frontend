import React from "react";
import RegisterBox from "../components/RegisterBox";

import { Link } from "../../node_modules/react-router-dom/dist/index";

function RegisterPage() {
  return (
    <>
      <div>
        <RegisterBox></RegisterBox>
      <p>Already a user ? <Link to="/gymcat/login">Log in</Link></p>
			</div>

    </>
  );
}

export default RegisterPage;

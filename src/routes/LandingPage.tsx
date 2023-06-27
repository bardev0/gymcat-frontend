import React from "react";
import Header from "../components/Header";
import "../MainStyle.css";

import { Link } from "../../node_modules/react-router-dom/dist/index";

function LandingPage() {
  return (
    <>
      <div className="main">
        <Header></Header>

        <p>Enterteining Giberish</p>
        <Link to="/gymcat/login">
          <h3>Login</h3>
        </Link>
        <div>
          <Link to="/gymcat/register">
            <h3>Sign Up</h3>
          </Link>
        </div>
        <div>
          <Link to="/gymcat/resetPassword">
            <h5>Forgot Password</h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

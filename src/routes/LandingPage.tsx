import React from "react";
import Header from "../components/Header";
import "../MainStyle.css";

import { Link } from "../../node_modules/react-router-dom/dist/index";

function LandingPage() {
  return (
    <>
      <div>
        <Header></Header>

        <p>Enterteining Giberish</p>
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <div>
          <Link to="/register">
            <h3>Sign Up</h3>
          </Link>
          <Link to="/resetPassword">
            <h5>Forgot Password</h5>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

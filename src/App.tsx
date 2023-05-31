import LoginBox from "./components/LoginBox";
import RegisterBox from "./components/RegisterBox";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <LoginBox></LoginBox>
        <RegisterBox></RegisterBox>
        <p>No Boilerplate</p>
      </div>
    </>
  );
}

export default App;

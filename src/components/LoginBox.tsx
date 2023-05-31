function LoginBox() {
  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <form>
            <label className="loginLabel">username :</label>
            <input type="text"></input>
          </form>
          <form>
            <label className="loginLabel">password :</label>
            <input type="text"></input>
          </form>
          <button>Login</button>
        </div>
      </div>
    </>
  );
}

export default LoginBox;

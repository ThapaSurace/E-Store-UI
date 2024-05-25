import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1>SIGN IN</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>

          <div>
            <button
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>

        <div>
          <span>DO NOT YOU REMEMBER THE PASSWORD?</span>
          <span>REGISTER</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

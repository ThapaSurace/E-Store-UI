import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <h1>SIGN IN</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <div>
              <input type="text" name="username" placeholder="username" />
            </div>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>

          <div>
            <button className="bg-teal-600 " type="submit">LOGIN</button>
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

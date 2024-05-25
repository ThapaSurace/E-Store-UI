import React from "react";

const Register = () => {
  return (
    <div>
      <div>
        <h1>CREATE AN ACCOUNT</h1>
        {/* form */}
        <form>
          <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" name="firstname" placeholder="firstname" />
          </div>

          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" name="lastname" placeholder="lastname" />
          </div>

          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>

          <div>
            <button
              type="submit"
            >
              REGISTER
            </button>
          </div>
        </form>
        <div>
          <span>ALREADY HAVE AN ACCOUNT? </span>
          <span>LOGIN</span>
        </div>
      </div>
    </div>
  );
};

export default Register;

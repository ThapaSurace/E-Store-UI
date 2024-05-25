import React from "react";

const Register = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center py-10 px-4">
      <div className="border shadow-md max-w-xl w-full p-10 rounded-md">
        <h1 className="text-center mb-4 text-xl font-semibold tracking-wider">
          {" "}
          CREATE AN ACCOUNT
        </h1>
        {/* form */}
        <form className="flex flex-col gap-2">
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
              className="bg-teal-600 hover:bg-teal-700 w-full my-4"
              type="submit"
            >
              REGISTER
            </button>
          </div>
        </form>
        <div className="text-sm">
          <span>ALREADY HAVE AN ACCOUNT? </span>
          <span className="cursor-pointer">LOGIN</span>
        </div>
      </div>
    </div>
  );
};

export default Register;

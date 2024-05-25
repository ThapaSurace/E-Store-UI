import React from "react";

const Login = () => {
  return (
    <div className="h-[calc(100vh-73.6px)] flex justify-center items-center px-2 md:px-0">
      <div className="max-w-lg w-full rounded-xl px-4 py-6 shadow-md border">
        <h1 className="text-center font-semibold text-2xl mb-6">SIGN IN</h1>
        <form className=" space-y-4">
          <div className="space-y-1">
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="space-y-1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>

          <div>
            <button
              className="bg-teal-600 hover:bg-teal-700 w-full"
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm space-x-1">
          <span>DO NOT YOU REMEMBER THE PASSWORD?</span>
          <span className="hover:text-sky-700 cursor-pointer">REGISTER</span>
        </div>
      </div>
    </div>
  );
};

export default Login;

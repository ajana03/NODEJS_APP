import React from "react";

const SignIn = () => {
  return (
    <div className="opacity-50 bg-gray-900 flex flex-col w-full sm:px-12 sm:-py-12 sm:min-h-[707]">
      <header>
        <h1 className="text-xl">Sign In</h1>
      </header>
      <form>
        <div>
          <label htmlFor="username" />
          <input name="username" type="text" id="username" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;

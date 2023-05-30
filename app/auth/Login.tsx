"use client";

import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <li className="list-none">
      <button
        className="text-sm bg-gray-700 py-2 px-6 text-white rounded-xl disabled:opacity-25"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </li>
  );
};

export default Login;

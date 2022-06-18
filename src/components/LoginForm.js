import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link, navigate } from "raviger";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/dashboard");
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="text-5xl font-bold text-emerald-700">Login</p>
        <div className="mb-6 mt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-emerald-700"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setLoginEmail(e.target.value)}
            className="bg-gray-50 border-2 border-emerald-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-emerald-700"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setLoginPassword(e.target.value)}
            className="bg-gray-50 border-2 border-emerald-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            required={true}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <p className="text-center mt-4">
          <Link href="/signup" className="text-sm font-bold text-emerald-700">
            Create your account ?
          </Link>
        </p>
      </form>
    </>
  );
}

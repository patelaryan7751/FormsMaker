import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "raviger";
import { auth } from "../firebase-config";

export default function SignUpForm() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registercnfPassword, setRegisterCnfPassword] = useState("");
  const register = async () => {
    try {
      if (registerPassword === registercnfPassword) {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } else {
        window.alert("confirm password does not match");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="text-5xl font-bold text-emerald-700">SignUp</p>
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
            onChange={(e) => setRegisterEmail(e.target.value)}
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
            onChange={(e) => setRegisterPassword(e.target.value)}
            className="bg-gray-50 border-2 border-emerald-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            required={true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm password"
            className="block mb-2 text-sm font-medium text-emerald-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="cnfpassword"
            onChange={(e) => setRegisterCnfPassword(e.target.value)}
            className="bg-gray-50 border-2 border-emerald-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm Password"
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
          <Link href="/" className="text-sm font-bold text-emerald-700">
            Existing user?
          </Link>
        </p>
      </form>
    </>
  );
}

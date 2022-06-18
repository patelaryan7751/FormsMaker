import React, { useEffect, useRef, useState } from "react";
import LogoHero from "../components/LogoHero";
import SignUpForm from "../components/SignUpForm";
export default function SignUp() {
  const ScrollRef = useRef(null);
  const scrollToBottom = () => {
    ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="grid h-screen place-items-center bg-emerald-700">
          <LogoHero />
          <button
            onClick={scrollToBottom}
            className="text-xl text-white mt-4 sm:hidden animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div ref={ScrollRef} className="grid h-screen place-items-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

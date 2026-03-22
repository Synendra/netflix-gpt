import React from "react";
import { useState } from "react";
const SignInForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    function toggleForm() {
        setIsSignIn(!isSignIn);
    }
    return (
        <div className=" p-10 bg-black/70 w-72  ">
            <h2 className="text-3xl text-white font-bold mb-2 ">{isSignIn ? "Sign In" : "Sign Up"}</h2>
            <div className="mt-6">
                {!isSignIn && (
                    <input
                        className="w-full px-4 py-3 mb-4 bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400 rounded-md text-sm"
                        type="text"
                        placeholder="Full Name"
                    />
                )}
                <input
                    className="w-full px-4 py-3 mb-4 bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400 rounded-md text-sm"
                    type="email"
                    placeholder="Email or phone number"
                />
                <input
                    className="w-full px-4 py-3 bg-zinc-800 mb-4 outline-none text-white focus:ring-2 focus:ring-red-600 placeholder-gray-400 rounded-md text-sm"
                    type="password"
                    placeholder="password"
                />
            </div>

            <button className="w-full py-3 text-white font-semibold bg-red-600 rounded-md mt-2" type="submit">
                {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <div className="flex justify-between mt-2">
                <div className="flex items-center">
                    <input type="checkbox" />
                    <p className="text-gray-400 text-sm ml-2 ">Remember me</p>
                </div>
                <p className="text-gray-400 text-sm cursor-pointer hover:underline">Need help?</p>
            </div>
            <div className="flex items-center mt-10">
                <p className="text-zinc-500 text-xs">{isSignIn ? "New to Netflix?" : "Already A Member"}</p>
                <span className="text-white text-sm ml-1 hover:underline cursor-pointer" onClick={() => toggleForm()}>
                    {isSignIn ? "Sign up now" : "Sign In Now"}
                </span>
            </div>
            <p className="text-zinc-400 text-xs mt-4">
                This page is protected by Google reCAPTCHA to ensure your're not a bot
            </p>
        </div>
    );
};

export default SignInForm;

import React from "react";
import { useState } from "react";
import { validateName, validateEmail, validatePassword } from "../utilis/ValidateForm";
const SignInForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function toggleForm() {
        setIsSignIn(!isSignIn);
    }
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleNameChange = (value) => {
        setName(value);
        setErrorMessage((prev) => ({ ...prev, name: validateName(value) }));
    };
    const handleEmailChange = (value) => {
        setEmail(value);
        setErrorMessage((prev) => ({ ...prev, email: validateEmail(value) }));
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
        setErrorMessage((prev) => ({ ...prev, password: validatePassword(value) }));
    };
    const handleSubmit = () => {
        const errors = {
            name: isSignIn ? "" : validateName(name),
            email: validateEmail(email),
            password: validatePassword(password),
        };
        setErrorMessage(errors);
    };

    const isFormValid = isSignIn
        ? errorMessage.email === "" && errorMessage.password === ""
        : Object.values(errorMessage).every((e) => e === "");
    return (
        <div className=" p-10 bg-black/70 w-72  ">
            <h2 className="text-3xl text-white font-bold mb-2 ">{isSignIn ? "Sign In" : "Sign Up"}</h2>
            <form
                className="mt-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                {!isSignIn && (
                    <input
                        className="w-full px-4 py-3 mb-4 bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400 rounded-md text-sm"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => handleNameChange(e.target.value)}
                    />
                )}
                <input
                    className="w-full px-4 py-3 mb-4 bg-zinc-800 outline-none focus:ring-2 focus:ring-red-600 text-white placeholder-gray-400 rounded-md text-sm"
                    type="email"
                    placeholder="Email or phone number"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                />

                <input
                    className="w-full px-4 py-3 bg-zinc-800 mb-4 outline-none text-white focus:ring-2 focus:ring-red-600 placeholder-gray-400 rounded-md text-sm"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                />
                {!isSignIn && <p className="text-md font-semibold  text-red-500 py-2">{errorMessage.name}</p>}
                <p className="text-md font-semibold  text-red-500 py-1">{errorMessage.email}</p>
                <p className="text-md font-semibold  text-red-500 py-1">{errorMessage.password}</p>
                <button
                    className={` w-full py-3 text-white font-semibold rounded-md mt-2 ${isFormValid ? "bg-red-600" : "bg-gray-500 cursor-not-allowed"}`}
                    type="submit"
                    disabled={!isFormValid}
                >
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
            </form>
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

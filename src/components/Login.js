import React from "react";
import Header from "./Header";
import SignInForm from "./SignInForm";
const Login = () => {
    return (
        <div className="relative min-h-screen w-full">
            <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
            <Header />
            <img
                className="fixed top-0 left-0 w-full h-full object-cover -z-10"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_medium.jpg"
                alt="netflix-home-background"
            />
            <div className="fixed bg-black/60 w-full top-0 left-0 h-full z-10"></div>
            <div className="relative z-30 flex justify-center pt-28 pb-10 min-h-screen">
                <SignInForm />
            </div>
        </div>
    );
};

export default Login;

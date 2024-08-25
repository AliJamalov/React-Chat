// Icons
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import Profile from "../icons/Profile";
import { useState } from "react";

// Link
import { Link, useNavigate } from "react-router-dom";

// Hooks
import { useRef } from "react";

const SignUpPage = () => {

  const [isEye, setIsEye] = useState(false);

  const showPasswordHandler = () => {
    setIsEye(!isEye);
  }

  const emailRef = useRef();
  const passwordRef = useRef();
 
  const navigate = useNavigate();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const newUser = {
       email: emailRef.current.value.trim(),
       password: passwordRef.current.value.trim()
    }

    const response = await fetch("/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })

    const data = await response.json();

    // Check strong password
    if (passwordRef.current.value.length < 6) {
      alert("Weak password");
      return;
    }

    navigate("Home")
    
  };

  return (
    <div className="h-[600px]  mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome</h1>
        <h5 className="text-xs text-neutral-500 ">Create your account</h5>
      </div>
      <form onSubmit={submitFormHandler} className="w-full space-y-5">
        {/* Email */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="username">
            Email
          </label>
          <div className="relative h-10">
            <input
              ref={emailRef}
              type="text"
              id="username"
              placeholder="Email"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <Profile
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            Password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type={isEye ? "text" : "password"}
              id="password"
              placeholder="password"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span onClick={showPasswordHandler}  className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
            {isEye ? <GoEyeClosed className="text-[24px] text-gray-600"/> :
             <GoEye className="text-[24px] text-gray-600"/>}
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign Up
        </button>
        <p className="text-center text-xs">
          Do you have an account?{" "}
          <Link className="text-lightOrange" to="/signInPage">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;

// Icons
import Profile from "../icons/Profile";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SignInPage = () => {

  const [isEye, setIsEye] = useState(false);

  const showPasswordHandler = () => {
    setIsEye(!isEye);
  }

  const emailRef = useRef();
  const passwordRef = useRef();
 
  const navigate = useNavigate();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const response = await fetch("/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({email,password})
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.message);
    }

    if (response.ok) {
      console.log(data.data);
      navigate("/");
    }

  }

  return (
    <div className="h-[600px] mx-auto w-1/4 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-bold">Welcome Back</h1>
        <h5 className="text-xs text-neutral-500 ">Login in to your account</h5>
      </div>
      <form onSubmit={submitFormHandler} className="w-full space-y-5">
        {/* userName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="userName">
            Email
          </label>
          <div className="relative h-10">
            <input
              ref={emailRef}
              type="email"
              id="userName"
              placeholder="email"
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
            password
          </label>
          <div className="relative h-10">
            <input
              ref={passwordRef}
              type={isEye ? "text" : "password"}
              id="password"
              placeholder="password"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span onClick={showPasswordHandler} className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
              {isEye ? <GoEyeClosed className="text-[24px] text-gray-600"/> : 
              <GoEye className="text-[24px] text-gray-600"/>}
            </span>
          </div>
        </div>

        <button className="w-full bg-lightOrange text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign In
        </button>
        <p className="text-center text-xs">
          Don't you have an account?{" "}
          <a className="text-lightOrange" href="#">
            <Link to="/signUpPage">Sign Up</Link>
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInPage;

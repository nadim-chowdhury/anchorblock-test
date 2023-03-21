import React, { useState } from "react";
import google from "./assets/google.png";
import apple from "./assets/apple.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/authSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(email, password);
    dispatch(loginUser(email, password));
  };

  return (
    <div className="sign-up w-[540px] mx-auto">
      <div className="top text-center mb-5">
        <h3 className="font-bold text-2xl text-[#323B4B] mt-8 mb-4">Sign In</h3>
        <p className="text-[#8A94A6]">Welcome back, you’ve been missed!</p>
      </div>

      <div className="auth flex items-center justify-center mb-4">
        <div className="google flex items-center bg-[#F0F5FA] mr-3 rounded-2xl p-2 w-[255px] justify-center h-[58px] cursor-pointer">
          <img className="h-[25px] w-[25px] mr-1" src={google} alt="google" />
          <p>Sign In with Google</p>
        </div>

        <div className="apple flex items-center bg-[#F0F5FA] ml-3 rounded-2xl p-2 w-[255px] justify-center h-[58px] cursor-pointer">
          <img className="h-[25px] w-[25px] mr-1" src={apple} alt="apple" />
          <p>Sign In with Apple ID</p>
        </div>
      </div>

      <div className="or text-center my-6">
        <p className="or-p text-[#B0B7C3]">OR</p>
      </div>

      <div className="inputs mx-auto mb-4">
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Your email"
            required
            className="rounded-2xl px-4 mb-4 border h-[58px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            className="rounded-2xl px-4 mb-4 border h-[58px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center text-[#B0B7C3] mb-4">
            <input
              className="mr-2 w-[28px] h-[28px] bg-[#EDEFF1]"
              type="checkbox"
            />
            <span>Remember Me</span>
          </div>

          <input
            className="w-[540px] h-[58px] bg-[#377DFF] text-white rounded-2xl cursor-pointer"
            type="button"
            value="Sign In"
            onClick={handleLogin}
          />
        </form>
      </div>

      <div className="bottom text-[#B0B7C3] flex justify-center">
        <p>Don’t have an account yet?&nbsp;</p>
        <Link to="/sign-up" className="text-[#377DFF]">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

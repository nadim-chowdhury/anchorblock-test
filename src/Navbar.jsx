import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar flex justify-between items-center mx-10 mt-4">
      <Link to="/">
        <div className="top-left flex items-center">
          <img src={logo} alt="logo" />{" "}
          <h3 className="text-[#4E5D78] text-[28px] font-bold ml-2">Stack</h3>
        </div>
      </Link>

      <div className="top-right">
        <select className="bg-[#F0F5FA] p-2 rounded-[16px] text-[#B0B7C3] text-[12px]">
          <option>English (UK)</option>
          <option>English (US)</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;

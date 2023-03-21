import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="users flex">
      <div className="left-side mx-8 text-[#A7AFBC] mt-4 w-[216px]">
        <p className="h-[50px] flex items-center pl-2 bg-[#F0F5FA] rounded-xl">
          <Link to="dashboard">Dashboard</Link>
        </p>
        <p className="h-[50px] flex items-center pl-2">
          <Link to="users">Users</Link>
        </p>
        <p className="h-[50px] flex items-center pl-2">
          <Link to="sales">Sales</Link>
        </p>
      </div>

      <div className="users-lists mt-4 w-full">
        <h3 className="font-bold text-xl h-[50px] flex items-center">
          Dashboard
        </h3>
      </div>
    </div>
  );
};

export default Dashboard;

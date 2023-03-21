import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [allData, setAllData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`https://reqres.in/api/users?page=${pageNo}`)
      ).json();
      console.log(data.data);
      setAllData(data.data);
    };

    dataFetch();
  }, [pageNo]);

  const handlePrevious = () => {
    setPageNo(pageNo - 1);
    console.log("handlePrevious");
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
    console.log("handleNext");
  };

  return (
    <div className="users flex">
      <div className="left-side mx-8 text-[#A7AFBC] mt-4 w-[216px]">
        <p className="h-[50px] flex items-center pl-2">
          <Link to="dashboard">Dashboard</Link>
        </p>
        <p className="h-[50px] flex items-center bg-[#F0F5FA] pl-2 rounded-xl">
          <Link to="users">Users</Link>
        </p>
        <p className="h-[50px] flex items-center pl-2">
          <Link to="sales">Sales</Link>
        </p>
      </div>

      <div className="users-lists mt-4 w-full">
        <h3 className="font-bold text-xl h-[50px] flex items-center">
          User List
        </h3>
        <div className="head uppercase flex justify-between bg-[#FAFBFC] text-[#4E5D78] rounded-xl px-8 py-1 mr-10">
          <p className="w-[10%]">#Id</p>
          <p className="w-[40%]">User</p>
          <p className="w-[40%]">Email</p>
          <p className="w-[10%] flex justify-end">Options</p>
        </div>

        <div>
          {allData.map((d) => {
            return (
              <div
                key={d.id}
                className="flex justify-between items-center my-4 px-8 mr-10 text-[#4E5D78]"
              >
                <p className="w-[10%]">{d.id}</p>

                <div className="w-[40%] flex items-center justify-start">
                  <img
                    className="w-[60px] h-[60px] rounded-xl"
                    src={d.avatar}
                    alt={d.first_name}
                  />
                  <p className="ml-4">
                    {d.first_name}
                    {d.last_name}
                  </p>
                </div>

                <p className="w-[40%]">{d.email}</p>
                <p className="w-[10%] flex justify-end">...</p>
              </div>
            );
          })}
        </div>

        <div className="flex w-20">
          <button
            onClick={handlePrevious}
            className="w-16 h-8 mx-auto mr-4 bg-[#2F80ED] text-white rounded-lg"
          >
            1
          </button>
          <button
            onClick={handleNext}
            className="w-16 h-8 mx-auto bg-[#2F80ED] text-white rounded-lg"
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;

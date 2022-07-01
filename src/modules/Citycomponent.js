import React from "react";
import celcius from "../imagesl/final.gif";
const Citycomponent = (props) => {
  const { updatecity, fetchwether } = props;
  return (
    <>
      <div className="flex justify-center">
        <div className="backdrop-blur-md flex justify-center items-center flex-col mt-40 h-80 w-72 rounded-lg shadow-2xl shadow-black md:w-80 md:h-80 md:shadow-slate-800 md:backdrop-blur-2xl">
          <img src={celcius} alt="logo" className="w-14 inline-block mt-14 mr-6" />
          <h4 className="mr-3 font-serif font-bold text-lg mt-6">Weather app</h4>
          <form action="" onSubmit={fetchwether} className=" mt-24 mx-auto p-3">
            <input
              type="text"
              placeholder="Enter your city"
              onChange={(e) => updatecity(e.target.value)}
              className="px-1 py-1 placeholder-slate-300 text-slate-900 relative bg-white  rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-fit "
            />
            <button
              type={"submit"}
              className="bg-zinc-700 w-fit px-1 py-1 rounded text-white mx-1"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Citycomponent;

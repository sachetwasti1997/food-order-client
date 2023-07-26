import React from "react";
import {NavLink} from "react-router-dom";

interface Props {
  showNav: boolean
}

const AdminPanel = (props: Props) => {

  return (
    <ul className={`md:flex md:items-center ${!props.showNav ? "hidden" : ""} md:w-auto w-full gap-8`}>
      <li>
        <NavLink className={"hover:text-gray-600"} to={"Home"}>Orders</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-gray-600"} to={"items"}>Items</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-gray-600"} to={"items"}>About</NavLink>
      </li>
      <li>
        <NavLink className={"hover:text-gray-600"} to={"items"}>Sell</NavLink>
      </li>
      <button
        className={"bg-blue-400 w-25 py-2 px-5 text-white rounded-xl shadow-lg hover:bg-blue-200"}>Sign
        In
      </button>
      <button className={"bg-blue-400 px-5 w-25 py-2 text-white rounded-xl shadow-lg hover:bg-blue-200"}>Sign Up
      </button>
      <button className={"bg-blue-400 px-5 py-2 w-25 text-white rounded-xl shadow-lg hover:bg-blue-200"}>Sign Out
      </button>
    </ul>
  );
  // return (
  //   <div className={"relative flex flex-col gap-x-2 hover:cursor-pointer items-center"}
  //        onClick={() => setDropDown(!dropdown)}>
  //     <div className={"flex flex-row items-center"}>
  //       Admin Panel
  //       <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
  //            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  //       </svg>
  //     </div>
  //     <div
  //       hidden={!dropdown}
  //       className="absolute my-6 md:my-0 md:absolute md:top-6 z-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
  //       tabIndex={-1}
  //       role={"menu"}
  //       aria-orientation={"vertical"}
  //     >
  //       <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
  //         <li>
  //           <a href="#"
  //              className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
  //         </li>
  //         <li>
  //           <a href="#"
  //              className="block px-4 py-2 hover:bg-gray-100">Settings</a>
  //         </li>
  //         <li>
  //           <a href="#"
  //              className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
  //         </li>
  //         <li>
  //           <a href="#"
  //              className="block px-4 py-2 hover:bg-gray-100 ">Sign
  //             out</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // )
}

export default AdminPanel
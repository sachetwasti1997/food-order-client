import React, {useRef, useState} from 'react';
import AdminPanel from "./AdminPanel";
import {FiMenu} from "react-icons/fi";

const Header = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  const [showNav, setShowNav] = useState(false)
  console.log(window.innerWidth)
  return (
    <nav
      className="bg-white mb-6 rounded-2xl flex flex-row justify-between md:items-center p-4 flex-wrap w-full">
      <div className={"flex flex-row md:w-auto items-center md:mb-0"}>
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
        <p className={"text-2xl font-bold hover:text-blue-600"}>ORDERAZON</p>
      </div>
      <AdminPanel showNav={showNav}/>
      <FiMenu className={"md:hidden block h-6 w-6 cursor-pointer"} onClick={() => setShowNav(!showNav)}/>

    </nav>
  );
};

export default Header;
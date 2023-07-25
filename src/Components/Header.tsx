import React from 'react';
import AdminPanel from "./AdminPanel";

const Header = () => {

  return (
    <nav className="bg-white rounded-2xl flex flex-col md:flex-row justify-between p-4">
      <div className={"flex flex-col justify-center items-center md:flex-row md:justify-between"}>
        <div className={"flex flex-row justify-between w-full md:w-auto items-center mb-2 md:mb-0"}>
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/>
          <p className={"text-2xl font-bold hover:text-blue-600"}>ORDERAZON</p>
        </div>
      </div>
      <AdminPanel/>
    </nav>
  );
};

export default Header;
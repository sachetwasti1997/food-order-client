import React, {JSX} from 'react';
import {MenuModal} from "../Itpyes";

interface Props {
  menuItem: MenuModal
}

const MenuCard = (props: Props): JSX.Element => {
  return (
    <div className={"rounded-xl shadow-lg bg-white p-2 mx-2 my-2 w-[1024]"}>
      <div
        className={"flex flex-col items-center justify-center space-y-2 md:flex-row md:justify-start md:gap-3 rounded-l-xl"}>
        <img
          src={`https://storage.googleapis.com/full_stack_application/${props.menuItem.image}`}
          alt={props.menuItem.name}
          className={"object-fill rounded-full h-80 w-80 md:h-64 md:w-64"}
        />
        <div className={"flex md:items-start space-y-2 items-center flex-col"}>
          <button className={"bg-black px-4 rounded-full shadow-lg text-white text-sm"}>Free
            Shipping
          </button>

          <p className={"font-bold uppercase text-xl"}>{props.menuItem.name}</p>

          <p className={"line-through"}>${props.menuItem.price + 40}</p>
          <p className={"text-4xl font-bold"}>${props.menuItem.price}</p>

          <p className={"text-sm font-light text-gray-400"}>This offer is valid for limited time as long as the stock
            lasts!</p>

          <button className={"bg-blue-800 w-full h-10 rounded-xl text-white hover:bg-blue-400"}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
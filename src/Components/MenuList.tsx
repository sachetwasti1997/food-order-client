import React, {JSX} from 'react';
import {MenuModal} from "../Itpyes";
import MenuCard from "./MenuCard";

interface Props {
  menuItems: MenuModal[]
}

const MenuList = (props: Props): JSX.Element => {
  return (
    <div className={"grid md:grid-cols-3 grid-cols-1"}>
      {props.menuItems.map(
        menu => (
          <MenuCard menuItem={menu}/>
        )
      )}
    </div>
  );
};

export default MenuList;
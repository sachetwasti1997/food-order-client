import {JSX, useEffect, useState} from "react";
import {MenuModal} from "../Itpyes";
import axios from "axios";
import MenuList from "../Components/MenuList";

const HomePage = (): JSX.Element => {
  const [menu, setMenu] = useState<MenuModal[]>([])
  useEffect(() => {
    axios.get("/api/v1/menu")
      .then(r =>
        setMenu(r.data)
      ).catch(err => {
      console.log(err)
    })
  }, [])
  console.log(menu)
  return (
    <div>
      <MenuList menuItems={menu}/>
    </div>
  )
}

export default HomePage;
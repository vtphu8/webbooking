import NavBarItem from "./NavBarItem";
import "./NavBarList.css";
import list from "../data/navBar.json";

const NavBarList = () => {
  return (
    <ul className="nav-List">
      {list.map((item) => (
        <NavBarItem
          key={Math.random()}
          type={item.type}
          icon={item.icon}
          active={item.active}
        />
      ))}
    </ul>
  );
};

export default NavBarList;

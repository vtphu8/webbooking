import NavBarList from "./NavBarList";
import NavBarTop from "./NavBarTop";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavBarTop />
      <NavBarList />
    </div>
  );
};

export default NavBar;

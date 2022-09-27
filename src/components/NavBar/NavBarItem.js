import "./NavBarItem.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>;

const NavBarItem = (props) => {
  return (
    <li className={`${props.active && "active"}`}>
      <i
        // style={{ borderStyle: props.active === true && `solid` }}
        className={`fa ${props.icon}`}
      >
        <span> {props.type}</span>
      </i>
    </li>
  );
};

export default NavBarItem;

import NavList from "shared/componets/NavList/NavList";
import style from "./Menu.module.css";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`${style.backdrop} ${isOpen ? style.open : ""}`}
      onClick={toggleMenu}
    >
      <div className={style.menu} onClick={(e) => e.stopPropagation()}>
        <NavList />
      </div>
    </div>
  );
};

export default Menu;

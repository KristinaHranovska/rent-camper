import { NavLink, useLocation } from "react-router-dom";
import style from "./Menu.module.css";
import clsx from "clsx";

const Menu = ({ isOpen, toggleMenu }) => {
  const location = useLocation();

  const getLocation = (to) => {
    return to === location.pathname
      ? clsx(style.navLink, style.active)
      : style.navLink;
  };

  return (
    <div
      className={`${style.backdrop} ${isOpen ? style.open : ""}`}
      onClick={toggleMenu}
    >
      <div className={style.menu} onClick={(e) => e.stopPropagation()}>
        <ul className={style.navMobileList}>
          <li>
            <NavLink className={style.navLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={`${getLocation("/catalog")}`}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" className={`${getLocation("/favorite")}`}>
              Favorite
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

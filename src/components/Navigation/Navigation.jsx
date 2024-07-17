import { useState } from "react";
import Hamburger from "shared/componets/Hamburger/Hamburger";

import style from "./Navigation.module.css";
import Menu from "components/Menu/Menu";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "unset" : "hidden";
  };

  return (
    <nav className={style.navigation}>
      <Hamburger active={menuOpen} toggleMenu={toggleMenu} />
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navigation;

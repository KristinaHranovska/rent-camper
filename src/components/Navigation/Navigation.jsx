import { useEffect, useState } from "react";
import Hamburger from "shared/componets/Hamburger/Hamburger";

import style from "./Navigation.module.css";
import Menu from "components/Menu/Menu";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={style.navigation}>
      <Hamburger active={menuOpen} toggleMenu={toggleMenu} />
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navigation;

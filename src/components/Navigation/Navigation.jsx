import { useEffect, useState } from "react";
import Hamburger from "shared/componets/Hamburger/Hamburger";
import Menu from "components/Menu/Menu";

import style from "./Navigation.module.css";
import { default as logo } from "assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { useMedia } from "hooks/useMedia";
import NavList from "shared/componets/NavList/NavList";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isDesktop, isTablet } = useMedia();

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
      <NavLink className={style.navLink} to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </NavLink>

      {isMobile && (
        <>
          <Hamburger active={menuOpen} toggleMenu={toggleMenu} />
          <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </>
      )}
      {(isDesktop || isTablet) && <NavList />}
    </nav>
  );
};

export default Navigation;

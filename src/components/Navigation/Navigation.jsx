import { useEffect, useRef, useState } from "react";
import Hamburger from "shared/componets/Hamburger/Hamburger";
import Menu from "components/Menu/Menu";

import style from "./Navigation.module.css";
import { default as logo } from "assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { useMedia } from "hooks/useMedia";
import NavList from "shared/componets/NavList/NavList";
import { gsap } from "gsap";

const Navigation = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isDesktop, isTablet } = useMedia();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav ref={navRef} className={style.navigation}>
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

import { useEffect, useRef } from "react";
import MainButton from "shared/componets/MainButton/MainButton";
import style from "./HomeTitle.module.css";
import { icons as sprite } from "shared/icons/index";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const HomeTitle = () => {
  const homeTitleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      homeTitleRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className={style.homeTitle} ref={homeTitleRef}>
      <div className={style.homeTitleBlock}>
        <h1 className={style.homeMainTitle}>
          Find, book and rent a car <span className={style.accent}>Easily</span>
        </h1>
        <svg className={style.iconLine}>
          <use xlinkHref={`${sprite}#icon-line`} />
        </svg>
      </div>

      <p className={style.homeMainText}>
        Get a car wherever and whenever you need it, with seamless booking and
        24/7 availability
      </p>

      <div className={style.homeBtn}>
        <NavLink to="/catalog">
          <MainButton title="Catalog" btnType="main" />
        </NavLink>
        <NavLink to="/favorite">
          <MainButton
            title="Favorites"
            btnType="load"
            className={style.textBtn}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default HomeTitle;

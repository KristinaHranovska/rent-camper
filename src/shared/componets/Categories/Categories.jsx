import clsx from "clsx";
import { icons as sprite } from "../../icons/index";
import s from "./MainButton.module.scss";

const Categories = ({ title, svg, type }) => {
  return (
    <div
      className={clsx({
        [s.categories]: type === "categories",
        [s.buttonLoad]: type === "filters",
      })}
    >
      <svg className={s.icon}>
        <use xlinkHref={`${sprite}#${svg}`} />
      </svg>
      <p className={s.name}>{title}</p>
    </div>
  );
};

export default Categories;

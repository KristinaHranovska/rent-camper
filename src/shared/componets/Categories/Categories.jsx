import clsx from "clsx";
import { icons as sprite } from "../../icons/index";
import s from "./Categories.module.css";

const Categories = ({ title, svg, type }) => {
  return (
    <div
      className={clsx({
        [s.categories]: type === "categories",
        [s.filters]: type === "filters",
      })}
    >
      <svg className={s.icon}>
        <use xlinkHref={`${sprite}#icon-${svg}`} />
      </svg>
      <p className={s.name}>{title}</p>
    </div>
  );
};

export default Categories;

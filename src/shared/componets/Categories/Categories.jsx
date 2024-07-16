import clsx from "clsx";
import { icons as sprite } from "shared/icons/index";
import s from "./Categories.module.css";

const Categories = ({ title, svg, type, className }) => {
  return (
    <div
      className={clsx(
        {
          [s.categories]: type === "categories",
          [s.filters]: type === "filters",
        },
        className && className
      )}
    >
      <svg className={s.icon}>
        <use xlinkHref={`${sprite}#icon-${svg}`} />
      </svg>
      <p className={s.name}>{title}</p>
    </div>
  );
};

export default Categories;

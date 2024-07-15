import clsx from "clsx";
import s from "./MainButton.module.css";

const MainButton = ({ type = "button", title, btnType = "main", onClick }) => {
  return (
    <button
      type={type}
      className={clsx(s.buttonBase, {
        [s.buttonMain]: btnType === "main",
        [s.buttonLoad]: btnType === "load",
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MainButton;

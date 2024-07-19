import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "shared/componets/Categories/Categories";
import MainButton from "shared/componets/MainButton/MainButton";
import { addFavorite, deleteFavorite } from "@redux/favorite/slice";
import { selectFavoriteCars } from "@redux/favorite/selectors";
import ModalWindow from "shared/componets/ModalWindow/ModalWindow";
import DetailInform from "components/DetailInform/DetailInform";
import { capitalizeFirstLetter } from "helpers/constants";
import style from "./CarItem.module.css";
import { icons as sprite } from "shared/icons/index";

const CarItem = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteCars);
  const [isActive, setIsActive] = useState(false);
  const [modalDataIsOpen, setModalDataOpen] = useState(false);

  useEffect(() => {
    setIsActive(favoriteItems.some((item) => item._id === data._id));
  }, [favoriteItems, data._id]);

  const handleClick = () => {
    if (isActive) {
      dispatch(deleteFavorite(data._id));
    } else {
      dispatch(addFavorite(data));
    }
    setIsActive(!isActive);
  };

  const categoriesData = [
    {
      title: `${data.adults} adults`,
      svg: "users",
      className: style.strokeStyle,
    },
    {
      title: `${capitalizeFirstLetter(data.details.transmission)}`,
      svg: "transmission",
      className: style.fillStyle,
    },
    {
      title: `${capitalizeFirstLetter(data.engine)}`,
      svg: "petrol",
      className: style.strokeStyle,
    },
    {
      title: "Kitchen",
      svg: "kitchen",
      className: style.fillStyle,
      condition: data.details.kitchen > 0,
    },
    {
      title: `${data.details.beds} beds`,
      svg: "bed",
      className: style.fillStyle,
      condition: data.details.beds > 0,
    },
    {
      title: "AC",
      svg: "ac",
      className: style.strokeStyle,
      condition: data.details.airConditioner > 0,
    },
  ];

  return (
    <div className={style.cardCar}>
      <img className={style.cardImg} src={data.gallery[0]} alt={data.name} />

      <div>
        <div className={style.carInfoThumb}>
          <div className={style.carInfo}>
            <h2 className={style.carTitle}>{data.name}</h2>
            <p className={style.carPrice}>&#8364;{data.price}.00</p>
          </div>
          <svg
            className={`${style.iconHeart} ${isActive ? style.active : ""}`}
            onClick={handleClick}
          >
            <use xlinkHref={`${sprite}#icon-favorite`} />
          </svg>
        </div>

        <div className={style.carReviewsThumb}>
          <div className={style.carThumb}>
            <svg className={`${style.icon}`}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <p className={style.carReviewsText}>
              {data.rating}({data.reviews.length} Reviews)
            </p>
          </div>
          <div className={style.carThumb}>
            <svg className={`${style.icon} ${style.fillStyle}`}>
              <use xlinkHref={`${sprite}#icon-map`} />
            </svg>
            <p className={style.carLocationText}>{data.location}</p>
          </div>
        </div>

        <p className={style.textDescription}>{data.description}</p>

        <ul className={style.categoriesList}>
          {categoriesData.map(
            (category, index) =>
              (category.condition === undefined || category.condition) && (
                <li key={index}>
                  <Categories
                    title={category.title}
                    svg={category.svg}
                    className={category.className}
                  />
                </li>
              )
          )}
        </ul>
        <MainButton
          title="Show more"
          btnType="main"
          className={style.carBtn}
          onClick={() => setModalDataOpen(true)}
        />
      </div>

      <ModalWindow
        isOpen={modalDataIsOpen}
        onClose={() => setModalDataOpen(false)}
      >
        <DetailInform db={data} />
      </ModalWindow>
    </div>
  );
};

export default CarItem;

import { selectFavoriteCars } from "@redux/favorite/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "shared/componets/MainButton/MainButton";
import style from "./FavoriteList.module.css";
import { icons as sprite } from "shared/icons/index";
import { Rating } from "@mui/material";
import ModalWindow from "shared/componets/ModalWindow/ModalWindow";
import DetailInform from "components/DetailInform/DetailInform";
import { useState } from "react";
import { addFavorite, deleteFavorite } from "@redux/favorite/slice";
import { useMedia } from "hooks/useMedia";

const FavoriteList = () => {
  const dispatch = useDispatch();
  const myFavoriteList = useSelector(selectFavoriteCars);
  const [modalDataIsOpen, setModalDataOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [visibleFavoriteCar, setVisibleFavoriteCar] = useState(4);
  const { isMobile, isTablet } = useMedia();

  const handleShowMore = (car) => {
    setSelectedCar(car);
    setModalDataOpen(true);
  };

  const handleClick = (car) => {
    if (myFavoriteList.some((item) => item._id === car._id)) {
      dispatch(deleteFavorite(car._id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const handleLoadMore = () => {
    setVisibleFavoriteCar((prev) => prev + 4);
  };

  return (
    <div className={style.favorite}>
      <ul className={style.favoriteList}>
        {myFavoriteList
          .slice(
            0,
            isMobile || isTablet ? visibleFavoriteCar : myFavoriteList.length
          )
          .map((car) => (
            <li data-aos="zoom-in" key={car._id}>
              <div className={style.favoriteItem}>
                <svg
                  className={`${style.iconHeart} ${
                    myFavoriteList.some((item) => item._id === car._id)
                      ? style.active
                      : ""
                  }`}
                  onClick={() => handleClick(car)}
                >
                  <use xlinkHref={`${sprite}#icon-favorite`} />
                </svg>

                <div className={style.favoriteImgContainer}>
                  <img
                    className={style.favoriteImg}
                    src={car.gallery[0]}
                    alt={car.name}
                  />
                </div>

                <div className={style.favoriteMainInfo}>
                  <h2 className={style.favoriteTitle}>{car.name}</h2>
                  <p className={style.favoritePrice}>&#8364;{car.price}</p>

                  <Rating
                    name="half-rating-read"
                    defaultValue={car.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <MainButton
                  title="Show more"
                  btnType="main"
                  onClick={() => handleShowMore(car)}
                />
              </div>
            </li>
          ))}
      </ul>

      {(isMobile || isTablet) && visibleFavoriteCar < myFavoriteList.length && (
        <MainButton
          title="Load More"
          btnType="load"
          className={style.loadMore}
          onClick={handleLoadMore}
        />
      )}

      {selectedCar && (
        <ModalWindow
          isOpen={modalDataIsOpen}
          onClose={() => setModalDataOpen(false)}
        >
          <DetailInform db={selectedCar} />
        </ModalWindow>
      )}
    </div>
  );
};

export default FavoriteList;

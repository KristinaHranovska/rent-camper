import { Helmet } from "react-helmet-async";
import Navigation from "components/Navigation/Navigation";
import style from "./FavoritePage.module.css";
import FavoriteList from "components/FavoriteList/FavoriteList";
import ButtonToTopScroll from "shared/componets/ButtonToTopScroll/ButtonToTopScroll";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "@redux/favorite/selectors";
import { useModalContext } from "context/useModalContext";
import DetailInform from "components/DetailInform/DetailInform";

const FavoritePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("car");

  const { openModal, closeModal } = useModalContext();
  const favoriteCars = useSelector(selectFavoriteCars);
  const navigate = useNavigate();

  const handleCloseModal = useCallback(() => {
    navigate("/favorite");
    closeModal();
  }, [navigate, closeModal]);

  useEffect(() => {
    if (id && favoriteCars.length > 0) {
      const car = favoriteCars.find((car) => car._id === id);
      if (car) {
        openModal(<DetailInform db={car} />, handleCloseModal);
      }
    }
  }, [id, favoriteCars, openModal, handleCloseModal]);

  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <section className={style.container}>
        <Navigation />
        <div className={style.catalogContainer}>
          <FavoriteList />
          <ButtonToTopScroll />
        </div>
      </section>
    </>
  );
};

export default FavoritePage;

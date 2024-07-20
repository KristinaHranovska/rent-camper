// FavoritePage.jsx
import Navigation from "components/Navigation/Navigation";
import { Helmet } from "react-helmet-async";
import style from "./FavoritePage.module.css";
import FavoriteList from "components/FavoriteList/FavoriteList";
import ButtonToTopScroll from "shared/componets/ButtonToTopScroll/ButtonToTopScroll";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "@redux/favorite/selectors";
import { useModalContext } from "context/useModalContext";
import DetailInform from "components/DetailInform/DetailInform";

const FavoritePage = () => {
  const { id } = useParams();
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
  }, [id, favoriteCars, openModal]);

  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>
      <section className={`${style.container} `}>
        <Navigation />
        <FavoriteList />
        <ButtonToTopScroll />
      </section>
    </>
  );
};

export default FavoritePage;

import { Helmet } from "react-helmet-async";
import Navigation from "components/Navigation/Navigation";
import CamperFilters from "components/CamperFilters/CamperFilters";
import CamperCars from "components/CamperCars/CamperCars";
import ButtonToTopScroll from "shared/componets/ButtonToTopScroll/ButtonToTopScroll";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "@redux/favorite/selectors";
import { useModalContext } from "context/useModalContext";
import DetailInform from "components/DetailInform/DetailInform";
import style from "./CatalogPage.module.css";

const CatalogPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("car");

  const { openModal, closeModal } = useModalContext();
  const camperCars = useSelector(selectCars);
  const navigate = useNavigate();

  const handleCloseModal = useCallback(() => {
    navigate("/catalog");
    closeModal();
  }, [navigate, closeModal]);

  useEffect(() => {
    if (id && camperCars.length > 0) {
      const car = camperCars.find((car) => car._id === id);
      if (car) {
        openModal(<DetailInform db={car} />, handleCloseModal);
      }
    }
  }, [id, camperCars, openModal, handleCloseModal]);

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <section className={style.container}>
        <Navigation />
        <div className={style.catalogContainer}>
          <CamperFilters />
          <CamperCars />
          <ButtonToTopScroll />
        </div>
      </section>
    </>
  );
};

export default CatalogPage;

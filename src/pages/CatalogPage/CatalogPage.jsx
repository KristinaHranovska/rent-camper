// CatalogPage.jsx
import { Helmet } from "react-helmet-async";
import Navigation from "components/Navigation/Navigation";
import CamperFilters from "components/CamperFilters/CamperFilters";
import CamperCars from "components/CamperCars/CamperCars";
import ButtonToTopScroll from "shared/componets/ButtonToTopScroll/ButtonToTopScroll";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCars } from "@redux/favorite/selectors";
import { useModalContext } from "context/useModalContext";
import DetailInform from "components/DetailInform/DetailInform";
import style from "./CatalogPage.module.css";

const CatalogPage = () => {
  const { id } = useParams();
  const { openModal, closeModal } = useModalContext();
  const camperCars = useSelector(selectCars);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate("/catalog");
    closeModal();
  };

  useEffect(() => {
    if (id && camperCars.length > 0) {
      const car = camperCars.find((car) => car._id === id);
      if (car) {
        openModal(<DetailInform db={car} />, handleCloseModal);
      }
    }
  }, [id, camperCars, openModal]);

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

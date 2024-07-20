import { Helmet } from "react-helmet-async";
import Navigation from "components/Navigation/Navigation";
import CamperFilters from "components/CamperFilters/CamperFilters";
import CamperCars from "components/CamperCars/CamperCars";
import ButtonToTopScroll from "shared/componets/ButtonToTopScroll/ButtonToTopScroll";
import style from "./CatalogPage.module.css";

const CatalogPage = () => {
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

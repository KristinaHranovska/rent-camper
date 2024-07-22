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
      <Navigation />
      <main className={style.container}>
        <div className={style.catalogContainer}>
          <CamperFilters />
          <CamperCars />
          <ButtonToTopScroll />
        </div>
      </main>
    </>
  );
};

export default CatalogPage;

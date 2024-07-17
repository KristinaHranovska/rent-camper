import CamperCars from "components/CamperCars/CamperCars";
import CamperFilters from "components/CamperFilters/CamperFilters";
import { Helmet } from "react-helmet-async";

import style from "./CatalogPage.module.css";
import Navigation from "components/Navigation/Navigation";

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>

      <Navigation />

      <section className={`${style.container} ${style.catalogContainer}`}>
        <CamperFilters />
        <CamperCars />
      </section>
    </>
  );
};

export default CatalogPage;

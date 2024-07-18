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

      <section className={`${style.container} `}>
        <Navigation />
        <div className={style.catalogContainer}>
          <CamperFilters />
          <CamperCars />
        </div>
      </section>
    </>
  );
};

export default CatalogPage;

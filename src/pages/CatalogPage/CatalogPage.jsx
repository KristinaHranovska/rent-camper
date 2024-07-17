// import CamperCars from "components/CamperCars/CamperCars";
import CamperFilters from "components/CamperFilters/CamperFilters";
import { Helmet } from "react-helmet-async";

import style from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>

      <div className={style.container}>
        <CamperFilters />
        {/* <CamperCars /> */}
      </div>
    </>
  );
};

export default CatalogPage;

import CamperCars from "components/CamperCars/CamperCars";
import CamperFilters from "components/CamperFilters/CamperFilters";
import { Helmet } from "react-helmet-async";

const CatalogPage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>

      <CamperFilters />
      <CamperCars />
    </>
  );
};

export default CatalogPage;

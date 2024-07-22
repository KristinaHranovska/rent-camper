import BookForm from "components/BookForm/BookForm";
import Features from "components/Features/Features";

import style from "./CarFeatures.module.css";

import PropTypes from "prop-types";

const CarFeatures = ({ data }) => {
  return (
    <div className={style.container}>
      <Features db={data} />
      <BookForm />
    </div>
  );
};

CarFeatures.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CarFeatures;

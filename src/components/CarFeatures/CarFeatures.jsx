import BookForm from "components/BookForm/BookForm";
import Features from "components/Features/Features";

import style from "./CarFeatures.module.css";

const CarFeatures = ({ data }) => {
  return (
    <div className={style.container}>
      <Features db={data} />
      <BookForm />
    </div>
  );
};

export default CarFeatures;

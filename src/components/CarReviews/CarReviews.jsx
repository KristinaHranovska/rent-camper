import style from "./CarReviews.module.css";

import BookForm from "components/BookForm/BookForm";
import Reviews from "components/Reviews/Reviews";

const CarReviews = ({ data }) => {
  return (
    <div className={style.container}>
      <Reviews db={data} />
      <BookForm />
    </div>
  );
};

export default CarReviews;

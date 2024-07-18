// import style from './CarReviews.module.css';

import Reviews from "components/Reviews/Reviews";

const CarReviews = ({ data }) => {
  return (
    <>
      <Reviews db={data} />
    </>
  );
};

export default CarReviews;

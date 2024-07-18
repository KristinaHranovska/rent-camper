import StarRating from "shared/componets/StarRating/StarRating";
import style from "./Reviews.module.css";

const Reviews = ({ db }) => {
  return (
    <>
      <ul>
        {db.reviews.map((review, index) => (
          <li className={style.reviewItem} key={index}>
            <div className={style.nameBlock}>
              <div className={style.nameFirstLetter}>
                {review.reviewer_name[0]}
              </div>
              <div className={style.nameAndRating}>
                <h3 className={style.name}>{review.reviewer_name}</h3>
                <StarRating rating={review.reviewer_rating} />
              </div>
            </div>

            <p className={style.review}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;

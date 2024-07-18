import DetailMainInform from "components/DetailMainInform/DetailMainInform";
import CustomScrollWrapper from "shared/componets/CustomScrollWrapper/CustomScrollWrapper";
import style from "./DetailInform.module.css";

import { icons as sprite } from "shared/icons/index";

const DetailInform = ({ db }) => {
  return (
    <>
      <div className={style.mainInfoThumb}>
        <h2 className={style.carTitle}>{db.name}</h2>

        <div className={style.carReviewsThumb}>
          <div className={style.carThumb}>
            <svg className={`${style.icon}`}>
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <p className={style.carReviewsText}>
              {db.rating}({db.reviews.length} Reviews)
            </p>
          </div>
          <div className={style.carThumb}>
            <svg className={`${style.icon} ${style.fillStyle}`}>
              <use xlinkHref={`${sprite}#icon-map`} />
            </svg>
            <p className={style.carLocationText}>{db.location}</p>
          </div>
        </div>

        <p className={style.carPrice}>&#8364;{db.price}.00</p>
      </div>

      <CustomScrollWrapper>
        <div className={style.container}>
          <DetailMainInform data={db} />
        </div>
      </CustomScrollWrapper>
    </>
  );
};

export default DetailInform;

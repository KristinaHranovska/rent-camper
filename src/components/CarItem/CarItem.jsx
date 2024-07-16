import Categories from "shared/componets/Categories/Categories";
import MainButton from "shared/componets/MainButton/MainButton";

import style from "./CarItem.module.css";
import { icons as sprite } from "shared/icons/index";

const CarItem = ({ data }) => {
  console.log(data);

  const capitalizeFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className={style.cardCar}>
      <img src={data.gallery[0]} alt={data.name} />

      <div>
        <h2>{data.name}</h2>
        <p>&#8364;{data.price}.00</p>
        <svg className={`${style.iconHeart} ${style.fillStyle}`}>
          <use xlinkHref={`${sprite}#icon-favorite`} />
        </svg>
      </div>

      <div>
        <svg className={`${style.icon}`}>
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        <p>
          {data.rating}({data.reviews.length} Reviews)
        </p>
        <svg className={`${style.icon} ${style.fillStyle}`}>
          <use xlinkHref={`${sprite}#icon-map`} />
        </svg>
        <p>{data.location}</p>
      </div>

      <p className={style.textDescription}>{data.description}</p>

      <ul className={style.categoriesList}>
        <li>
          <Categories
            title={`${data.adults} adults`}
            type="categories"
            svg="users"
            className={style.strokeStyle}
          />
        </li>
        <li>
          <Categories
            title={`${capitalizeFirstLetter(data.transmission)}`}
            type="categories"
            svg="automatic"
            className={style.fillStyle}
          />
        </li>
        <li>
          <Categories
            title={`${capitalizeFirstLetter(data.engine)}`}
            type="categories"
            svg="petrol"
            className={style.strokeStyle}
          />
        </li>

        {data.details.kitchen > 0 && (
          <li>
            <Categories
              title={`Kitchen`}
              type="categories"
              svg="kitchen"
              className={style.fillStyle}
            />
          </li>
        )}
        {data.details.beds > 0 && (
          <li>
            <Categories
              title={`${data.details.beds} beds`}
              type="categories"
              svg="bed"
              className={style.fillStyle}
            />
          </li>
        )}
        {data.details.airConditioner > 0 && (
          <li>
            <Categories
              title={`AC`}
              type="categories"
              svg="ac"
              className={style.strokeStyle}
            />
          </li>
        )}
      </ul>

      <MainButton title="Show more" btnType="main" />
    </div>
  );
};

export default CarItem;

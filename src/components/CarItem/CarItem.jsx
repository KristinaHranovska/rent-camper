import Categories from "shared/componets/Categories/Categories";
import MainButton from "shared/componets/MainButton/MainButton";

import style from "./CarItem.module.css";

const CarItem = ({ data }) => {
  console.log(data);
  return (
    <>
      <img src={data.gallery[0]} alt={data.name} />
      <h2>{data.name}</h2>
      <p>
        {data.rating}({data.reviews.length} Reviews)
      </p>
      <p>{data.location}</p>
      <p>&#8364;{data.price}.00</p>
      <p>{data.description}</p>

      <ul className={style.categoriesList}>
        <li>
          <Categories
            title={`${data.adults} adults`}
            type="categories"
            svg="users"
          />
        </li>
        <li>
          <Categories
            title={`${data.transmission}`}
            type="categories"
            svg="automatic"
          />
        </li>
        <li>
          <Categories title={`${data.engine}`} type="categories" svg="petrol" />
        </li>

        {data.details.kitchen > 0 && (
          <li>
            <Categories title={`kitchen`} type="categories" svg="kitchen" />
          </li>
        )}
        {data.details.beds > 0 && (
          <li>
            <Categories
              title={`${data.details.beds} bads`}
              type="categories"
              svg="bad"
            />
          </li>
        )}
        {data.details.airConditioner > 0 && (
          <li>
            <Categories title={`AC`} type="categories" svg="ac" />
          </li>
        )}

        {/* {data.details.CD > 0 && <li>1</li>}
        {data.details.TV > 0 && <li>1</li>}
        {data.details.bathroom > 0 && <li>1</li>}
        {data.details.freezer > 0 && <li>1</li>}
        {data.details.gas > 0 && <li>1</li>}
        {data.details.hob > 0 && <li>number</li>}
        {data.details.microwave > 0 && <li>1</li>}
        {data.details.radio > 0 && <li>1</li>}
        {data.details.shower > 0 && <li>1</li>}
        {data.details.toilet > 0 && <li>1</li>}
        {data.details.water > 0 && <li>1</li>} */}
      </ul>

      <MainButton title="Show more" btnType="main" />
    </>
  );
};

export default CarItem;

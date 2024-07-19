import { capitalizeFirstLetter } from "helpers/constants";
import style from "./Features.module.css";
import Categories from "shared/componets/Categories/Categories";

const Features = ({ db }) => {
  const categoriesData = [
    {
      title: `${db.adults} adults`,
      svg: "users",
      className: style.strokeStyle,
    },
    {
      title: `${capitalizeFirstLetter(db.details.transmission)}`,
      svg: "transmission",
      className: style.fillStyle,
    },
    {
      title: "AC",
      svg: "ac",
      className: style.strokeStyle,
      condition: db.details.airConditioner > 0,
    },
    {
      title: `${capitalizeFirstLetter(db.engine)}`,
      svg: "petrol",
      className: style.strokeStyle,
    },
    {
      title: "Kitchen",
      svg: "kitchen",
      className: style.fillStyle,
      condition: db.details.kitchen > 0,
    },
    {
      title: `${db.details.beds} beds`,
      svg: "bed",
      className: style.fillStyle,
      condition: db.details.beds > 0,
    },
    {
      title: `Conditioner`,
      svg: "airConditioner",
      className: style.fillStyle,
      condition: db.details.airConditioner > 0,
    },
    {
      title: `CD`,
      svg: "cd",
      className: style.fillStyle,
      condition: db.details.CD > 0,
    },
    {
      title: `Radio`,
      svg: "radio",
      className: style.fillStyle,
      condition: db.details.radio > 0,
    },
    {
      title: `${db.details.hob} hob`,
      svg: "hob",
      className: style.fillStyle,
      condition: db.details.hob > 0,
    },
    {
      title: `Shower`,
      svg: "shower",
      className: style.fillStyle,
      condition: db.details.shower > 0,
    },
    {
      title: `TV`,
      svg: "tv",
      className: style.fillStyle,
      condition: db.details.TV > 0,
    },
    {
      title: `Toilet`,
      svg: "toilet",
      className: style.strokeStyle,
      condition: db.details.toilet > 0,
    },
    {
      title: `Freezer`,
      svg: "freezer",
      className: style.fillStyle,
      condition: db.details.freezer > 0,
    },
    {
      title: `Microwave`,
      svg: "microwave",
      className: style.fillStyle,
      condition: db.details.microwave > 0,
    },
    {
      title: `Gas`,
      svg: "gas",
      className: style.fillStyle,
      condition: db.details.gas > 0,
    },
    {
      title: `Water`,
      svg: "water",
      className: style.fillStyle,
      condition: db.details.water > 0,
    },
  ];

  return (
    <div>
      <ul className={style.categoriesList}>
        {categoriesData.map(
          (category, index) =>
            (category.condition === undefined || category.condition) && (
              <li key={index}>
                <Categories
                  title={category.title}
                  svg={category.svg}
                  className={category.className}
                />
              </li>
            )
        )}
      </ul>

      <h3 className={style.featuresTitle}>Vehicle details</h3>

      <ul className={style.detailsList}>
        <li className={style.detailsItem}>
          <p className={style.detailsText}>Form</p>
          <p className={style.detailsText}>
            {capitalizeFirstLetter(db.form ?? "")}
          </p>
        </li>
        <li className={style.detailsItem}>
          <p className={style.detailsText}>Length</p>
          <p className={style.detailsText}>{db.length}</p>
        </li>

        <li className={style.detailsItem}>
          <p className={style.detailsText}>Width</p>
          <p className={style.detailsText}>{db.width}</p>
        </li>

        <li className={style.detailsItem}>
          <p className={style.detailsText}>Height</p>
          <p className={style.detailsText}>{db.height}</p>
        </li>

        <li className={style.detailsItem}>
          <p className={style.detailsText}>Tank</p>
          <p className={style.detailsText}>{db.tank}</p>
        </li>

        <li className={style.detailsItem}>
          <p className={style.detailsText}>Consumption</p>
          <p className={style.detailsText}>{db.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default Features;

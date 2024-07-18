import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCar } from "@redux/favorite/operation";
import { selectCars, selectFilters } from "@redux/favorite/selectors";
import CarItem from "components/CarItem/CarItem";
import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperCars.module.css";

const CamperCars = () => {
  const dispatch = useDispatch();
  const camperCars = useSelector(selectCars);
  const filters = useSelector(selectFilters);

  // console.log(filters);
  // console.log(camperCars);

  const [visibleCars, setVisibleCars] = useState([]);
  const [carsToShow, setCarsToShow] = useState(4);

  useEffect(() => {
    dispatch(getCar());
  }, [dispatch]);

  useEffect(() => {
    let filteredCars = camperCars;

    if (filters.location) {
      filteredCars = filteredCars.filter((car) =>
        car.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (Object.keys(filters.details).length > 0) {
      filteredCars = filteredCars.filter((car) =>
        Object.keys(filters.details).every((key) =>
          filters.details[key] ? car.details[key] : true
        )
      );
    }

    if (filters.form) {
      filteredCars = filteredCars.filter((car) => car.form === filters.form);
    }

    setVisibleCars(filteredCars.slice(0, carsToShow));
  }, [camperCars, filters, carsToShow]);

  const handleLoadMore = () => {
    setCarsToShow((prev) => prev + 4);
  };

  return (
    <div className={style.container}>
      {visibleCars.length > 0 && (
        <ul className={style.carsList}>
          {visibleCars.map((cars) => (
            <li className={style.carItem} key={cars._id}>
              <CarItem data={cars} />
            </li>
          ))}
        </ul>
      )}
      {visibleCars.length < camperCars.length && (
        <MainButton
          title="Load more"
          btnType="load"
          className={style.loadMore}
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};

export default CamperCars;

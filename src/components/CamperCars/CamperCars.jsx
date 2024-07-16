import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCar } from "@redux/favorite/operation";
import { selectCars } from "@redux/favorite/selectors";
import CarItem from "components/CarItem/CarItem";
import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperCars.module.css";

const CamperCars = () => {
  const dispatch = useDispatch();
  const camperCars = useSelector(selectCars);

  const [visibleCars, setVisibleCars] = useState([]);
  const [carsToShow, setCarsToShow] = useState(4);

  useEffect(() => {
    dispatch(getCar());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCars(camperCars.slice(0, carsToShow));
  }, [camperCars, carsToShow]);

  const handleLoadMore = () => {
    setCarsToShow((prev) => prev + 4);
  };

  return (
    <>
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
    </>
  );
};

export default CamperCars;

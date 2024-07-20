import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCar } from "@redux/favorite/operation";
import {
  selectCars,
  selectFilters,
  selectLoading,
} from "@redux/favorite/selectors";
import CarItem from "components/CarItem/CarItem";
import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperCars.module.css";
import { default as logo } from "assets/images/logo.webp";
import Loader from "shared/componets/Loader/Loader";
import { gsap } from "gsap";

const CamperCars = () => {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const camperCars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectLoading);
  const [visibleCars, setVisibleCars] = useState([]);
  const [carsToShow, setCarsToShow] = useState(4);
  const [previousCarsCount, setPreviousCarsCount] = useState(0);

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

  useEffect(() => {
    if (listRef.current) {
      const newItems = listRef.current.children;
      const startIndex = previousCarsCount;
      const endIndex = newItems.length;

      gsap.fromTo(
        Array.from(newItems).slice(startIndex, endIndex),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.15)" }
      );

      setPreviousCarsCount(newItems.length);
    }
  }, [visibleCars, previousCarsCount]);

  const handleLoadMore = () => {
    setPreviousCarsCount(visibleCars.length);
    setCarsToShow((prev) => prev + 4);
  };

  return (
    <div id="camperCars" className={style.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {visibleCars.length > 0 ? (
            <ul className={style.carsList} ref={listRef}>
              {visibleCars.map((car) => (
                <li className={style.carItem} key={car._id}>
                  <CarItem data={car} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={style.notFoundtBlock}>
              <p className={style.notFound}>Unfortunately, nothing was found</p>
              <img src={logo} alt="pictures" />
            </div>
          )}
          {visibleCars.length < camperCars.length &&
            visibleCars.length >= 4 && (
              <MainButton
                title="Load more"
                btnType="load"
                className={style.loadMore}
                onClick={handleLoadMore}
              />
            )}
        </>
      )}
    </div>
  );
};

export default CamperCars;

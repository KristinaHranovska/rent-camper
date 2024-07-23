import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import CarItem from "components/CarItem/CarItem";
import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperCars.module.css";
import { default as logo } from "assets/images/logo.webp";
import Loader from "shared/componets/Loader/Loader";
import { gsap } from "gsap";
import { getCar, getCarMore } from "@redux/favorite/operation";
import {
  selectCars,
  selectFilters,
  selectLoading,
  selectTotalPages,
} from "@redux/favorite/selectors";

const CamperCars = () => {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectLoading);
  const totalPages = useSelector(selectTotalPages);
  const [visibleCars, setVisibleCars] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCar({ page: 1, limit: 4, filters }));
  }, [dispatch, filters]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getCarMore({ page, limit: 4, filters }));
    }
  }, [dispatch, page, filters]);

  useEffect(() => {
    let filteredCars = cars;

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

    setVisibleCars(filteredCars);
  }, [cars, filters]);

  useEffect(() => {
    if (listRef.current) {
      const newItems = listRef.current.children;
      const startIndex = (page - 1) * 4;
      const endIndex = newItems.length;

      gsap.fromTo(
        Array.from(newItems).slice(startIndex, endIndex),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.15)" }
      );
    }
  }, [visibleCars, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div id="camperCars" className={style.container}>
      {isLoading && page === 1 ? (
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
              <img
                src={logo}
                alt="pictures"
                width="300"
                height="200"
                loading="lazy"
              />
            </div>
          )}
          {!isLoading && page < totalPages && (
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

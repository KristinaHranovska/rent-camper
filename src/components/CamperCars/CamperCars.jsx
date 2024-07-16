import { selectCars } from "@redux/favorite/selectors";
import { useSelector } from "react-redux";
import CarItem from "components/CarItem/CarItem";
import style from "./CamperCars.module.css";

const CamperCars = () => {
  const camperCars = useSelector(selectCars);

  return (
    <>
      {camperCars.length > 0 && (
        <ul className={style.carsList}>
          {camperCars.map((cars) => (
            <li className={style.carItem} key={cars._id}>
              <CarItem data={cars} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CamperCars;

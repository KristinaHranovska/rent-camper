import { formValuesVehicle, vehicleSchema } from "helpers/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperFilters.module.css";
import { icons as sprite } from "shared/icons/index";

const CamperFilters = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formValuesVehicle,
    resolver: yupResolver(vehicleSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Kyiv, Ukraine"
            {...register("location")}
          />
          {errors.location && <p>{errors.location.message}</p>}
        </div>

        <label>Filters</label>
        <h2>Vehicle equipment</h2>

        <div>
          <label className={style.labelCheck}>
            <input
              className={style.formInput}
              name="equipment"
              type="checkbox"
              value="ac"
              {...register("equipment")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-ac`} />
            </svg>
          </label>
        </div>

        <div>
          <label className={style.labelCheck}>
            <input
              name="equipment"
              type="checkbox"
              value="automatic"
              {...register("equipment")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-automatic`} />
            </svg>
          </label>
        </div>

        <div>
          <label className={style.labelCheck}>
            <input
              name="equipment"
              type="checkbox"
              value="kitchen"
              {...register("equipment")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-kitchen`} />
            </svg>
          </label>
        </div>

        <div>
          <label className={style.labelCheck}>
            <input
              name="equipment"
              type="checkbox"
              value="tv"
              {...register("equipment")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-tv`} />
            </svg>
          </label>
        </div>

        <div>
          <label className={style.labelCheck}>
            <input
              name="equipment"
              type="checkbox"
              value="shower"
              {...register("equipment")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-shower`} />
            </svg>
          </label>
        </div>

        <h2>Vehicle type</h2>
        <div>
          <label className={style.labelCheck}>
            <input
              name="type"
              type="radio"
              value="van"
              {...register("type")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-van`} />
            </svg>
          </label>
        </div>

        <div>
          <label className={style.labelCheck}>
            <input
              name="type"
              type="radio"
              value="fully"
              {...register("type")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-fully-integrated`} />
            </svg>
          </label>
        </div>

        <div>
          <label className={style.labelCheck}>
            <input
              name="type"
              type="radio"
              value="alcove"
              {...register("type")}
              style={{ display: "none" }}
            />
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-alcove`} />
            </svg>
          </label>
        </div>
        <MainButton type="submit" title="Search" btnType="main" />
      </form>
    </>
  );
};

export default CamperFilters;

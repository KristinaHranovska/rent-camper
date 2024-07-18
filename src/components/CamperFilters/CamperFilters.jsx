import { formValuesVehicle, vehicleSchema } from "helpers/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperFilters.module.css";
import { icons as sprite } from "shared/icons/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "@redux/favorite/slice";

const CamperFilters = () => {
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState({});
  const [radioItems, setRadioItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [value]: !prevCheckedItems[value],
    }));
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setRadioItems({ [value]: true });
  };

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: formValuesVehicle,
    resolver: yupResolver(vehicleSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    const selectedDetails = Object.keys(checkedItems).reduce((acc, key) => {
      if (checkedItems[key]) {
        acc[key] = true;
      }
      return acc;
    }, {});

    dispatch(
      setFilters({
        location: data.location,
        details: selectedDetails,
        form: Object.keys(radioItems).find((key) => radioItems[key]),
      })
    );

    resetField("location");
    setCheckedItems({});
    setRadioItems({});
  };

  const formatTitle = (title) => {
    const titles = {
      panelTruck: "Van",
      fullyIntegrated: "Fully Integrated",
      alcove: "Alcove",
      airConditioner: "Conditioner",
      transmission: "Automatic",
      kitchen: "Kitchen",
      tv: "TV",
      shower: "Shower",
    };
    return titles[title] || title;
  };

  const cleanInput = () => {
    resetField("location");
  };

  return (
    <div className={style.formThumb}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.locationfield}>
          <label className={style.labelLocation}>Location</label>
          <div className={style.blockInput}>
            <input
              className={`${style.formInput} ${
                errors.location && style.errorName
              }`}
              type="text"
              name="location"
              placeholder="City"
              {...register("location")}
            />
            <svg className={`${style.iconMap} ${style.fillStyle}`}>
              <use xlinkHref={`${sprite}#icon-map`} />
            </svg>

            <svg
              className={`${style.iconClean} ${style.fillStyle}`}
              onClick={cleanInput}
            >
              <use xlinkHref={`${sprite}#icon-close`} />
            </svg>
          </div>
          {errors.location && (
            <span className={style.errorSpan}>{errors.location.message}</span>
          )}
        </div>

        <label className={style.labelFilters}>Filters</label>

        <h2 className={style.formTitle}>Vehicle equipment</h2>

        <ul className={style.equipment}>
          {["airConditioner", "transmission", "kitchen", "tv", "shower"].map(
            (item) => (
              <li key={item}>
                <label
                  className={`${style.labelCheck} ${
                    checkedItems[item] ? style.checkedLabelCheck : ""
                  }`}
                >
                  <input
                    name="details"
                    type="checkbox"
                    value={item}
                    {...register("details")}
                    className={style.hiddenInput}
                    onChange={handleCheckboxChange}
                  />
                  <svg className={`${style.iconEquipment} ${style.fillStyle}`}>
                    <use xlinkHref={`${sprite}#icon-${item}`} />
                  </svg>
                  <h3 className={style.equipmentTitle}>{formatTitle(item)}</h3>
                </label>
              </li>
            )
          )}
        </ul>

        <h2 className={style.formTitle}>Vehicle type</h2>
        <ul className={style.equipment}>
          {["panelTruck", "fullyIntegrated", "alcove"].map((item) => (
            <li key={item}>
              <label
                className={`${style.labelRadio} ${
                  radioItems[item] ? style.radioLabelCheck : ""
                }`}
              >
                <input
                  name="form"
                  type="radio"
                  value={item}
                  {...register("form")}
                  className={style.hiddenInput}
                  onChange={handleRadioChange}
                />
                <svg className={`${style.iconType} ${style.strokeStyle}`}>
                  <use xlinkHref={`${sprite}#icon-${item}`} />
                </svg>
                <h3 className={style.equipmentTitle}>{formatTitle(item)}</h3>
              </label>
            </li>
          ))}
        </ul>

        <MainButton
          type="submit"
          title="Search"
          btnType="main"
          className={style.searchBtn}
        />
      </form>
    </div>
  );
};

export default CamperFilters;

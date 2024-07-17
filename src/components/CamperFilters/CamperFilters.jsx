import { formValuesVehicle, vehicleSchema } from "helpers/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import MainButton from "shared/componets/MainButton/MainButton";
import style from "./CamperFilters.module.css";
import { icons as sprite } from "shared/icons/index";
import { useState } from "react";

const CamperFilters = () => {
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

  const formatTitle = (title) => {
    if (title.length === 2) {
      return title.toUpperCase();
    }
    const words = title.split(/[-\s]/);
    const formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    return formattedWords.join(" ");
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
          </div>
          {errors.location && (
            <span className={style.errorSpan}>{errors.location.message}</span>
          )}
        </div>

        <label className={style.labelFilters}>Filters</label>

        <h2 className={style.formTitle}>Vehicle equipment</h2>

        <ul className={style.equipment}>
          {["conditioner", "automatic", "kitchen", "tv", "shower"].map(
            (item) => (
              <li key={item}>
                <label
                  className={`${style.labelCheck} ${
                    checkedItems[item] ? style.checkedLabelCheck : ""
                  }`}
                >
                  <input
                    name="equipment"
                    type="checkbox"
                    value={item}
                    {...register("equipment")}
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
          {["van", "fully-integrated", "alcove"].map((item) => (
            <li key={item}>
              <label
                className={`${style.labelRadio} ${
                  radioItems[item] ? style.radioLabelCheck : ""
                }`}
              >
                <input
                  name="type"
                  type="radio"
                  value={item}
                  {...register("type")}
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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookSchema, formValuesBook } from "helpers/constants";
import MainButton from "shared/componets/MainButton/MainButton";

import style from "./BookForm.module.css";
import { icons as sprite } from "shared/icons/index";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./react-datepicker.css";

const BookForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: formValuesBook,
    resolver: yupResolver(bookSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setValue("date", date);
  };

  return (
    <div className={style.formPart}>
      <h2 className={style.formTitle}>Book your campervan now</h2>
      <p className={style.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formBoking}>
          <div>
            <input
              className={`${style.formInput} ${errors.name && style.errorName}`}
              type="text"
              name="name"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && (
              <span className={style.errorSpan}>{errors.name.message}</span>
            )}
          </div>

          <div>
            <input
              className={`${style.formInput} ${errors.name && style.errorName}`}
              type="text"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className={style.errorSpan}>{errors.email.message}</span>
            )}
          </div>

          <div>
            <div className={style.fieldThumb}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Booking date"
                className={`${style.formInput} ${style.datePickerInput}`}
                dateFormat="dd/MM/yyyy"
              />
              <svg className={`${style.iconCalendar} ${style.fillStyle}`}>
                <use xlinkHref={`${sprite}#icon-calendar`} />
              </svg>
            </div>
          </div>

          <div>
            <textarea
              className={`${style.formInput} ${style.textarea}`}
              type="textarea"
              name="comment"
              placeholder="Comment"
              {...register("comment")}
            />
            {errors.comment && (
              <span className={style.errorSpan}>{errors.comment.message}</span>
            )}
          </div>
        </div>

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

export default BookForm;
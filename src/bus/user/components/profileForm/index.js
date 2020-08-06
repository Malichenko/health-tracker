// Core
import React from "react";
import cx from "classnames";

// Elements
import { CustomInput } from "../../../../elements/customInput";

// Hooks
import { useProfileForm } from "../../hooks/useProfileForm";

// Styles
import Styles from "./styles/index.module.scss";

export const ProfileFrom = ({ heading, btnTitle }) => {
  const {
    isBlocked,
    toMale,
    toFemale,
    resetForm,
    getFieldProps,
    getFieldMeta,
    errors,
    handleSubmit,
    location,
    isLoading,
    error,
    removeAllRecords,
  } = useProfileForm();

  const removeAllJSX = location === "profile" && (
    <button
      type="button"
      className={Styles.clearData}
      onClick={removeAllRecords}
      disabled={isLoading}>
      Очистить все данные
    </button>
  );

  const maleCX = cx([Styles.male, { [Styles.selected]: getFieldProps("sex").value === "m" }]);
  const femaleCX = cx([Styles.female, { [Styles.selected]: getFieldProps("sex").value === "f" }]);

  const genderErrorJSX = errors && errors.sex && <p className={Styles["error-message"]}>{errors.sex}</p>;

  const serverErrorJSX = error && error === 500 && (
    <p className={Styles["error-message"]}>Пользователь с таким электронным адресом уже зарегистрирован</p>
  );

  return (
    <form className={Styles.content} onSubmit={handleSubmit}>
      <h1>{heading}</h1>
      <div className={Styles.gender}>
        <div className={femaleCX} onClick={toFemale}>
          <span>Женщина</span>
        </div>
        <div className={maleCX} onClick={toMale}>
          <span>Мужчина</span>
        </div>
      </div>
      {genderErrorJSX}
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Электронная почта"
        type="email"
        placeholder="Введите свой email"
        error={errors.email}
        errorCX={Styles["error-message"]}
        {...getFieldProps("email")}
        {...getFieldMeta("email")}
      />
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Имя"
        type="text"
        placeholder="Введите свое имя"
        {...getFieldProps("fname")}
        {...getFieldMeta("fname")}
      />
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Фамилия"
        type="text"
        placeholder="Введите свою фамилию"
        {...getFieldProps("lname")}
        {...getFieldMeta("lname")}
      />
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Пароль"
        type="password"
        placeholder="Введите свой пароль"
        error={errors.password}
        errorCX={Styles["error-message"]}
        {...getFieldProps("password")}
        {...getFieldMeta("password")}
      />
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Возраст"
        type="number"
        placeholder="Введите свой возраст"
        {...getFieldProps("age")}
        {...getFieldMeta("age")}
      />
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Рост"
        type="number"
        placeholder="Введите свой рост"
        {...getFieldProps("height")}
        {...getFieldMeta("height")}
      />
      <CustomInput
        wrapCX={Styles.inputRow}
        label="Вес"
        type="number"
        placeholder="Введите свой вес"
        error={errors.password}
        errorCX={Styles["error-message"]}
        {...getFieldProps("weight")}
        {...getFieldMeta("weight")}
      />
      {serverErrorJSX}
      <div className={Styles["btn-group"]}>
        <button type="reset" className={Styles["btn-reset"]} onClick={resetForm} disabled={isBlocked}>
          Сбросить
        </button>
        <button type="submit" className={Styles["btn-submit"]} disabled={isBlocked}>
          {btnTitle}
        </button>
      </div>
      {removeAllJSX}
    </form>
  );
};

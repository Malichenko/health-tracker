// Core
import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

// Routes
import { book } from "../../../../navigation/book";

// Hooks
import { useLogin } from "../../hooks/useLogin";

// Elements
import { CustomInput } from "../../../../elements/customInput";
import { Spinner } from "../../../../elements/spinner";

// Styles
import Styles from "./styles/index.module.scss";

export const Login = () => {
  const { getFieldProps, getFieldMeta, errors, isValid, handleSubmit, isLoading, errorMessage } = useLogin();

  const errorMessageJSX = errorMessage && <p className={Styles["error-message"]}>{errorMessage}</p>;

  const linkCX = cx({ [Styles["link-disabled"]]: isLoading });

  const spinnerJSX = isLoading && <Spinner spinnerCX={Styles.spinner} />;
  return (
    <form className={Styles.login} onSubmit={handleSubmit}>
      <div className={Styles.content}>
        {spinnerJSX}
        <h1>Добро пожаловать!</h1>
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
          label="Пароль"
          type="password"
          placeholder="Введите свой пароль"
          error={errors.password}
          errorCX={Styles["error-message"]}
          {...getFieldProps("password")}
          {...getFieldMeta("password")}
        />
        {errorMessageJSX}
        <div className={Styles["btn-group"]}>
          <NavLink exact to={book.registration.url} className={cx([Styles["link-registration"], linkCX])}>
            Зарегистрироватся
          </NavLink>
          <button type="submit" className={Styles["btn-submit"]} disabled={!isValid || isLoading}>
            Войти в систему
          </button>
        </div>
      </div>
    </form>
  );
};

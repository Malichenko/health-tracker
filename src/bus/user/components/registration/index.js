// Core
import React from "react";

// Components
import { ProfileFrom } from "../profileForm";

// Elements
import { Spinner } from "../../../../elements/spinner";

// Hooks
import { useProfileForm } from "../../hooks/useProfileForm";

// Styles
import Styles from "./styles/index.module.scss";

export const Registration = () => {
  const { isLoading } = useProfileForm();
  
  const spinnerJSX = isLoading && <Spinner spinnerCX={Styles.spinner} />;

  return (
    <section className={Styles.registration}>
      <div className={Styles.left}>
        <ProfileFrom heading="Регистрация" btnTitle="Зарегистрироваться" />
      </div>
      <div className={Styles.right}>
        {spinnerJSX}
      </div>
    </section>
  );
};

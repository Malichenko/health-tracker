// Core
import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import shortid from "shortid";

// Routes
import { book } from "../../../../navigation/book";

// Styles
import Styles from "./styles/index.module.scss";

// Other
import { availableQuestions } from "./availableQuestion";

export const Dashboard = () => {
  const linksJSX = availableQuestions.map(({ title, description, url }, idx) => {
    return (
      <NavLink
        key={shortid.generate()}
        exact
        to={book[url].url}
        className={cx([Styles.link, Styles[`category${idx + 1}`]])}>
        <span className={Styles.title}>{title}</span>
        <span className={Styles.description}>{description}</span>
      </NavLink>
    );
  });

  return (
    <>
      <h1>Как у тебя проходит день?</h1>
      <div className={Styles.items}>
        {linksJSX}
      </div>
    </>
  );
};

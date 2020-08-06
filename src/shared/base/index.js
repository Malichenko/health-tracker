// Core
import React from "react";
import cx from "classnames";
import { NavLink, useRouteMatch } from "react-router-dom";

// Components
import { Avatar } from "./components/avatar";
import { Widget } from "./components/widget";

// Elements
import { Spinner } from "../../elements/spinner";

// Hooks
import { useProfileForm } from "../../bus/user/hooks/useProfileForm";
import { useScore } from "../../bus/tracker/hooks/useScore";

// Styles
import Styles from "./styles/index.module.scss";

// Routes
import { book } from "../../navigation/book";

export const Base = ({ children }) => {
  const { profile, logout, location, isLoading } = useProfileForm();

  const { score } = useScore();

  const { isExact } = useRouteMatch(book.home.url);

  const avatarName = profile && `${profile.fname} ${profile.lname}`;

  const genderCX =
    profile &&
    cx([
      {
        [Styles.male]: profile.sex === "m",
        [Styles.female]: profile.sex === "f",
      },
    ]);

  const manPageLinkJSX = !isExact && (
    <NavLink exact to={book.home.url} className={Styles.homeLink}>
      На главную
    </NavLink>
  );

  const headerCX = cx([Styles.header], { [Styles["header-home"]]: isExact });

  const widgetJSX = location !== "profile" && (
    <Widget
      score={score}
      widgetCX={Styles.widget}
      titleCX={Styles.title}
      moduleCX={Styles.module}
      scoreCX={Styles.score}
      progressCX={Styles.progress}
      fillCX={Styles.fill}
      levelCX={[
        cx([Styles.label, Styles.level1]),
        cx([Styles.label, Styles.level2]),
        cx([Styles.label, Styles.level3]),
        cx([Styles.label, Styles.level4]),
        cx([Styles.label, Styles.level5]),
      ]}
    />
  );

  const wrapCX = cx([Styles.wrap], {
    [Styles["wrap-profile"]]: location === "profile",
  });

  const spinnerJSX = isLoading && <Spinner spinnerCX={Styles.spinner} />;

  const baseJSX = profile && (
    <section className={Styles.dashboard}>
      {spinnerJSX}
      <div className={cx([Styles.sidebar, genderCX])}></div>
      <div className={wrapCX}>
        <div className={headerCX}>
          {manPageLinkJSX}
          <Avatar
            wrapCX={cx([Styles.avatar, genderCX])}
            columnCX={Styles.column}
            linkCX={Styles.name}
            logoutCX={Styles.logout}
            name={avatarName}
            logout={logout}
          />
        </div>
        <div className={Styles.content}>
          <div className={Styles.navigation}>{children}</div>
          {widgetJSX}
        </div>
      </div>
    </section>
  );

  return baseJSX;
};

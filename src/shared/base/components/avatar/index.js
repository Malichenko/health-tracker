// Core
import React from "react";
import { NavLink } from "react-router-dom";

// Routes
import { book } from "../../../../navigation/book";

export const Avatar = ({wrapCX, columnCX, linkCX, logoutCX, name, logout}) => {

  return (
    <div className={wrapCX}>
      <div className={columnCX}>
        <NavLink exact to={book.profile.url} className={linkCX}>
          {name}
        </NavLink>
        <button className={logoutCX} onClick={logout}>Выйти</button>
      </div>
    </div>
  );
};

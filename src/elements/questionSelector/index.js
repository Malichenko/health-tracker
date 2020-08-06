// Core
import React from "react";
import cx from "classnames";
import shortid from "shortid";

// Hooks
import { useQuestionSelector } from "../commonHooks/useQuestionSelector";

// Styles
import Styles from "./styles/index.module.scss";

export const QuestionSelector = ({ questions, heading, type }) => {
  const {
    questionValue,
    setQuestionValue,
    clickHolder,
    blocked,
  } = useQuestionSelector({ type });

  const questionsJSX = questions.map(({ title, value }) => {
    return (
      <span
        key={shortid.generate()}
        className={cx([Styles.answer], {
          [Styles.selected]: value === questionValue,
        })}
        onClick={() => setQuestionValue(value)}>
        {title}
      </span>
    );
  });

  return (
    <div className={Styles.question}>
      <h1>{heading}</h1>
      <div className={Styles.answers}>{questionsJSX}</div>
      <button
        className={Styles.sendAnswer}
        onClick={() => clickHolder()}
        disabled={blocked}>
        Ответить
      </button>
    </div>
  );
};

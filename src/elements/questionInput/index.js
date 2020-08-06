// Core
import React from "react";

// Hooks
import { useQuestionSelector } from "../commonHooks/useQuestionSelector";

// Styles
import Styles from "./styles/index.module.scss";

export const QuestionInput = ({ heading, type }) => {
  const {
    questionValue = "",
    setQuestionValue,
    clickHolder,
    blocked,
  } = useQuestionSelector({ type });

  const setValue = (e) => {
    setQuestionValue(e.target.value);
  };

  return (
    <div className={Styles.question}>
      <h1>{heading}</h1>
      <div className={Styles.answers}>
        <div className={Styles.inputRow}>
          <input
            type="number"
            name={type}
            placeholder="Введите свое число"
            onChange={setValue}
            value={questionValue}
          />
        </div>
        <button
          className={Styles.sendAnswer}
          onClick={clickHolder}
          disabled={blocked}>
          Ответить
        </button>
      </div>
    </div>
  );
};

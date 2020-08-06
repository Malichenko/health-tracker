// Core
import React from "react";
import cx from "classnames";
import shortid from "shortid";

// Components
import { Base } from "../../shared/base";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";
import { useQuestionSelector } from "../../elements/commonHooks/useQuestionSelector";

// Styles
import Styles from "./styles/index.module.scss";

// Other
const type = "water";

export const Water = () => {
  useProfileInit();
  useRecordInit(type);

  const {
    questionValue,
    setQuestionValue,
    clickHolder,
    blocked,
    record,
  } = useQuestionSelector({ type });

  const recordVal = [...new Array(13)].map((_, idx) => {
    const elCX = cx([Styles.element], {
      [Styles.selected]:
        idx <= questionValue ||
        (idx <= record && record[type] && record[type].value),
    });
    return (
      <button
        key={shortid.generate()}
        className={elCX}
        onClick={() => setQuestionValue(idx)}
      />
    );
  });

  const waterCount = questionValue ? (questionValue + 1) * 250 : 0;

  return (
    <Base>
      <div className={Styles.question}>
        <h1>Сколько воды ты сегодня выпил, ВОДЫ?</h1>
        <div className={Styles.elements}>
          {recordVal}
          <span className={Styles.size}>{waterCount} мл</span>
        </div>
        <button
          className={Styles.sendAnswer}
          onClick={clickHolder}
          disabled={blocked}>
          Ответить
        </button>
      </div>
    </Base>
  );
};

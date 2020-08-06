// Core
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Hooks
import { useRecord } from "../../../bus/tracker/hooks/useRecord";

export const useQuestionSelector = ({ type }) => {
  const [questionValue, setQuestionValue] = useState();
  const { createRecord, updateRecord, isLoading } = useRecord();
  const { record } = useSelector((state) => state.tracker);

  const recordData = record && record[type];

  useEffect(() => {
    if (recordData && recordData.hash) {
      setQuestionValue(recordData.value);
    }
  }, [recordData]);

  const clickHolder = () => {
    if (!recordData) {
      createRecord({ type, record: questionValue });
    } else {
      updateRecord({ type, record: questionValue, hash: recordData.hash });
    }
  };

  const recordVal = recordData && recordData.value;
  const isRecordValEqual = recordVal === questionValue;
  const isQuestionValEmpty = questionValue === null;

  const blocked = isRecordValEqual || isLoading || isQuestionValEmpty;

  return {
    questionValue,
    setQuestionValue,
    clickHolder,
    blocked,
    record,
  };
};

// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionSelector } from "../../elements/questionSelector";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Junk = () => {
  useProfileInit();
  useRecordInit("junk");

  const questions = [
    {
      title: "Да",
      value: true,
    },
    {
      title: "Нет",
      value: false,
    },
  ];

  return (
    <Base>
      <QuestionSelector questions={questions} heading="Ты сегодня кушал Фастфуд?" type="junk" />
    </Base>
  );
};

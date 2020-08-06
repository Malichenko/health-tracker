// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionSelector } from "../../elements/questionSelector";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Lunch = () => {
  useProfileInit();
  useRecordInit("lunch");

  const questions = [
    {
      title: "Я не обедал",
      value: "none",
    },
    {
      title: "У меня был легкий обед",
      value: "light",
    },
    {
      title: "Я очень плотно покушал",
      value: "heavy",
    },
  ];

  return (
    <Base>
      <QuestionSelector questions={questions} heading="Ты сегодня обедал?" type="lunch" />
    </Base>
  );
};

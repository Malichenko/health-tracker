// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionSelector } from "../../elements/questionSelector";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Dinner = () => {
  useProfileInit();
  useRecordInit("dinner");

  const questions = [
    {
      title: "Я не ужинал",
      value: "none",
    },
    {
      title: "У меня был легкий ужин",
      value: "light",
    },
    {
      title: "Я очень плотно покушал",
      value: "heavy",
    },
  ];

  return (
    <Base>
      <QuestionSelector questions={questions} heading="Ты сегодня ужинал?" type="dinner" />
    </Base>
  );
};

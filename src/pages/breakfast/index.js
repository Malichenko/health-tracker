// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionSelector } from "../../elements/questionSelector";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Breakfast = () => {
  useProfileInit();
  useRecordInit("breakfast");

  const questions = [
    {
      title: "Я не завтракал",
      value: "none",
    },
    {
      title: "У меня был легкий завтрак",
      value: "light",
    },
    {
      title: "Я очень плотно покушал",
      value: "heavy",
    },
  ];

  return (
    <Base>
      <QuestionSelector questions={questions} heading="Ты сегодня завтракал?" type="breakfast" />
    </Base>
  );
};

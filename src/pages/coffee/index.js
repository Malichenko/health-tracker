// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionSelector } from "../../elements/questionSelector";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Coffee = () => {
  useProfileInit();
  useRecordInit("coffee");

  const questions = [
    {
      title: "Я не пил совсем",
      value: "none",
    },
    {
      title: "Выпил 1 стакан",
      value: "light",
    },
    {
      title: "Выпил 2 или больше стаканов",
      value: "heavy",
    },
  ];

  return (
    <Base>
      <QuestionSelector questions={questions} heading="Ты сегодня пил кофе?" type="coffee" />
    </Base>
  );
};

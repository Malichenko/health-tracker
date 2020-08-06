// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionInput } from "../../elements/questionInput/index";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Steps = () => {
  useProfileInit();
  useRecordInit("steps");

  return (
    <Base>
      <QuestionInput heading="Сколько шагов ты сегодня прошел?" type="steps" />
    </Base>
  );
};

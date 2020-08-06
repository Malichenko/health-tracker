// Core
import React from "react";

// Components
import { Base } from "../../shared/base";

// Elements
import { QuestionInput } from "../../elements/questionInput/index";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";
import { useRecordInit } from "../../bus/tracker/hooks/useRecordInit";

export const Sleep = () => {
  useProfileInit();
  useRecordInit("sleep");

  return (
    <Base>
      <QuestionInput heading="Сколько часов ты сегодня спал?" type="sleep" />
    </Base>
  );
};

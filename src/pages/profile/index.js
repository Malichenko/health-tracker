// Core
import React from "react";

// Components
import { ProfileFrom } from "../../bus/user/components/profileForm";
import { Base } from "../../shared/base/index";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit";

export const Profile = () => {
  useProfileInit();

  return (
    <Base>
      <ProfileFrom heading="Профиль" btnTitle="Обновить" />
    </Base>
  );
};

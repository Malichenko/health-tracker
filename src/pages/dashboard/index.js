// Core
import React from "react";

// Components
import { Dashboard as DashboardComponent } from "../../bus/tracker/components/dashboard";
import { Base } from "../../shared/base/index";

// Hooks
import { useProfileInit } from "../../bus/user/hooks/useProfileInit/index";

export const Dashboard = () => {
  useProfileInit();

  return (
    <Base >
      <DashboardComponent />
    </Base>
  );
};

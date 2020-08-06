// Core
import React from "react";

export const Widget = ({ widgetCX, titleCX, moduleCX, scoreCX, progressCX, fillCX, levelCX, score }) => {
  const [level1, level2, level3, level4, level5] = levelCX;

  const widgetScore = score ? score : "0";

  return (
    <div className={widgetCX}>
      <span className={titleCX}>Life Score</span>
      <div className={moduleCX}>
        <span className={scoreCX} style={{ bottom: `${widgetScore}%` }}>
          {widgetScore}
        </span>
        <div className={progressCX}>
          <div className={fillCX} style={{ height: `${widgetScore}%` }}></div>
        </div>
        <span className={level1}>Off Track</span>
        <span className={level2}>Imbalanced</span>
        <span className={level3}>Balanced</span>
        <span className={level4}>Healthy</span>
        <span className={level5}>Perfect Fit</span>
      </div>
    </div>
  );
};

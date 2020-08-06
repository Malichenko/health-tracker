// Core
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { trackerActions } from "../../actions";

export const useScore = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.tracker);
  const { profile } = useSelector((state) => state.user);

  useEffect(() => {
    if (profile && !score) {
      dispatch(trackerActions.getScore());
    }
  }, [dispatch, score, profile]);

  return {
    score,
  };
};

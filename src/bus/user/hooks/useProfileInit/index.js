// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { userActions } from "../../actions";

export const useProfileInit = () => {
  const dispatch = useDispatch();

  const { profile } = useSelector((state) => state.user);

  useEffect(() => {
    if (profile === null) {
      dispatch(userActions.getProfile());
    }
  }, [dispatch, profile]);
};

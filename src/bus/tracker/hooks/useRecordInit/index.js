// Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { trackerActions } from "../../actions";

export const useRecordInit = (type) => {
  const dispatch = useDispatch();
  const { record } = useSelector((state) => state.tracker);

  useEffect(() => {
    if (record[type] === null) {
      dispatch(trackerActions.getRecord(type));
    }
  }, [dispatch, record, type]);
};

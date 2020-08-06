// Core
import { useDispatch, useSelector } from "react-redux";

// Actions
import { trackerActions } from "../../actions";

export const useRecord = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.tracker);

  const createRecord = (values) => {
    dispatch(trackerActions.createRecord(values));
  };

  const updateRecord = (values) => {
    dispatch(trackerActions.updateRecord(values));
  };

  return {
    createRecord,
    updateRecord,
    isLoading,
  };
};

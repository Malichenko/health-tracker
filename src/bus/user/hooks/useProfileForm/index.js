// Core
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Actions
import { userActions } from "../../actions";
import { trackerActions } from "../../../tracker/actions";

// Other
import { initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";

export const useProfileForm = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  const { profile, isLoading, error } = useSelector((state) => state.user);
  const profileValues = profile && profile;

  const formSubmit = (values) => {
    if (location === "registration") {
      dispatch(userActions.createProfile(values));
    } else if (location === "profile") {
      dispatch(userActions.updateProfile(values));
    }
  };

  const {
    handleSubmit,
    getFieldProps,
    getFieldMeta,
    setFieldValue,
    errors,
    isValid,
    dirty,
    resetForm,
    values,
  } = useFormik({
    initialValues: profileValues || initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: formSubmit,
  });

  const isBlocked = (!isValid && dirty) || !dirty || isLoading;

  const toMale = () => setFieldValue("sex", "m");

  const toFemale = () => setFieldValue("sex", "f");

  const logout = () => dispatch(userActions.logout());

  const removeAllRecords = () => dispatch(trackerActions.removeAllRecords());

  return {
    isBlocked,
    toMale,
    toFemale,
    resetForm,
    getFieldProps,
    getFieldMeta,
    errors,
    values,
    handleSubmit,
    location,
    isLoading,
    profile,
    logout,
    error,
    removeAllRecords,
  };
};

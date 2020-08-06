// Core
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

// Hooks
import { useErrorMessages } from "./useErrorMessages";

// Actions
import { userActions } from "../../actions";

// Other
import { initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";

export const useLogin = () => {
  const [encryptedData, setEncryptedData] = useState();
  const { errorMessage, setErrorMessage } = useErrorMessages();
  const dispatch = useDispatch();

  const loginSubmiting = () => {
    dispatch(userActions.login(encryptedData));
  };

  const { getFieldProps, getFieldMeta, values, errors, isValid, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginSubmiting,
  });

  useEffect(() => {
    const { email, password } = values;

    try {
      const encryptedCredentials = btoa(`${email}:${password}`);

      setEncryptedData(encryptedCredentials);
    } catch (err) {
      setErrorMessage("Произошла ошибка при вводе email или пароля!");
    }
  }, [values, setErrorMessage]);

  const { isLoading } = useSelector((state) => state.user);

  return {
    getFieldProps,
    getFieldMeta,
    errors,
    isValid,
    handleSubmit,
    isLoading,
    errorMessage,
  };
};

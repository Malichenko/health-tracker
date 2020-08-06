// Core
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useErrorMessages = () => {
  const [errorMessage, setErrorMessage] = useState();
  const { error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error === 401) {
      setErrorMessage("Такой пользователь не зарегистрирован");
    } else if (error === 400) {
      setErrorMessage("На клиенте произошла ошибка");
    } else if (error === 500) {
      setErrorMessage("На сервере произошла ошибка!");
    } else {
      setErrorMessage(null);
    }
  }, [error]);

  return {
    errorMessage,
    setErrorMessage,
  };
};

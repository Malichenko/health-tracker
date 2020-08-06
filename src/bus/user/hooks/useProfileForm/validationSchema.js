// Core
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  sex: Yup.string()
    .oneOf(["m", "f"], "Пол неизвестен")
    .required("Пол является обязательным"),
  email: Yup.string()
    .email("Электронная почта неправильная")
    .required("Электронная почта является обязательной"),
  password: Yup.string()
    .min(6, "Пароль слишком короткий")
    .required("Пароль является обязательным"),
  weight: Yup.number()
    .min(1, "Вес должен быть больше 0")
    .required("Вес является обязательным"),
});

// Core
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Электронная почта неправильная")
    .required("Электронная почта является обязательной"),
  password: Yup.string().required("Пароль является обязательным"),
});

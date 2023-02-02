import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .email("Почта введена не корректно")
    .required("Почта обязательное поле")
    .label("email"),
    
    password: yup
    .string()
    .min(8, "Длина пароля не должна быть меньше 8 символов")
    .required("Пароль обязательное поле")
})
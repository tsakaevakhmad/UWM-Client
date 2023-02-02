import * as yup from "yup";

export const RegistrationSchema = yup.object().shape({
    userName: yup
        .string()
        .required("Имя пользователя обязательное поле"),

    email: yup
        .string()
        .email("Почта введена не корректно")
        .required("Почта обязательное поле")
        .label("email"),

    password: yup
        .string()
        .min(8, "Длина пароля не должна быть меньше 8 символов")
        .required("Пароль обязательное поле"),

    confirmPassword: yup
        .string()
        .required("Обязательное поле")
        .oneOf([yup.ref("password"), null], 'Пароль должен совпадать')
})  
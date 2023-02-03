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
        .test('compared', 'Парорль должен совпадать', (value, testContext) => {
            if (testContext.parent.password !== testContext.parent.confirmPassword) return false
            return true
        })
}) 
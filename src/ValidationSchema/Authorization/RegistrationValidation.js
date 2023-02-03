import * as yup from "yup";

export async function userName(value) {
    try {
        await Schema.fields.userName.validate(value.userName, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function password(value) {
    try {
        await Schema.fields.password.validate(value.password, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function email(value) {
    try {
        await Schema.fields.email.validate(value.email, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function confirmPassword(value) {
    try {
        await Schema.validate(value, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

const Schema = yup.object({
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
            if (testContext.parent.password !== value) return false
            return true
        })
})


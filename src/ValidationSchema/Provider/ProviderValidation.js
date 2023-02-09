import * as yup from "yup";

const Schema = yup.object({
    name: yup
        .string()
        .required("Укажите поставщика"),

})

export async function name(value) {
    try {
        await Schema.fields.name.validate(value.name, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

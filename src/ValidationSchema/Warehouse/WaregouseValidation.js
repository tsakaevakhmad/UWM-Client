import * as yup from "yup";

const Schema = yup.object({
    number: yup
        .string()
        .required("Укажите номер склада"),

    country: yup
        .string()
        .required("Укажите страну"),

    city: yup
        .string()
        .required("Укажите город"),

    building: yup
        .string()
        .required("Укажите локальный адрес"),

})

export async function number(value) {
    try {
        await Schema.fields.number.validate(value.number, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function country(value) {
    try {
        await Schema.fields.country.validate(value.country, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function city(value) {
    try {
        await Schema.fields.city.validate(value.city, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function building(value) {
    try {
        await Schema.fields.building.validate(value.building, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function form(value) {
    try {
        await Schema.validate(value, { abortEarly: true })
        return true
    }
    catch (error) {
        return false
    }
}


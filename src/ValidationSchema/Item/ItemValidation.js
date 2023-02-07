import * as yup from "yup";

const Schema = yup.object({
    title: yup
        .string()
        .required("Загаловок не может быть пустым"),

    price: yup
        .number()
        .required("Цена должна быть указана"),

    providerId: yup
        .number()
        .required("Поставщик не выбран")
        .min(1, "Выберете поставщика"),

    warehouseId: yup
        .number()
        .required("Не указан склад")
        .min(1, "Выберете склад"),

    subCategoryId: yup
        .number()
        .required("Категория должна быть указана")
        .min(1, "Выберете категорию"),
})

export async function title(value) {
    try {
        await Schema.fields.title.validate(value.title, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function price(value) {
    try {
        await Schema.fields.price.validate(value.price, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function providerId(value) {
    try {
        await Schema.fields.providerId.validate(value.providerId, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function warehouseId(value) {
    try {
        await Schema.fields.warehouseId.validate(value.warehouseId, { abortEarly: true })
        return { valid: true, message: [] }
    }
    catch (error) {
        return { valid: false, message: error.errors }
    }
}

export async function subCategoryId(value) {
    try {
        await Schema.fields.subCategoryId.validate(value.subCategoryId, { abortEarly: true })
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


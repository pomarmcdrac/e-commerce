import * as Yup from "yup";

export function initialValues(firstname, lastname) {
    return {
        firstname,
        lastname,
    };
}

export function validationsSchema() {
    return Yup.object({
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
    });
}
import * as yup from 'yup';

export const formValuesVehicle = {
    location: "",
    details: "",
    form: ""
}

export const vehicleSchema = yup.object().shape({
    location: yup
        .string()
        .optional()
        .matches(/^[A-Za-z, ]+$/, 'Location must contain only English letters')
        .min(4, 'Location must be at least 4 characters')
});

export const capitalizeFirstLetter = (string) => {
    return string
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

export const formValuesBook = {
    name: "",
    email: "",
    date: "",
    comment: ""
}

export const formatRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const bookSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name cannot be longer than 50 characters'),
    email: yup
        .string()
        .matches(
            formatRegex,
            "Invalid email format"
        )
        .required('Email is required')
        .email('Invalid email format'),
    date: yup
        .string()
        .required('Date is required'),
    comment: yup
        .string()
        .max(500, 'Comment cannot be longer than 500 characters')
});
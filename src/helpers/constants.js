import * as yup from 'yup';

export const formValuesVehicle = {
    location: "",
    equipment: "",
    type: ""
}

export const vehicleSchema = yup.object().shape({
    location: yup
        .string()
        .optional()
        .matches(/^[A-Za-z]+$/, 'Location must contain only English letters')
        .min(4, 'Location must be at least 4 characters')
});
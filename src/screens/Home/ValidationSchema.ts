import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    phoneNumber: Yup.string().min(5, 'Must be min 5 digit').max(20, 'Must be 20 digit or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    age: Yup.string().min(2, 'Must be min 2 digit').max(2, 'Must be 2 digit or less').required('Required'),
});

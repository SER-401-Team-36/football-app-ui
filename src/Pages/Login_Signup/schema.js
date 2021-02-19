import { object, string } from 'yup';

export const loginFormSchema = object().shape({
  email: string().required('Email is required'),
  password: string().required('Password is required'),
});

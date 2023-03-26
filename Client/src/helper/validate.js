import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required'),
  email: Yup.string()
    .email('Not a proper email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password should be greater that 6 characters')
    .required('Password is Required'),
  confirmPassword: Yup.string()
    .min(6)
    .when('password', {
      is: (val) => (!!(val && val.length > 0)),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same',
      ),
    })
    .required('Confirm Password Required'),
  userType: Yup.string().required('UserType is required'),
  institution: Yup.string().required('instution Required'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Not a proper email')
    .required('Email is required'),

  password: Yup.string()
    .min(6, 'Password should be greater that 6 characters')
    .required('Password is Required'),
});

export const changePasswordValidation = Yup.object().shape({
  email: Yup.string()
    .email('Not a proper email')
    .required('Email is required'),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password should be greater that 6 characters')
    .required('Password is Required'),
  confirmPassword: Yup.string()
    .min(6)
    .when('password', {
      is: (val) => (!!(val && val.length > 0)),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same',
      ),
    })
    .required('Confirm Password Required'),
});

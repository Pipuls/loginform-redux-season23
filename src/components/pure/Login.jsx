import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

import Button from '@mui/material/Button';

import '../../styles/login.css'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Formato de email no válido')
            .required('El campo email es obligatorio'),
        password: Yup.string()
            .required('El campo password es obligatorio')
    }
);

const LoginForm = ({logged, fetching, onLogin}) => {
    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div className='container'>
            <h4>Inicia sesión</h4>
            <Formik
                //*** Valores iniciales */
                initialValues={ initialCredentials }
                //*** Yup vaalidation schema */
                validationSchema={ loginSchema }
                //*** evento onSubmit */
                onSubmit={async (values) => {
                    onLogin(values.email, values.password)
                }}>

                {/* obtener propiedades de formik */}
                {({ values, 
                    errors, 
                    touched, 
                    isSubmitting, 
                    handleChange,
                    handleBlur }) => (
                        <Form className='form-container'>
                            <label htmlFor='email' >Email</label>
                            <Field 
                                className='imput-field'
                                id='email' 
                                name='email' 
                                type='email' 
                                label="Email" 
                                placeholder='example@email.com' />
                            {/* Errores de email */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage className="error-msj" name='email' component='div'/>
                                )
                            }
                            <label htmlFor='password'>Password</label>
                            <Field
                                className='imput-field'
                                id='password'
                                name='password'
                                placeholder='Password'
                                type='password'
                            />
                            {/* Errores de password */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage className="error-msj" name='password' component='div'/>
                                )
                            }
                            <Button className="btn-sub" variant="contained" type="submit">Login</Button>
                            { fetching ? (<p>LOADING...</p>) : null}
                            {isSubmitting ? (<p>Enviando credenciales...</p>) : null}
                        </Form>
                )}
            </Formik>
        </div>
    );
};


LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;

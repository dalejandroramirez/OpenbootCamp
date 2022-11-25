import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup'

import  { useNavigate } from 'react-router-dom'


import { Redirect } from 'react-router-dom';




const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
              .email('Invalid email format')
              .required('this email is required'),

    password : Yup.string()
                  .min(2, 'Too Short!')
                  .max(12, 'Too Long!')
                  .required('Password is required')
  }
);

const Loginform = ({loged,fetching , onLogin}) => {

  const inicialCredentials = {
    email : '',
    password : '',
  }

  // const navigate = useNavigate();


  return (
    <div>
        <h4> Login Formik</h4>
      <Formik
        // Inicial values that the form will take
        initialValues = { inicialCredentials }
        // yup validation Schema
        validationSchema={loginSchema}
        // On Submit event
        onSubmit={async (values) => {
          onLogin(values.email, values.password)

        }}  
      >

        { ( { values,
             touched,
             errors,
             isSubmitting,
             hanleBlur } ) => (
              

          <Form>
            <label htmlFor="email">Email:</label>
            <Field id="email" type="email" name="email" placeholder="example@email.com" />
            {/* Email Errors */}
            { 
                <ErrorMessage name='email' component="div"/>
            }

            <label htmlFor="password">password:</label>
            <Field
              id="password"
              name="password"
              placeholder="**********"
              type="password"
            />
            {/* Error password */}

            { 
              errors.password && touched.password && 
              ( 
                <ErrorMessage name='password' component='div'/>
              )
            }
            <button type="submit">Login</button>
            {fetching ? <p>LOADING...</p>:null}
            {isSubmitting ? (<p>Login your credentials...</p>):null}

        </Form>
            )
        }
      </Formik>
    </div>
  );
}



Loginform.propTypes = {
  loged: PropTypes.bool.isRequired,
  fetching:PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default Loginform;


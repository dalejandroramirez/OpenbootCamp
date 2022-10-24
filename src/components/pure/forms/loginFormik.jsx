import React from 'react';
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup'


const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
              .email('Invalid email format')
              .required('this email is required'),

    password : Yup.string()
                  .required('Password is required')

  }
);





const Loginformik = () => {

  const inicialCredentials = {
    email : '',
    password : '',
  }


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
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));

          // We save the data in the local storage
          localStorage.setItem('credentials',values)
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
              errors.email && touched.email && 
              ( 
                <ErrorMessage name='email' component="div"/>
              )
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
            {isSubmitting ? (<p>Login your credentials...</p>):null}

        </Form>
            )
        }
      </Formik>
    </div>
  );
}

export default Loginformik;

import React from 'react';
import { Formik ,Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'


// Models
import { ROLES } from '../../../models/roles.enum';
import { User } from '../../../models/user.class';



const Registerformik = () => {

  let user = new User();

  const initialValues = {
    username : '',
    email : '',
    password : '',
    confirm: '' ,  // to confirm password
    role: ROLES.USER
  }

  const registerSchema = Yup.object().shape( 

    {
      username : Yup.string()
                  .min(6,'Username too short ')
                  .max(12,'Username too long ')
                  .required('Username is required'),
      email: Yup.string()
                .email('Invalid Format')
                .required('Email is required'),
      role : Yup.string()
                .oneOf([ROLES.USER,ROLES.ADMIN],'Your must select a Role:/User / Admid')
                .required('Roll is requiered'),            
      password: Yup.string()
                .required('Password is required')
                .min(8,'Password too short '),
      confirm: Yup.string()
                .when('password', {
                  is : value => (value && value.length >0 ? true : false),
                  then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    'Password must match'
                  )
                }).required('You must confirm the password')
    }                 
  )

  let submit = (values) => {
    alert('Register User');

  }

  return (
    <div>

      <h4>Register Formik</h4>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={async (values) => {
          await new Promise((r)=> setTimeout(r,1000));
          alert(JSON.stringify(values,null,2));
          }
        }
      >
        { ( {values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur   } ) => (
          <Form style ={{display:'flex', flexDirection:'column'}}>

              <label htmlFor="username"> Username  </label>
              <Field id="username" type="text" name="username" placeholder="Your username"/>

              {/* Errores de Usuario */}
              {
                errors.username && touched.username && 
                ( 

                  <ErrorMessage name="username" component='div'/>
                )
              }


              <label htmlFor='email'> Email : </label>
              <Field id='email' type='email' name='email' placeholder='example@email.com'/>

              {/* Errores Email */}
              {
                errors.email && touched.email &&
                (
                  <ErrorMessage name='email' component='div'/>
                )
              }

              <label htmlFor='password'>Password</label>
              <Field id='password' type='password' name='password' placeholder='************' ></Field>

              {/* Errores de password */}
              {
                errors.password && touched.password && 
                (<ErrorMessage name='password' component='div'/>)
              }

              <label htmlFor='confirm'>Confirm</label>
              <Field id='confirm' type='password' name='confirm' placeholder='Confirm password' ></Field>

              {/* Errores de confirmacion */}
              
              {
                errors.confirm && touched.confirm && 
                (<ErrorMessage name='confirm' component='div'/>)
              }

              <button type='submit'>Register Account </button>
              {
                isSubmitting ? <p> Sending your Credentials...</p> : null 
              }


          </Form>
        )


        }

      </Formik>
      
    </div>
  );
}

export default Registerformik;

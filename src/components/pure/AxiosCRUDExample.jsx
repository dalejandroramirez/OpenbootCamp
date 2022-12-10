import React from 'react';
import { deleteUserById, getAllPagedUsers, getAllUsers, getUsersByID, login, postNewUser, updateUserByID } from '../services/axiosCRUDService';
import { Formik, Field, Form,ErrorMessage } from 'formik';
import * as Yup from 'yup'




const Axioscrudexample = () => {

  const authUser = (values) =>{
    login(values.email,values.password)
      .then((response) => {
        if (response.data.token) {
          alert( JSON.stringify(response.data.token));
          sessionStorage.setItem('token',response.data.token)
        }else{
          sessionStorage.removeItem('token');
          throw new Error('Login failure')
        }
      })
      .catch((error)=>{ 
        alert(`Something went wrong: ${error}`)
        sessionStorage.removeItem('token')

      })
      .finally(()=> {console.log('Login Done');})

  } 

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
  

    const inicialCredentials = {
      email : '',
      password : '',
    }


    // CRUD Example
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response)=>{
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        }else{
          throw new Error('No users founds')
        }
      })
      .catch((error)=>{alert(`Something went wrong ${error}`)})
  }

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
    .then((response)=>{ 
      if (response.data && response.status === 200) {
        alert(JSON.stringify(response.data.data))
    }else{
      throw new Error('User not found un this page')
    }
    })
    .catch((error)=>{alert(`Something went wrong ${error}`)})
  }

  const obtainUserByID = (id) =>{
    getUsersByID(id)
      .then((response)=>{
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data))
        }else{
          throw new Error('User not found')
        }
      })
      .catch((error)=>{alert(`Something went wrong ${error}`)})
  }

  const createPostNewUser = (name,job) =>{
    postNewUser(name,job)
      .then((response)=>{ 
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data))
        }else{
          throw new Error('User not created')
        }
      })
      .catch((error)=>{alert(`Something went wrong ${error}`)})
  }

  const updateUser = (id,name,job) =>{
    updateUserByID(id,name,job)
      .then((response)=>{
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data))
        }else{
          throw new Error('User not found and no update done')
        }
      })
      .catch((error)=>{alert(`Something went wrong ${error}`)})
  }

  const deleteUser = (id) =>{
    deleteUserById(id)
      .then((response)=>{
        if (response.status === 204) {
          alert(`User with id ${id} succesfully deleted`)
        }else{
          throw new Error('User not found not deleted')
        }
      })
      .catch((error)=>{alert(`Something went wrong ${error}`)})
  }




  return (
    <div>
      <Formik
        // Inicial values that the form will take
        initialValues = { inicialCredentials }
        // yup validation Schema
        validationSchema={loginSchema}
        // On Submit event
        onSubmit={async (values) => {
        authUser(values)

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
            {isSubmitting ? (<p>Login your credentials...</p>):null}

        </Form>
            )
        }
      </Formik>
      {/* Example Buttons to test api responses */}
      <div>
        <button onClick={obtainAllUsers}>
          Get All Users
        </button>
        <button onClick={()=>{obtainAllPagedUsers(1)}}>
          Get All paged Users
        </button>
        <button onClick={()=>{obtainUserByID(1)}}>
          Get User 1
        </button>
        <button onClick={()=>{createPostNewUser('morpheus','leader')}}>
          Create User
        </button>
        <button onClick={()=>{updateUser(1,'Alejo','Developer')}}>
          Update User
        </button>
        <button onClick={()=>{deleteUser(1)}}>
          Delete User
        </button>
      </div>

    </div>
  );
}

export default Axioscrudexample;

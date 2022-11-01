
import React , {useRef} from 'react';

import { Formik, Field, Form,ErrorMessage ,FormikProps} from 'formik';
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const taskSchema = Yup.object().shape(
  {
    taskName: Yup.string()
              .required('this task is required'),

    descriptionName : Yup.string()
                  .min(2, 'Too Short!')
                  .max(12, 'Too Long!')
                  .required('description is required'),

    priority :  Yup.string()
                  .oneOf([LEVELS.NORMAL,LEVELS.URGENTE,LEVELS.BLOCKING],'Your must select a priority')

  }
);


const inicialTask = {
  taskName : '',
  descriptionName : '',
}



const Taskformformink = ({add,length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();

        const newTask = new Task( 
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        );

        add(newTask)
        nameRef.current.value=""
        descriptionRef.current.value=""

    }

    const normalStyle ={
        color:"blue",
        fontWeigth: "bold",
    }


    const urgentStyle ={
        color:"yellow",
        fontWeigth: "bold",
    }

    const blockingStyle ={
        color:"red",
        fontWeigth: "bold",
    }


  return (
    <Formik
        innerRef={nameRef,descriptionRef,null}

        validationSchema={taskSchema}
        initialValues={inicialTask}
        onSubmit={async (values) => {
          await new Promise((r)=> setTimeout(r,1000));
          alert(JSON.stringify(values,null,2));
          }
        }>

    
{ ( {values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur   } ) => ( 

    <Form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>

          <label htmlFor='taskName'> Task: </label>
          <Field id='taskName' type='text' name='taskName' placeholder='task Name' className='form-control form-control-lg' required autoFocus innerRef={nameRef}></Field>
          {/* Error de task */}
          
          {
           errors.taskName && touched.taskName &&
           (
             <ErrorMessage name='taskName' component='div'></ErrorMessage>
           ) 

          }


          <label htmlFor='descriptionName'> Description: </label>
          <Field id='descriptionName' type='text' name='descriptionName' placeholder='task Description' className='form-control form-control-lg' required innerRef={descriptionRef} ></Field>

          {/* Error de Descripcion */}

          {
           errors.descriptionName && touched.descriptionName && 
           (
             <ErrorMessage name='descriptionName' component='div'/>
           ) 
          }

          {/* <input ref={nameRef} id='inputName' type='text' placeholder='task name' className='form-control form-control-lg' required autoFocus></input>
          <input ref={descriptionRef} id='inputDescription' type='text' placeholder='Description name' className='form-control form-control-lg' required ></input> */}
          <select className='form-control form-control-lg' ref={levelRef}>
              <option style={normalStyle} value={LEVELS.NORMAL}>
                  Normal
              </option>
              <option style={urgentStyle} value={LEVELS.URGENTE}>
                  Urgente
              </option>
              <option style={blockingStyle} value={LEVELS.BLOCKING}>
                  Blocking
              </option>
           </select>
        <button type='submit' style={{marginTop:'15px'}}
              className='btn btn-success btn-lg ms-2'>
              {length ==0 ? 'First Task' : 'Add Task'} 
        </button>
      </div>
    </Form>  
    )}
    </Formik>
  );
}

export default Taskformformink;

import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Taskform = ({add,length}) => {

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
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' placeholder='task name' className='form-control form-control-lg' required autoFocus></input>
                <input ref={descriptionRef} id='inputDescription' type='text' placeholder='Description name' className='form-control form-control-lg' required ></input>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
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
            <button type='submit'
                 className='btn btn-success btn-lg ms-2'>
                {length ==0 ? 'First Task' : 'Add Task'} 
            </button>
            </div>
        </form>
    );
}


Taskform.propTypes ={
    add: PropTypes.func.isRequired,
    length:PropTypes.number.isRequired
}

export default Taskform;

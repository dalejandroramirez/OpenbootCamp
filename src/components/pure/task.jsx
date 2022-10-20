
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task,complete,remove}) => {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task : ${task.name} is going to unmount `);
        };
    }, [task]);

    // Returna un badge dependiendo el grado de la tarea
    
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:         
                return(
                    <h6 className='mb-0'>
                        <spam className='badge bg-primary'>{task.level}</spam>
                    </h6>)
            case LEVELS.URGENTE:
                return(
                    <h6 className='mb-0'> 
                       <spam className='badge bg-warning'>{task.level}</spam>
                    </h6>)
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <spam className='badge bg-danger'>{task.level}</spam>
                    </h6>)
            default:
                break;
        }
    }

    function taskIconCompletedIcon() {
        if (task.completed) {
            return( <i onClick={()=>complete(task)} 
                    className='bi-toggle-on task-action' 
                    style={{color:"green"}}></i> )
        }else{
           return (<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color:"red"}}></i>)
        }
        
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span> 
            </th>
            <td className='align-middle'>
                <span>{task.description}</span> 
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle task-action'>
                {taskIconCompletedIcon()}
            <i className='bi-trash' 
                style={{color:"gray"}}
                onClick={()=> remove(task)}
                ></i> 
            </td>
        </tr>

    );

    
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;

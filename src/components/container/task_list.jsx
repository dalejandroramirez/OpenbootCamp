import React ,{ useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/task';

import '../../styles/task.scss'

const TaskListComponent = () => {
  
  const defaultTask = new Task("Example" , "Default Description", false, LEVELS.NORMAL)
  
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    console.log("Tasks State has been modified");
    setLoading(false);

    return () => {
      console.log('TaskList component is going to unmount');
    };
  }, [tasks]);
  

  
  const changeCompleted = (id)=> {
    console.log("Todo: Cambiar el estado de una tarea");
  }

  return (
        <div>
          <div className='col-12'>

            <div className='card'>
              <div className='card-header p-3' >
                <h5>Your Tasks</h5>
              </div>
              <div className='card-body' data-mdb-perfect-scrollbar= "true" style = { {position: 'relative', height: '400px'} }>
                <table>
                  <thead>
                    <tr>
                      <td scope = 'col'> Title</td>
                      <td scope = 'col'> Description</td>
                      <td scope = 'col'> Priority</td>
                      <td scope = 'col'> Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* iterar sobre lista de tareas */}
                    <TaskComponent task={defaultTask}></TaskComponent>
                  </tbody>
                </table>
              </div>

            </div>
            
          </div>
          {/* aplicar todo varias veces */}
          {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
};

export default TaskListComponent;


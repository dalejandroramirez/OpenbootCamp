import React ,{ useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/task';

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
          <div>
            <h1>Your Tasks</h1>
          </div>
          {/* aplicar todo varias veces */}
          <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;


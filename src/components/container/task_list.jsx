import React ,{ useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from "../../models/task.class"
import TaskComponent from '../pure/task';


import '../../styles/task.scss'
import Taskform from '../pure/forms/taskForm';

const TaskListComponent = () => {
  
  const defaultTask = new Task("Example" , "Default Description", false, LEVELS.BLOCKING);
  const defaultTask1 = new Task("Example1" , "Default Description1", true, LEVELS.NORMAL);
  const defaultTask2 = new Task("Example2" , "Default Description1", true, LEVELS.URGENTE);
  
  const [tasks, setTasks] = useState([defaultTask,defaultTask1,defaultTask2]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida
  useEffect(() => {
    console.log("Tasks State has been modified",tasks);
    setLoading(false);

    return () => {
      console.log('TaskList component is going to unmount');

    };
  }, [tasks]);
  
  function completeTask(task) {
    console.log("Complete this task",task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed ;
    // We update the state  of the componet with the new list of tasks  and it  will  update the
    //  iteration of the task in order to show  task update
    setTasks(tempTasks);
  }

  function deleteTask(task) {
    console.log("this task will be deleted",task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1)
    setTasks(tempTasks)
  }

function addTask(task) {
  console.log("this task will be add",task);
  const index = tasks.indexOf(task);
  const tempTasks = [...tasks];
  tempTasks.push(task)
  setTasks(tempTasks)
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
                      <td > Title</td>
                      <td > Description</td>
                      <td> Priority</td>
                      <td> Actions</td>
                    </tr>
                  </thead>
                  <tbody>
                    { tasks.map((task,index) => {
                      return (
                        <TaskComponent 
                          key={index}
                          task={task}
                          complete={completeTask}
                          remove={deleteTask}
                          >
                        </TaskComponent>
                      )
                      })
                    }   
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
          {/* aplicar todo varias veces */}
          {/* <TaskComponent task={defaultTask}></TaskComponent> */}
              <Taskform add={addTask}></Taskform>
        </div>
    );
};

export default TaskListComponent;


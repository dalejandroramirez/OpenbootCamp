import React from 'react';
import {useParams} from 'react-router-dom'

const TaskDetailPage = ({tasks}) => {
  
  const params = useParams();
  return (

    <div>

      <h1>Task Detail --- {params.tasksId}</h1>
      <h2> {tasks[params.tasksId-1].name}</h2>
      <h3> {tasks[params.tasksId-1].description}</h3>
      
    </div>
  );
}

export default TaskDetailPage;

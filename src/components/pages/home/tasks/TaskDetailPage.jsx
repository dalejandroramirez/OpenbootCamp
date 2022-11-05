import React from 'react';
import {useParams} from 'react-router-dom'

const TaskDetailPage = () => {
  
  const params = useParams();


  return (

    <div>

      <h1>Task Detail --- {params.tasksId}</h1>

      

    </div>
  );
}

export default TaskDetailPage;

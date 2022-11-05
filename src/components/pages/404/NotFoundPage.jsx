import React from 'react';
import {useNavigate} from 'react-router-dom'

const Notfoundpage = () => {

  const navigate = useNavigate();


  return (
    <div>
      <h1> 404 -Page Not Found</h1>
    <div>
      <button onClick={()=>navigate('/')}>
        Home
      </button>
    </div>    

      
    </div>
  );
}

export default Notfoundpage;

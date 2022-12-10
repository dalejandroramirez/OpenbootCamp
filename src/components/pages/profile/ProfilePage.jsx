import React from 'react';

import {useNavigate, } from 'react-router-dom'

const Profilepage = ({user}) => {

  const navitate = useNavigate();

  const goBack = () => {
    navitate(-1);
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={()=>navitate('/tasks')}>Tasks</button>

      <button onClick={goBack}>Go Back</button>


    </div>
  );
}

export default Profilepage;

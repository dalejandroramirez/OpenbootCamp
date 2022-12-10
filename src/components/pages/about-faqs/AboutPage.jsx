import React  from 'react';

import {useLocation,useNavigate } from 'react-router-dom'
const Aboutpage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const  navegar = (path)=>{
    navigate(path)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  return (
    <div>
      <h1>
        About |FAQs 
      </h1>

      <div>
        <button onClick={()=> {navegar('/')}}>
          Go tu Home
        </button>
      </div>
        <button onClick={goBack}>
          Go Back
        </button>
      <div>
        <button onClick={goForward}>
        go  Forward 
        </button>
      </div>
    </div>
  );
}

export default Aboutpage;

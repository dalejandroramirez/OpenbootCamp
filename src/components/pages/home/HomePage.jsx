import React from 'react';
import {useLocation,useNavigate} from 'react-router-dom'


const Homepage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const  navegar = (path)=>{
    navigate(path)
  }


  return (
    <div>
      <h1>Home Page</h1>
      <h2> DashBoard</h2>

    
      <div>
        <button onClick={()=> {navegar('/profile')}}>
          Go Profile
        </button>
      </div>
  </div>

  );
}

export default Homepage;

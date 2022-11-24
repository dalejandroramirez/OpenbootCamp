import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes,Link, Navigate } from 'react-router-dom'
import React, {useState ,useEffect} from 'react';
import Notfoundpage from './components/notFoundPage';
import Registerformik from './components/register';
import Loginformik from './components/login';



function App() {

  // todo change to value from sessionStorage 
  let loggedIn = true;
  let registerIn = false;
  
  return (
    <Router>

    <nav>
    <aside>
          <Link to='/Register' > | Register </Link>
          <Link to='login'> || Login </Link>
    </aside>
    </nav>
      <Routes>
        <Route exact
                path ='login'
                element= {<Loginformik/>}
        />
        

        <Route exact
               path = '/Register'
               element = {
                registerIn ?
                <Navigate from='/' to='/login' />
                :
                <Registerformik/>
                }
              /> 


      </Routes>
    </Router>
  )
}

export default App;

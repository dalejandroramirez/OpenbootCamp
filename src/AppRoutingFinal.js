
import { BrowserRouter as Router, Route, Routes,Link, Navigate } from 'react-router-dom'
import React, {useState ,useEffect} from 'react';
import Notfoundpage from './components/pages/404/NotFoundPage';
import Loginpage from './components/pages/auth/LoginPage';
import Dashboardpage from './components/pages/dashboard/DashBoard';
import Loginformik from './components/pure/forms/loginFormik';


function AppRoutingFinal() {

  // todo change to value from sessionStorage 
  let loggedIn = true;

  return (
    <Router>
      <Routes>
        {/* Redirections to protect our routes */}
        <Route 
          exact 
          path='/'

          element = {
            loggedIn ?
              <Navigate to='/dashboard'/>
            :
              <Navigate to='/login'/>
            }
        />

        {/* Login Route */}
        <Route exact path='/login' element={<Loginformik/>}/>

        {/* DashBoard Route */}
        <Route exact
               path = '/dashboard'
               element = {
                loggedIn ?
                <Dashboardpage/>
                :
                <Navigate from='/' to='/login' />
                }
              />
        


        <Route path='*' element={ <Notfoundpage/>} /> 
      </Routes>
    </Router>

  );
}

export default AppRoutingFinal;

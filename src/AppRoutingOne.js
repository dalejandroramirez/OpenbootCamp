
import { BrowserRouter as Router, Route, Routes,Link, Navigate } from 'react-router-dom'
import React, {useState ,useEffect} from 'react';

import HomePage from './components/pages/home/HomePage';
import NotFoundPage from './components/pages/404/NotFoundPage';
import Aboutpage from './components/pages/about-faqs/AboutPage';
import Profilepage from './components/pages/profile/ProfilePage';
import Taskspage from './components/pages/home/tasks/TasksPage';
import TaskDetailPage from './components/pages/home/tasks/TaskDetailPage';
import Loginpage from './components/pages/auth/LoginPage';
import Loginformik from './components/pure/forms/loginFormik';
import StatePage from './components/pages/home/StatePage'

function AppRoutingOne() {

  // const [logged, setlogged] =  useState(localStorage.getItem('credentials'));
  let logged = false;
  


  let taskList = [
    { 
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    { 
      id: 2,
      name: 'Task 2',
      description: 'My Second Task'
    }
  ]  



  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log("user is logged,", logged);
  },[]);


  return (
    <Router>
      <div>
        <aside>
          <Link to='/'> || Home </Link>
          <Link to='/about'> | About </Link>
          <Link to='/task/1' params={{id: 1}}> | Task1 </Link>
          <Link to='/task/2'> | Task2 </Link>
          <Link to='/faqs'> | FAQs ||</Link>
          <Link to='loginFormik'> || Login </Link>
          <Link to='/unacosa'> | Not Existing Route ||</Link>
        </aside>

      <main>

      <Routes>
        <Route exact path='/' element={ <HomePage/>}/>
        <Route exact path='/online-state' element={<StatePage/> }/>

        <Route path= '/loginFormik' 
          element= {
             logged ? 
             <HomePage/>
              :
             <Loginformik/>}
        />
        <Route path= '/about' element={<Aboutpage/>}/>
        <Route path= '/faqs' element={<Aboutpage/>}/>
        
        
        <Route path= '/profile'
          element= {
           logged ? 
            <Profilepage/>
            :
            <Loginformik/>
          }>
        </Route>

        <Route path= '/tasks' element={<Taskspage/>}></Route>
        <Route 
          exact 
          path= '/task/:tasksId' 
          element={<TaskDetailPage tasks={taskList}/>}
          >
        </Route>




        {/* 404 -Page not Found */}
        <Route path='*' element={ <NotFoundPage/>} /></Routes>

      </main>
      </div>

    </Router>

  );
}

export default AppRoutingOne;

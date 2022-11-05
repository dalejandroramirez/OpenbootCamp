
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'


import HomePage from './components/pages/home/HomePage';
import NotFoundPage from './components/pages/404/NotFoundPage';
import Aboutpage from './components/pages/about-faqs/AboutPage';
import Profilepage from './components/pages/profile/ProfilePage';
import Taskspage from './components/pages/home/tasks/TasksPage';
import TaskDetailPage from './components/pages/home/tasks/TaskDetailPage';


function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'> || Home </Link>
          <Link to='/about'> | About </Link>
          <Link to='/faqs'> | FAQs ||</Link>
          <Link to='/unacosa'> | Not Existing Route ||</Link>
        </aside>

      <main>

      <Routes>
        <Route exact path='/' element={ <HomePage/>}/>
        <Route path= '/about' element={<Aboutpage/>}/>
        <Route path= '/faqs' element={<Aboutpage/>}/>
        <Route path= '/profile' element={<Profilepage/>}></Route>
        <Route path= '/tasks' element={<Taskspage/>}></Route>
        <Route path= '/tasks/:tasksId' element={<TaskDetailPage/>}></Route>




        {/* 404 -Page not Found */}
        <Route path='*' element={ <NotFoundPage/>} /></Routes>

      </main>
      </div>

    </Router>

  );
}

export default AppRoutingOne;

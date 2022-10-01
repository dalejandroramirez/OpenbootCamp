import logo from './logo.svg';
import './App.css';
import s from './App.module.css';
import Greeting from './components/pure/greeting';
import GreetingFun from './components/pure/greetingFun';
import TaskListComponent from './components/container/task_list';
import Contacto from "./components/container/contacts"

function App() {
  return (
    <div className={`${s.app}`}>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de clase */}
        {/* <Greeting name="Alejo"></Greeting> */}
        {/* Compente funcional */}
        {/* <GreetingFun name="Alejo"></GreetingFun> */}
        {/* Componente Listado de Tareas */}
        
        {/* <TaskListComponent ></TaskListComponent> */}
        <Contacto></Contacto>
        

      </header>
    </div>
  );
}

export default App;

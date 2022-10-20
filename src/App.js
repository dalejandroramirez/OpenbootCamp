import logo from './logo.svg';
import './App.css';
import s from './App.module.css';
import Greeting from './components/pure/greeting';
import GreetingFun from './components/pure/greetingFun';
import TaskListComponent from './components/container/task_list';
import Contacto from "./components/container/contacts"
import Ejemplo1 from './components/hooks/Ejemplo1';
import Ejemplo2 from './components/hooks/Ejemplo2';
import MiComponeteConContexto from './components/hooks/Ejemplo3'
import Ejemplo4 from './components/hooks/Ejemplo4';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className={`${s.App}`}>  
      {/* <header className="App-header"> */}

        {/* Componente de clase */}
        {/* <Greeting name="Alejo"></Greeting> */}

        {/* Compente funcional */}
        {/* <GreetingFun name="Alejo"></GreetingFun> */}

        {/* Componente Listado de Tareas */}
        <TaskListComponent ></TaskListComponent>
        
        {/* Ejemplos de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponeteConContexto></MiComponeteConContexto> */}
        {/* <Ejemplo4 nombre = "Alejo">
            Todo esto es tratado como props.children
          <h3>
            Contenido del coso
          </h3>
        </Ejemplo4> */}
        
        {/* <Greetingstyled name = "Alejo" estado = {true}></Greetingstyled> */}

        {/*Gestion de eventos  */}
      {/* <Father></Father> */}
      {/* <TaskListComponent ></TaskListComponent> */}
      {/* </header> */}
    </div>
  );
}

export default App;

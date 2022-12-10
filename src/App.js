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
import ContactListComponent from './components/container/contact_list';
import Optionalrender from './components/pure/optionalRender';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import Taskformformink from './components/pure/forms/taskFormFormink';
import AsyncExample from './components/pure/AsyncExample';
import Observableexample from './components/pure/forms/ObservableExample';
import Fetchexample from './components/pure/FetchExample';
import Axiosexample from './components/pure/AxiosExample';
import Axioscrudexample from './components/pure/AxiosCRUDExample';


// Dependecias PWA
import Updater from './components/sw/Updater'


function App() {
  return (
    <div className={`${s.App}`}>  
      {/* <header className="App-header"> */}

        {/* Componente de clase */}
        {/* <Greeting name="Alejo"></Greeting> */}

        {/* Compente funcional */}
        {/* <GreetingFun name="Alejo"></GreetingFun> */}


        
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


      {/* {

      Formik

       <ContactListComponent>

      </ContactListComponent> } */}

      {/* Ejemplo Renderizado Condicional */}
      {/* <Optionalrender></Optionalrender> */}

      {/* Ejemplos uso de Formik y yup */}
      {/* <Loginformik></Loginformik> */}
      {/* <Registerformik></Registerformik> */}
      
      {/* Ejemplo de procesos Asincronos */}
      {/* <AsyncExample/> */}
      {/* <Observableexample/> */}
      {/* <Fetchexample/> */}
      {/* <Axiosexample/> */}
      <Axioscrudexample/>
      
      {/* Componente Listado de Tareas */}
      {/* <TaskListComponent ></TaskListComponent> */}

      {/* Necesario para pwa */}
      <Updater />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// useSelector : tomas algo del store
// useDispatch : despachar acciones
import { increment } from './store/slicers/locationSlice';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';
import TodosContainer from './components/containers/TodoContainer';


import TodosContainerSlice from './components/containersSlice/TodoContainerSlice';
import TodoFormContainerSlice from './components/containersSlice/TodoFormContainerSlice';

function App() {

  // const(<nombre Propiedad>) = useSelector(state => state.<nombreReducer>)

  // const {counter} = useSelector(state => state.counterState);
  // const {cosa} = useSelector(state => state.filterState);
  // const {value} = useSelector(state => state.counterState);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
      {/* Usando Redux */}
        {/* <TodoContainer></TodoContainer>
        <TodoFormContainer></TodoFormContainer> */}
       
       {/* Usando Redux Toolkit sun funcionar :() */}
    {/* <TodosContainerSlice></TodosContainerSlice>
    <TodoFormContainerSlice></TodoFormContainerSlice>  */}
        {/* Todas las opciones de filtrado */}
        <Filteroptions></Filteroptions>

        {/* <button onClick={()=> dispatch(increment())}> 
          Count is  {counter}
        </button>
                  <p>
          value is {cosa}
          </p> */}

      </header>
    </div>
  );
}

export default App;

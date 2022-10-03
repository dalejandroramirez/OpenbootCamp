import logo from './logo.svg';
import './App.css';
import ClockClass from './components/container/clockClass';
import Clockfun from './components/container/clockFun';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockClass></ClockClass>
        <Clockfun></Clockfun>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import s from './App.module.css';
import Greeting from './components/pure/greeting';
import GreetingFun from './components/pure/greetingFun';
function App() {
  return (
    <div className={`${s.app}`}>  
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Alejo"></Greeting> */}
        <GreetingFun name="Alejo"></GreetingFun>

      </header>
    </div>
  );
}

export default App;

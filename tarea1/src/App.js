import logo from './logo.svg';
import './App.css';
import ComponenteA from './component/componenteA';
import { Contact } from './models/contact.model';

function App() {
  const contactoPrueba = new Contact('Alejo',
                                    'Ramirez',
                                    '123lalolanda@open-bootcamp.com',
                                    false  );

  
  const contactoPrueba2 = new Contact('Alejo',
                                    'Ramirez',
                                    '123lalolanda@open-bootcamp.com',
                                    true  );


  // const contactoPrueba3 ={
  //   nombre: "adn",
  //   apellido:"landa",
  //   email: "ds",
  //   linked:true
  // }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ComponenteA contact={contactoPrueba}/>
          <ComponenteA contact={contactoPrueba2}/>
          {/* <ComponenteA contact={contactoPrueba3}/> */}
      </header>
    </div>
  );
}

export default App;
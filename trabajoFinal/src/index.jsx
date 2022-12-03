// Importar de React
import React from 'react';
import reactDom from 'react-dom';

// Importar Redux
// import { Provider } from "react-redux"

import App from './components/App';

// Importar hojas de estilos
import './styles/css/index.scss';

// Si se trabaja con redux crear el Store y aplicar el middleware de redux Saga

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

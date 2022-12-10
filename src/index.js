
import React from 'react';
import ReactDOM from 'react-dom'; 

// npm i bootstrap --save para agregar bootstrap al proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importante : Los estilos propios son debajo de bootstrap
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';

//PWA
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import { onServiceWorkerUpdate } from '@3m1/service-worker-updater'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne /> */}
  {/* <AppRoutingFinal/> */}
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onUpdate: onServiceWorkerUpdate
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import config function of app store
import {createAppAsyncStore, createAppStore} from './store/config/storeConfig'
// Redux Import
import { Provider } from 'react-redux';

import { createAppStoreNew, store } from './store/config/storeConfigNew';
import AppReduxSaga from './AppReduxSaga';

// We create the app Store
// let appStore = createAppStore();

let appAsyncStore = createAppAsyncStore();



// console.log('slice incial', appStore.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appAsyncStore}> 
   <React.StrictMode>
      <AppReduxSaga />
    </React.StrictMode>
  </Provider>
);

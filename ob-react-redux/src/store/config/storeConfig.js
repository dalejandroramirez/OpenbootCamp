import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension' 
import { rootReducer } from '../reducers/rootReducer';

export const createAppStore = () => {
  let store = createStore(rootReducer,composeWithDevTools());
  // console.log('inicial',store.getState());
  store.subscribe( () => {
    console.log('pdate state', store.getState())
  });

  

  return store;
}
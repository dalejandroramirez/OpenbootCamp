import {applyMiddleware, compose, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension' 
import { rootReducer } from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../sagas/sagas';


export const createAppStore = () => {
  let store = createStore(rootReducer,composeWithDevTools());
  // console.log('inicial',store.getState());
  store.subscribe( () => {
    console.log('pdate state', store.getState())
  });

  return store;
}



export const createAppAsyncStore = () => {

  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
        composeWithDevTools()
        )
      );
  
  // We init the watcher Saga
  sagaMiddleware.run(watcherSaga);


  // console.log('inicial',store.getState());
  // store.subscribe( () => {
  //   console.log('pdate state', store.getState())
  // });

  return store;
}
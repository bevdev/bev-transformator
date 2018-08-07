import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'
import { saveToLocalStorageMiddleware, loadStateFromLocalStorage } from './middleware';

const loggerMiddleware = createLogger();

const persistedState = loadStateFromLocalStorage();
console.log(persistedState);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware, loggerMiddleware,
        saveToLocalStorageMiddleware
    )
)

const store = createStore( rootReducer, persistedState, enhancer );


export default store;
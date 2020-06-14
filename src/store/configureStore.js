import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/loginReducer'
import registerReducer from '../reducers/registerReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      loginReducer,
      registerReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

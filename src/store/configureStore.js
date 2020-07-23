import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/loginReducer'
import registerReducer from '../reducers/registerReducer'
import userReducer from '../reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      loginReducer,
      registerReducer,
      userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

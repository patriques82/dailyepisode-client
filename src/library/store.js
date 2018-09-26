import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as authentication } from '../ducks/authentication';

const rootReducer = combineReducers({
  authentication,
});

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));
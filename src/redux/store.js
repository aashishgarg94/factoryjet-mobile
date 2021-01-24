import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { dataReducer } from './reducers/dataReducer';

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
  data: dataReducer,
});

const composeEnhancers = compose;
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;

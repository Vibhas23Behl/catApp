import { composeWithDevTools } from 'redux-devtools-extension';
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './auth';
import cartReducer from './cart';
import themeReducer from './theme';

const reducers = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  cart: cartReducer
});

const middleware = [ReduxThunk];

const store = configureStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;

import {combineReducers} from 'redux';
import authSlice from './authSlice';
import {authApi} from '../api/authApi';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authSlice,
});

export default rootReducer;

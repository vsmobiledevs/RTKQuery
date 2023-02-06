import {combineReducers} from 'redux';
import { PostApi } from '../api/postApi';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  [PostApi.reducerPath]: PostApi.reducer,
  authSlice,
});

export default rootReducer;

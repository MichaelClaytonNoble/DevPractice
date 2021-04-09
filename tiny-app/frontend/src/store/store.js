import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {questionReducer } from '../reducers/question_reducer';
export const configureAppStore = preloadedState => {
  const store = configureStore({
    reducer: questionReducer,
    //adds in the logger if we are not in production mode 
    middleware: getDefaultMiddleware => getDefaultMiddleware() //gets an array with middleware 
        .concat(process.env.NODE_ENV !== 'production' ? logger : []),
    preloadedState
  });
  return store; 
}
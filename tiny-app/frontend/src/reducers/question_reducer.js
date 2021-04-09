import {createReducer} from '@reduxjs/toolkit';
//builder is an object that provides extra tools 
export const questionReducer = createReducer({}, builder => {
  builder
    .addCase('RECEIVE_QUESTIONS', (state, action) => {
      //since state is a new version we can update it 
      state = action.payload 
    })
    .addCase('RECEIVE_QUESTION', (state, action) => {
      state[action.payload._id] = action.payload
    })
    .addCase('REMOVE_QUESTION', (state, action) => {
      return state.delete(action.payload._id)
    })
    //we may or may not need a default case 
    // .addDefaultCase(state => {
    //   return state
    // })
});
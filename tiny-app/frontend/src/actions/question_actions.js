import {createAction} from '@reduxjs/toolkit'; 
import axios from 'axios'; 

export const receiveQuestions = createAction('RECEIVE_QUESTIONS');
export const receiveQuestion = createAction('RECEIVE_QUESTION');
export const removeQuestion = createAction('REMOVE_QUESTION');

export const fetchQuestions = () => async dispatch => {
  try{
    const res = await axios.get('http://localhost:5000/api/questions')
    dispatch(receiveQuestions(res.data))
  }
  catch(err){
    console.log(err) //mayybe send to errors reducer. 
  }
}
export const fetchQuestion = (question) => async dispatch => {
  try{
    const res = await axios.get('http://localhost:5000/api/questions', question)
    dispatch(receiveQuestion(res.data))
  }
  catch(err){
    console.log(err) //mayybe send to errors reducer. 
  }
}

export const deleteQuestion = id => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:5000/api/questions/${id}`)
    dispatch(rdeleteQuestion(res.data))
  }
  catch(err){
    console.log(err) //mayybe send to errors reducer. 
  }
}
export const submitQuestion = question => async dispatch => {
  try{
    const res = await axios.get(`http://localhost:5000/api/questions/`, question)
    dispatch( submitQuestion(res.data))
  }
  catch(err){
    console.log(err) //mayybe send to errors reducer. 
  }
}


import React, {useState} from 'react'; 
import {connect} from 'react-redux'; //connect with values in the store 
import { submitQuestion } from './actions/'
const Form = () => {
  //constant, function on how we change the name
  //this is a tuple 
  //use state takes in a default 
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [repo, setRepo] = useState('');
  const [live, setLive] = useState('');

  return (
    <>
      <input type="text" placeholder="name" onChange={setName}>{name}</input>
      <input type="text" placeholder="text" onChange={setText}>{text}</input>
      <input type="text" placeholder="repo" onChange={setRepo}>{repo}</input>
      <input type="text" placeholder="live" onChange={setLive}>{live}</input>
    </>
  )
}



const mDTP=dispatch=>({
  submitQuestion: question => dispatch(submitQuestion(question))
})
export default connect(null, mDTP)(Form)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


//lets create the store object
let rootReducer =(prevState=initialState,action)=>{
  let newState = prevState;
  switch(action.type){
    case "CHANGE_TO_SURAJ":
      return {
        ...newState,
        name:action.payload
      }
    case "CHANGE_TO_MADHURI":
      return {
        ...newState,
        name:action.payload
      }
     default:  
     return {
      ...newState
     } 
  }
  //return newState;
}
let actionCreator1=()=>{
  return {type:"CHANGE_TO_MADHURI",payload :"MADHURI SISODIYA"}
}

export const myAsyncAction =()=>{
  console.log("ok")
   return  (dispatch,getState)=>{
    setTimeout(function(){
      dispatch(actionCreator1())
    },5000)
   }
}
let initialState={
  name:"sakshi sisodiya"
}
let store =createStore(rootReducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
     </Provider>
  </React.StrictMode>
);


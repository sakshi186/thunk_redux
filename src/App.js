import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { myAsyncAction } from '.';

function App() {
  //1.state/hooks
  let state = useSelector((storeObject)=>{
    return storeObject;
  })
  
  let dispatch = useDispatch();
  

  //2.function definition


  //3.return statement
  return (
    <div className="App">
      <h1>{state.name}</h1> 
      <button onClick={()=>{dispatch( myAsyncAction())  }}>Change My Name</button>
    </div>
  );
}

export default App;

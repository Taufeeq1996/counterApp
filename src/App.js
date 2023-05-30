import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increaseCount,decreaseCount, resetCount } from './redux/actions/Actions';
import './App.css';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increaseCount());
  }
  const decrement = () => {
    dispatch(decreaseCount());
  }
  const resetZero = () => {
    dispatch(resetCount());
  }

  return (
    <div className="App">
      <h1 className='app-heading'>COUNTER APP</h1>
      <div className='btn-div'>
       <button type="button" onClick={increment}>Increment</button>
       <button type="button" onClick={decrement}>Decrement</button>
       <button type="button" onClick={resetZero}>Rest</button>
      </div>
      <h1 className='app-count'>{count}</h1>
    </div>
  );
}

export default App;

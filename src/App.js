import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  multipleTwo,
  divideTwo,
  incrementByAmount,
} from './reduxToolkit/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}> + 1 </button>
        <button onClick={() => dispatch(decrement())}> - 1 </button>
        <button onClick={() => dispatch(multipleTwo())}> * 2 </button>
        <button onClick={() => dispatch(divideTwo())}> / 2 </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
        <button onClick={() => dispatch(incrementByAmount(-5))}>- 5</button>
      </div>
      <div>{count}</div>
    </div>
  );
};

export default App;

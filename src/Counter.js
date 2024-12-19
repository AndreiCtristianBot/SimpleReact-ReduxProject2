import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';

const Counter = () => {
  const state = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-5">
      <h1 className="text-primary">Count: {state}</h1>
      <button className="btn btn-success" onClick={() => dispatch(increment())}>Increment</button>
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
import React, { useReducer } from 'react';

const Counter = () => {
  const inititalState = 0;
  const counterReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
      return state + action.payload.count;
    } else if (action.type === 'DECREMENT') {
      return state - action.payload.count;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, inititalState);
  return (
    <div className="wraper">
      <div className="counter">
        <button
          disabled={state === 0}
          onClick={() => dispatch({ type: 'DECREMENT', payload: { count: 5 } })}
        >
          -
        </button>
        <span>{state}</span>
        <button
          onClick={() => dispatch({ type: 'INCREMENT', payload: { count: 5 } })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

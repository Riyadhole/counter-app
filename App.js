import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './reducer';

function App() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default App;

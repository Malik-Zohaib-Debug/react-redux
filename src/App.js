import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { incrementNumber, decrementNumber } from "./actions";
import './App.css'

export default function App(){
  const state = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  console.log(state);
  return ( 
    <div className="App">
      <div className="counter__container">
        <div className="counter__header">
          <h1>Increment/Decrement Counter</h1>
        </div>
        <div className="counter__desc">
          <p>Using React & Redux</p>
        </div>
        <div className="counter__content">
          <div className="counter__controls">
            <button onClick={ () => dispatch(decrementNumber())}>-</button>
            <p>{state}</p>
            <button onClick={ () => dispatch(incrementNumber())}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}


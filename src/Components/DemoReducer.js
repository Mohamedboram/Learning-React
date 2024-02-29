import React, { useReducer } from 'react'

function reducer(currentState,action){
    switch(action){
        case 'decrement':
            return {count :currentState.count - 1};
        case 'increment':
            return {count : currentState.count + 1};
        default: return {count : currentState.count};
    }
}
function DemoReducer() {
    let [state, dispatcher]=useReducer(reducer,{count: 0})
    function decrementHandler(){
        dispatcher('decrement');

    }
    function incrementHandler(){
        //state updating function
        dispatcher('increment');

    }
  return (
    <div className='Container'>
    <button onClick={decrementHandler}>-</button>
    <span>{state.count}</span>
    <button onClick={incrementHandler}>+</button>
      
    </div>
  )
}

export default DemoReducer

import React from 'react'
function Model(props) {
  return (
    <div>
    <div className={`alert ${props.showModel ? '' : 'hidden'}`}>
    <h2>This is an Alert!</h2>
    <p>
       This is a very simple example of how a custom
       alert window can be created and displayed 
       dynamically using JavaScript.
    </p>
    <button className= "modal-btn" onClick={props.hideModel}>OK</button>
</div>
<div className={`overlay ${props.showModel ? '' : 'hidden'}`}></div>
    </div>
  )
}

export default Model

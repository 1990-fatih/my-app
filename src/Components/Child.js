import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.sayHello('Fatih')} >Sag Hello</button>
    </div>
  )
}

export default Child
import React, { Component } from 'react'
import Child from './Child'

export default class 
 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mesaj:"Merhaba"
      }

      this.sayHello=this.sayHello.bind(this)

    }
sayHello(isim){
    alert(`${this.state.mesaj} nasilsin ${isim}` )
}

  render() {
    return (
      <div>
        <Child sayHello={this.sayHello}/>
      </div>
    )
  }
}

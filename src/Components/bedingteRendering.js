import React, { Component, version } from 'react'



 class bedingteRendering extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
         verlauf : true
      }
    }
    
    render() {

        if(verlauf){

        return (

            <div>
                Verlauf : Gültig
            </div>
        )
        }
        else
         {
            <div>
                Verlauf : Ungültig
            </div>
        

        }
   
  }
}

export default bedingteRendering
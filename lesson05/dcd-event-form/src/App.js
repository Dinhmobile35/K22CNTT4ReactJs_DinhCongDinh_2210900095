import React, { Component } from 'react'
import Dcdform1 from './components/Dcdform1'
import Dcdform2 from './components/Dcdform2'
import Dcdform3 from './components/Dcdform3'

export default class App extends Component {
  DcdSubmit = (param)=>{
    console.log ("App:",param);
  }
  render() {
    return (
      <div>
        <h1>controlled Component ReactJs form </h1>
       <Dcdform1/>
       <Dcdform2/>
       <hr/>
       <Dcdform3 onsubmit={this.DcdSubmit}/>
      </div>
    )
  }
}

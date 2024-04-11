import React, { Component } from 'react'

export default class DCD_Classcomp extends Component {
    constructor(props){
        super(props);
    this.state = {
        fistName:"Công",
        lastName:"Định",
        userName:"K22cntt4"
    }
}
    render(){
        return(
            <div className='alert alert-danger'>
               <h2> Class Component Demo</h2>
               <hr/>
               <h3> Dữ liệu trong state</h3>
               <h4>xin chào:{this.state.fistName} {this.state.lastName}</h4>
               <hr/>
               <h3>Dữ liệu props</h3>
            </div>
        );
    }

}

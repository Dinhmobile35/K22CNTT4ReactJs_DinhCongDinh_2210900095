import React, { Component } from 'react'

export default class Class_DinhCongDinh extends Component {
   constructor(props){
    super(props);
    this.state={
        fullName:"Đinh Công Định",
        class:"k22cntt4"
    }
   }
    users ={
        name:"Đinh Công Định",
        age:20
    }
    //hand xu ly su kien
     handlechange = (event)=>{
        this.state({
        fullName:"Đinh Công Định",
        })
     }
    render() {
    return (
      <div>
        <h2>Class component Demo</h2>
        {this.users.name}-{this.users.age}

        <hr/>
        <h3> 
            info:{this.props.info}
        </h3>
        <h3>time:{this.props.time}</h3>
        <hr/>
        <h3>state:
            FullName:{this.state.fullName} -
            class:{this.state.class}

        </h3>
        <button onClick={this.handlechange}>change Name</button>
      </div>
    )
  }
}

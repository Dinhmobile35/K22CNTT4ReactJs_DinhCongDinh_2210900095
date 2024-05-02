import React, { Component } from 'react'

export default class Dcdform2 extends Component {
    //1.
    constructor(props){
        super(props);
        this.state = {
            course:"Dcd-HTML5"
        }
    }
    // 3hàm sử lý sự kiện
    handleChange = (event)=>{
        //cập nhật state
        this.setState({
            course:event.target.value
        })
    }
    //4.
    DcdhandleSubmit= (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.DcdhandleSubmit}>
            <lable>course</lable>
            <select value={this.state.course}
                onChange={this.DcdhandleChange} >
                <option value={"Dcd-HTML5"}>Dcd-HTML5</option>
                <option value={"Dcd-CSS3"}>Dcd-CSS3</option>
                <option value={"Dcd-JS"}>Dcd-JS</option>
                <option value={"Dcd-RJ"}>Dcd-Rj</option>      
            </select>
             <input type='submit' value={"Submit"}/>
        </form>
      </div>
    )
  }
}

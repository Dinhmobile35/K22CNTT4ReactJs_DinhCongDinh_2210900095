import React, { Component } from 'react'

export default class Dcdform3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Đinh Công Đinh",
            age:"20",
            course:"Dcd-HTML5",
            gender:true

        }
    }
    DcdhandleChange =(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })

    }
    DcdhandleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
        //chuyển dữ liệu lên app
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div>
        <form>
            <div>
                <lable>Student Name:</lable>
                <input name ='studentName'
                       value={this.state.studentName}
                       onChange={this.DcdhandleChange} />
            </div>
            <div>
            <lable>Age:</lable>
                <input name='age'
                       value={this.state.age}
                       onChange={this.DcdhandleChange} />
            </div>
            <div>
            <lable>Gender:</lable>
                <input type='radio' name='gender'  
                value={true} checked={(this.state.gender===true)?'checked':''}/> Nam
                <input type='radio' name='gender' 
                value={false} checked={(this.state.gender===false)?'checked':''}/> Nữ
            </div>
            <div>
            <lable>course</lable>
            <select name='course'
                value={this.state.course}
                onChange={this.DcdhandleChange} >
                <option value={"Dcd-HTML5"}>Dcd-HTML5</option>
                <option value={"Dcd-CSS3"}>Dcd-CSS3</option>
                <option value={"Dcd-JS"}>Dcd-JS</option>
                <option value={"Dcd-RJ"}>Dcd-Rj</option>      
            </select>
            </div>
            <button onclick={this.DcdhandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

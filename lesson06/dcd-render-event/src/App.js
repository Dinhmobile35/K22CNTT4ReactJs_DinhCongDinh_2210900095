import React, { Component } from 'react'
import DcdProductList from './components/DcdProductList';
import DcdProductAdd from './components/DcdProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products : [
        { title: 'Đinh Công Định', id: 2210900095 , status:1},
        { title: 'Garlic', id: 2, status:1 },
        { title: 'Apple', id: 3, status:0  },
        { title: 'samsung', id: 4, status:1 },
      ]
    }
  }
dcdHandleSubmit =(param)=>{
  console.log("App",param);
  let {products} =this.state;
  products.push(param);
  this.setState({
    products:products
  })
}



  render() {
    return (
      <div className='container border mt-5'>
        <h1>Đinh Công Định-Render data - event form </h1>
        <hr/>
        <DcdProductList renderProducts={this.state.products}/>
        <hr/>
        <DcdProductAdd onSubmit ={'this.dcdHandleSubmit'}/>
      </div>
    )
  }
}

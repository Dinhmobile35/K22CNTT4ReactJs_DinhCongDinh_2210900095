import React, { Component } from 'react'

export default class DcdProductList extends Component {

  render() {
    let {renderProducts} =this.props;
    console.log("Products:",renderProducts);

    let elementProduc = renderProducts.map((item,index)=>{
      return(
             <>
             <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.status===1?'Active':'NonActive'}</td>
             </tr>
             </>
      )
    })
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
           <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
           </thead>
           <tbody>
           {elementProduc}
           </tbody>
        </table>
      </div>
    )
  }
}

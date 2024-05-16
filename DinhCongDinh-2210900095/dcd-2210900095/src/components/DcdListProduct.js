import React, { Component } from "react";

export default class DcdListProduct extends Component {
  render() {
    let { dcdRenderList } = this.props;

    let dcdElList = dcdRenderList.map((item, i) => {
      return (
        <>
          <tr key={i}>
            <td>{item.dcd_productId}</td>
            <td>{item.dcd_productName}</td>
            <td>{item.dcd_quantity}</td>
            <td>{item.dcd_price}</td>
          </tr>
        </>
      );
    });
    return (
      <div>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{dcdElList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

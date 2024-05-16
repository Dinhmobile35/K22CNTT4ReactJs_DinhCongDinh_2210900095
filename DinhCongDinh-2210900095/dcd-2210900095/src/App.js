import React, { Component } from "react";
import DcdListProduct from "./components/DcdListProduct"
import DcdProductAdd from "./components/DcdProductAdd";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dcd_Products: [
        {
          dcd_productId: "2210900095",
          dcd_productName: "Đinh Công Định",
          dcd_quantity: 1,
          dcd_price: 1000000,
        },
        {
          dcd_productId: "P002",
          dcd_productName: "IPhone 12",
          dcd_quantity: 20,
          dcd_price: 1250,
        },
        {
          dcd_productId: "P003",
          dcd_productName: "IPhone 13",
          dcd_quantity: 10,
          dcd_price: 1500,
        },
      ],
    };
  }
  dcdHandleSubmit = (par) => {
    let { dcd_Products } = this.state;

    dcd_Products.push(par);
    this.setState({
      dcd_Products: dcd_Products,
    });
  };

  render() {
    return (
      <div>
        <h2 className="titleName">Đinh Công Định - 2210900095</h2>
        <DcdListProduct dcdRenderList={this.state.dcd_Products} />
        <hr />
        <DcdProductAdd dcdOnSubmit={this.dcdHandleSubmit} />
      </div>
    );
  }
}

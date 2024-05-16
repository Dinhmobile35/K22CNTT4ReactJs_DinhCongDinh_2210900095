import React, { Component } from "react";

export default class DcdProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dcd_productId: "0",
      dcd_productName: "Phone",
      dcd_quantity: 0,
      dcd_price: 0,
    };
  }
  dcdHandleChange = (e) => {
    let dcdName = e.target.name;
    let dcdValue = e.target.value;
    this.setState({ [dcdName]: dcdValue });
  };
  dcdHandleSubmit = (e) => {
    e.preventDefault();
    this.props.dcdOnSubmit(this.state);
  };
  render() {
    return (
      <div>
        <form className="col-md-6">
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Product Id
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dcd_productId"
              value={this.state.dcd_productId}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={this.dcdHandleChange}
            />
          </div>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                Product Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dcd_productName"
              value={this.state.dcd_productName}
              onChange={this.dcdHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Quantity
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dcd_quantity"
              value={this.state.dcd_quantity}
              onChange={this.dcdHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Price
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dcd_price"
              value={this.state.dcd_price}
              onChange={this.dcdHandleChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.dcdHandleSubmit}>
            Ghi lại
          </button>
        </form>
      </div>
    );
  }
}

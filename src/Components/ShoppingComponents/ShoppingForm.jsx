import React, { Component, Fragment } from "react";
class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      qty: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.props.addItems(this.state);
    
    e.preventDefault();

    this.setState({
      productname: "",
      qty: "",
    });
  };
  render() {
    return (
      <Fragment>
        <section className="row my-4 container p-0 m-0">
          <div className="col-md-6 bg-light">
            <h4 className="display-6 font-weight-bold text-primary  pt-2 pb-2">
              add Product
            </h4>
            <form className="card card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="productname">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="productname"
                  id="productname"
                  placeholder="enter product name"
                  required
                  value={this.state.productname}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="qty">Product Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  name="qty"
                  id="qty"
                  placeholder="enter product quantity"
                  value={this.state.qty}
                  required
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-success float-right">
                  Add Product
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 bg-white">
            <h4 className="display-6 font-weight-bold text-primary border-bottom pt-2 pb-2">
              Mi 10T (Cosmic Black, 128 GB) (6 GB RAM)
            </h4>
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kg9qbgw0/mobile/h/m/z/mi-10t-mzb07zain-original-imafwju5ny3gtkzs.jpeg?q=70"
              alt="mi10t"
            />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ShoppingForm;

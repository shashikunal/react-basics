import React, { Component, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingForm from "./ShoppingForm";
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          productname: "Realme 7 pro",
          qty: 1,
          id: uuidv4(),
        },
        {
          productname: "oneplus 8Pro",
          qty: 1,
          id: uuidv4(),
        },
        {
          productname: "MI 10T",
          qty: 1,
          id: uuidv4(),
        },
      ],
    };
  }

  addItems = (item) => {
    let newItem = { ...item, id: uuidv4() };
    this.setState((state) => ({ items: [...state.items, newItem] }));
  };

  renderItem() {
    return (
      <ul className="list-group">
        {this.state.items.map((product) => (
          <Fragment key={product.id}>
            <li className="list-group-item mt-2">
              <span className="font-weight-bold text-success ">
                {product.productname}
              </span>
              <span className="badge badge-light float-right m-2">
                {product.qty}
              </span>
              <span>
                <button className="btn btn-success float-right btn-sm">
                  Buy
                </button>
              </span>
            </li>
          </Fragment>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <Fragment>
        {this.renderItem()}
        <ShoppingForm addItems={this.addItems} />
      </Fragment>
    );
  }
}

export default ShoppingList;

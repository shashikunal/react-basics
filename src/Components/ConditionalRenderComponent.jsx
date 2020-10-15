import React, { Component, Fragment } from "react";
import "./conditionalStyles.css";
class Navbar extends Component {
  state = {
    isLoggedIn: true,
  };
  render() {
    return (
      <Fragment>
        <ul className="navbar-nav ml-auto">
          {this.state.isLoggedIn === true ? (
            <Fragment>
              <li className="nav-item">
                <a className="nav-link logout" href="/logout">
                  logout
                </a>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  login
                </a>
              </li>
            </Fragment>
          )}
        </ul>
      </Fragment>
    );
  }
}

export default Navbar;

// how to do client side validation in react
import React, { Component, Fragment } from "react";

const validEmailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username Must be 5 characters" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Password Must be 6 characters" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(this.state.errors)) {
      console.log("valid form");
      console.log(this.state);
    } else {
      console.log("invalid form");
    }
  };
  render() {
    return (
      <Fragment>
        <div className="col-md-4 card mx-auto mt-4">
          <h2 className="display-5 text-uppercase text-center text-primary border-bottom p-2">
            Register
          </h2>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  required
                  placeholder="enter username"
                  id="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.username}</p>
              </div>
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  placeholder="enter email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  placeholder="enter username"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <p className="text-danger">{this.state.errors.password}</p>
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">Register</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RegisterComponent;

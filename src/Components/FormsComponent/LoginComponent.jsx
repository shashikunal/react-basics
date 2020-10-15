import React, { Component, Fragment } from "react";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    // bind this keyword
    // this.handleChange = this.handleChange.bind(this);
  }

  //change event to handle any update or change in your form
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <Fragment>
        <div className="col-md-4 card mx-auto mt-4">
          <h2 className="display-5 text-uppercase text-center text-primary border-bottom p-2">
            Login
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
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block">login</button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoginComponent;

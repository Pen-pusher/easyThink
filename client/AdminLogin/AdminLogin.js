import React from "react";
import "bulma/css/bulma.css";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    var adminData = {
      email: this.state.email,
      password: this.state.password
    };
    //   Method To Handle The Login of Admin Which Is Seeded Into Db
    fetch("http://localhost:3000/api/v1/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(adminData)
    })
      .then(res => res.json())
      .then(adminData => {
        adminData.token
          ? localStorage.setItem("token", adminData.token)
          : alert("Check Admin Credentials");
        localStorage.token
          ? this.props.history.push("/admin-dashboard")
          : alert("Check Admin Credentilas");
      });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <section className="section">
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      name="email"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fa fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      name="password"
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button
                      className="button is-success"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminLogin;

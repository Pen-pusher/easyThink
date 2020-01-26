import React from "react";
import adminLogo from "../frontend-task/media/admin.png";
import "bulma/css/bulma.css";

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/admin-login");
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <center>
            <ul className="menu-list">
              <li>
                <a className="is-active"> Welcome To Admin Dashboard</a>
                <img src={adminLogo} width="100px" height="200px" />
              </li>
            </ul>
            <p className="menu-label">Click The Button To Logout</p>
          </center>
          <ul className="menu-list">
            <li>
              <a className="button is-danger" onClick={this.handleLogout}>
                {" "}
                Logout
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;

import React from "react";
import "bulma/css/bulma.css";

import { Link } from "react-router-dom";
class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <Link to="/template">
            <a
              className="button is-primary is-outlined button is-link"
              style={{ marginTop: "30px" }}
            >
              Click Here To Check The Template
            </a>
          </Link>
          <Link to="/admin-login">
            <a
              className="button is-primary is-outlined button is-danger"
              style={{ marginTop: "30px" }}
            >
              Click Here To Login To Admin
            </a>
          </Link>
        </center>
      </React.Fragment>
    );
  }
}

export default Homepage;

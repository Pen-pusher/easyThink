import React from "react";

import Frontend from "./frontend-task/Frontend";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminDashbord from "./AdminLogin/AdminDashboard";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route path="/template" component={Frontend} />
          <Route path="/admin-login" component={AdminLogin} />
          <Route path="/admin-dashboard" component={AdminDashbord} />
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

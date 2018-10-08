import React, { Component } from "react";
import { Switch, Route } from "react-router";

import Contact from "./pages/contact.jsx";
import Thanks from "./pages/thanks.jsx";
import Home from "./pages/home.jsx";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={props => <Home {...props} />} />
        <Route path="/thanks" render={props => <Thanks {...props} />} />
        <Route path="/connect" render={props => <Contact {...props} />} />
      </Switch>
    );
  }
}
export default App;

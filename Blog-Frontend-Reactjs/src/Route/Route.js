import React from "react";
import { Route, Router, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "../Page/Body";
import Signin from "../Page/Signin";
import Create from "../Page/Create";

class RouterUser extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Body/>
        </Route>
        <Route exact path="/signin">
          <Signin/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
      </Switch>    
    );
  }
}
export default RouterUser;

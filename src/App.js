import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Post from "./Post";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import SubmitPost from "./SubmitPost";
import User from "./User";
import SinglePost from "./SinglePost";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route
            path="/createAccount"
            exact={true}
            component={CreateAccount}
          ></Route>
          <Route path="/posts" exact={true} component={Post}></Route>
          <Route path="/submitPost" exact={true} component={SubmitPost}></Route>
          <Route path="/users" exact={true} component={User}></Route>
          <Route
            path="/single/:postid"
            exact={true}
            render={(props) => <SinglePost {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Router } from "react-router";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import { createBrowserHistory } from "history";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false
  };

  onLogInHandler = () => {
    let loggedIn = this.state.loggedIn;
    loggedIn = true;
    this.setState({ loggedIn });
  };

  onLogOutHandler = () => {
    let loggedIn = this.state.loggedIn;
    loggedIn = false;
    this.setState({ loggedIn });
  };

  render() {
    const hist = createBrowserHistory();
    let loggedIn = this.state.loggedIn;
    console.log(hist);
    return (
      <div>
        <Router history={hist}>
          <Switch>
            {/* {!loggedIn ? (
              <SignIn logIn={this.onLogInHandler} />
            ) : (
              <Route
                path="/"
                render={props => (
                  <Home {...props} logOut={this.onLogOutHandler} />
                )}
              />
            )} */}

            <Route
              path="/"
              render={props => (
                <Home {...props} logOut={this.onLogOutHandler} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

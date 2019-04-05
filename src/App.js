import React, { Component } from "react";
import { Route, Switch, Router } from "react-router";
import SignIn from "./Components/SignIn";
import Room from "./Components/Room";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false,
    room: ""
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

  onRoomChoiceHandler = roomChoice => {
    let room = this.state.room;
    room = roomChoice;
    this.setState({ room });
  };

  render() {
    let loggedIn = this.state.loggedIn;

    return (
      <div>
        <BrowserRouter history basename="/">
          <Switch>
            {/* {!loggedIn ? (
              <SignIn logIn={this.onLogInHandler} />
            ) : (
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    room={this.onRoomChoiceHandler}
                    logOut={this.onLogOutHandler}
                  />
                )}
              />
            )} */}
            {/* // above is the main method but for now does not save logged in  */}
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  room={this.onRoomChoiceHandler}
                  logOut={this.onLogOutHandler}
                />
              )}
            />
            <Route
              path="/room"
              render={props => (
                <Room
                  {...props}
                  roomName={this.state.room}
                  logOut={this.onLogOutHandler}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

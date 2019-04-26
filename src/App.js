import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import SignIn from "./Components/SignIn";
import Room from "./Components/Room";
import Urgent from "./Components/Urgent";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    loggedIn: false,
    room: {},
    user: "",
    urgentTasks: [],
    roomList: {}
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

  getChecklist = async roomName => {
    const { data } = await axios.post(`http://localhost:3001/checklist`, {
      listName: roomName
    });

    this.setState({ roomList: data });
  };

  onRoomChoiceHandler = roomChoice => {
    this.getChecklist(roomChoice.id);

    let room = this.state.room;
    console.log(roomChoice);
    room = { name: roomChoice.room, id: roomChoice.id };
    this.setState({ room });
  };

  userHandler = event => {
    let user = this.state.user;
    user = event.target.value;

    this.setState({ user });
  };

  urgentTaskHandler = async taskObject => {
    const { data } = await axios.post(`http://localhost:3001/urgent`, {
      desc: taskObject.desc,
      date: taskObject.date,
      status: taskObject.status,
      picture: taskObject.picture
    });
  };

  getChecklist = async roomName => {
    const { data } = await axios.post(`http://localhost:3001/checklist`, {
      listName: roomName
    });

    this.setState({ roomList: data });
  };

  getUrgentList = async () => {
    const { data } = await axios.get(`http://localhost:3001/urgent`);
    let urgentTasks = this.state.urgentTasks;
    urgentTasks = data;
    this.setState({ urgentTasks });
  };

  render() {
    let loggedIn = this.state.loggedIn;

    return (
      <div>
        <BrowserRouter history basename="/">
          <Switch>
            {loggedIn ? (
              <SignIn
                logIn={this.onLogInHandler}
                userHandler={this.userHandler}
              />
            ) : (
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    getUrgent={this.getUrgentList}
                    userName={this.state.user}
                    room={this.onRoomChoiceHandler}
                    logOut={this.onLogOutHandler}
                  />
                )}
              />
            )}
            {/* // above is the main method but for now does not save logged in  */}
            {/* <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  room={this.onRoomChoiceHandler}
                  logOut={this.onLogOutHandler}
                />
              )}
            /> */}
            <Route
              path="/room"
              render={props => (
                <Room
                  {...props}
                  getUrgent={this.getUrgentList}
                  roomList={this.state.roomList}
                  urgentTasks={this.urgentTaskHandler}
                  roomId={this.state.room.id}
                  roomName={this.state.room.name}
                  logOut={this.onLogOutHandler}
                />
              )}
            />
            <Route
              path="/urgent"
              render={props => (
                <Urgent
                  {...props}
                  urgentTasks={this.state.urgentTasks}
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

import React, { Component } from "react";
import { Route, Switch, Router } from "react-router";
import SignIn from "./Components/SignIn";
import Room from "./Components/Room";
import Urgent from "./Components/Urgent";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

class App extends Component {
  state = {
    loggedIn: false,
    room: {},
    user: "",
    urgentTasks: [],
    roomLists: {
      lanes: {
        morning: [
          { desc: "Check the lanes and make sure they are slick" },
          { desc: "Do the converyors work?" },
          { desc: "checking the data in checklist morning" },
          { desc: "check the bowling balls f or wear" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "lanes checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "lanes checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      },
      mainBar: {
        morning: [
          { desc: "is the bar stocked and full?" },
          { desc: "Did yesterdays staff do their sidework" },
          { desc: "checking the data in checklist morning" },
          { desc: "Any repairs need to be done ?" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "main bar checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "main barchecking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      },
      backBar: {
        morning: [
          { desc: "is the bar stocked and full?" },
          { desc: "Did yesterdays staff do their sidework" },
          { desc: "checking the data in checklist morning" },
          { desc: "Any repairs need to be done ?" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "main bar checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "main barchecking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      },
      barGames: {
        morning: [
          { desc: "are the darts all in their proper spots" },
          { desc: "Is the pool table carpet clean " },
          { desc: "checking the data in checklist morning" },
          { desc: "Any repairs need to be done ?" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "main bar checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "main barchecking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      },
      patioBar: {
        morning: [
          { desc: "is the patio bar stocked and full?" },
          { desc: "Did yesterdays staff do their sidework" },
          { desc: "checking the data in checklist morning" },
          { desc: "Any repairs need to be done ?" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "main bar checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "main barchecking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      },
      vrRoom: {
        morning: [
          { desc: "Do the virtual reality headsets all work?" },
          { desc: "Are the batons functioning correctly" },
          { desc: "checking the data in checklist morning" },
          { desc: "Any repairs need to be done ?" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "main bar checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "main barchecking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      },
      lobbyGames: {
        morning: [
          { desc: "Is the lobby swept clean?" },
          { desc: "Are all of the skeeballs accounted for" },
          { desc: "checking the data in checklist morning" },
          { desc: "Any repairs need to be done ?" },
          { desc: "checking the data in checklist morning" },
          { desc: "checking the data in checklist morning" }
        ],
        lunch: [
          { desc: "main bar checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" },
          { desc: "checking the data in checklist lunch" }
        ],
        dinner: [
          { desc: "main barchecking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" },
          { desc: "checking the data in checklist dinner" }
        ]
      }
    }
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
    console.log(roomChoice);
    room = { room: roomChoice.room, id: roomChoice.id };
    this.setState({ room });
  };

  userHandler = event => {
    let user = this.state.user;
    user = event.target.value;

    this.setState({ user });
  };

  urgentTaskHandler = task => {
    const urgentTasks = this.state.urgentTasks;
    urgentTasks.push(task);
    this.setState({ urgentTasks });
    console.log(this.state.urgentTasks);
  };

  render() {
    let loggedIn = this.state.loggedIn;

    return (
      <div>
        <BrowserRouter history basename="/">
          <Switch>
            {!loggedIn ? (
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
                  roomLists={this.state.roomLists}
                  urgentTasks={this.urgentTaskHandler}
                  roomId={this.state.room.id}
                  roomName={this.state.room.room}
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

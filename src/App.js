import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router";
import uniqid from "uniqid";
import SignIn from "./Components/SignIn";
import Room from "./Components/Room";
import { newDate } from "./Components/Utils/Date/Date";
import Urgent from "./Components/Urgent";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "***************************",
  authDomain: "bar-hero.firebaseapp.com",
  databaseURL: "https://bar-hero.firebaseio.com",
  projectId: "bar-hero",
  storageBucket: "bar-hero.appspot.com",
  messagingSenderId: "278188655935"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// working on adding storage functionality to front end.

class App extends Component {
  state = {
    loggedIn: false,
    room: {},
    user: "",
    urgentTasks: "",
    roomList: "",
    images: {}
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
    const { data } = await axios.post(
      `https://bar-hero-api.herokuapp.com/checklist`,
      {
        listName: roomName
      }
    );

    this.setState({ roomList: data });
  };

  onRoomChoiceHandler = roomChoice => {
    this.getChecklist(roomChoice.id);

    let room = this.state.room;

    room = { name: roomChoice.room, id: roomChoice.id };
    this.setState({ room });
  };

  userHandler = event => {
    let user = this.state.user;
    user = event.target.value;

    this.setState({ user });
  };

  urgentTaskHandler = async taskObject => {
    if (taskObject.status) {
      const task = {
        desc: taskObject.desc,
        date: taskObject.date,
        status: taskObject.status,
        room: taskObject.room,
        notes: taskObject.notes
      };
      let imageId = "";

      if (taskObject.pictures[0]) {
        imageId = uniqid();
        task.imageId = imageId;
        const storageRef = storage.ref();
        const pictureRef = storageRef.child(imageId);
        const image = taskObject.pictures[0];

        pictureRef
          .put(image)
          .then(snapshot => {
            console.log("uploaded a file", snapshot);
          })
          .catch(error => {
            console.log(error, "image failed to upload");
          });
      }
      const { data } = await axios.post(
        `https://bar-hero-api.herokuapp.com/urgent`,
        {
          task
        }
      );
    }
  };

  getChecklist = async roomName => {
    const { data } = await axios.post(
      `https://bar-hero-api.herokuapp.com/checklist`,
      {
        listName: roomName
      }
    );

    this.setState({ roomList: data });
  };

  deleteFromUrgent = async task => {
    const taskBody = task.task;
    const today = newDate();
    task.date = today;
    task.user = this.state.user;

    axios.delete(`https://bar-hero-api.herokuapp.com/delete`, {
      params: {
        date: task.date,
        user: task.user,
        room: taskBody.room,
        id: task.id,
        desc: taskBody.desc
      }
    });

    if (taskBody.imageId) {
      const imageRef = storage.ref(taskBody.imageId);
      imageRef
        .delete()
        .then(function() {
          console.log("file deleted successfully");
          // File deleted successfully
        })
        .catch(function(error) {
          console.log(error, "couldnt delete the file");
          // Uh-oh, an error occurred!
        });
    }
    this.deleteAndRefresh();
  };

  getUrgentList = async () => {
    const { data } = await axios.get(
      `https://bar-hero-api.herokuapp.com/urgent`
    );
    let urgentTasks = this.state.urgentTasks;
    urgentTasks = data;
    this.setState({ urgentTasks });
    this.setUrls();
  };

  deleteAndRefresh = () => {
    this.getUrgentList();
  };

  setUrls = () => {
    const storage = firebase.storage();
    const tasks = this.state.urgentTasks;
    tasks.map(task => {
      task = task.task;

      if (task.imageId) {
        const pathReference = storage.ref(task.imageId);
        pathReference
          .getDownloadURL()
          .then(url => {
            const images = this.state.images;
            const imageId = task.imageId;
            images[imageId] = url;
            this.setState({ images });
          })
          .catch(error => {
            console.log(error, "could net get image url");
          });
      }
    });
  };

  componentDidMount() {
    this.getUrgentList();
  }

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
                path="/home"
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
                  roomList={this.state.roomList}
                  roomName={this.state.room.name}
                  logOut={this.onLogOutHandler}
                />
              )}
            />
            <Route
              path="/"
              render={props => (
                <Urgent
                  {...props}
                  urgentList={this.getUrgentList}
                  urgentTasks={this.state.urgentTasks}
                  logOut={this.onLogOutHandler}
                  deleteUrgent={this.deleteFromUrgent}
                  images={this.state.images}
                  userName={this.state.user}
                  getUrgentList={this.getUrgentList}
                  deleteAndRefresh={this.deleteAndRefresh}
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

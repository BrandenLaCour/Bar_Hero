import React, { Component } from "react";
import ReactLoading from "react-loading";
import * as firebase from "firebase/app";
import "firebase/storage";
import axios from "axios";

class UrgentList extends Component {
  //either needs redux, or checklist row nees to be a stateful component with status in state and picture in state.
  state = {
    urgentTasks: this.props.urgentTasks,
    images: {}
  };

  // need to send this up to app.js, so that on delete, this call can be made.
  getUrgentList = async () => {
    const { data } = await axios.get(`http://localhost:3001/urgent`);
    let urgentTasks = this.state.urgentTasks;
    urgentTasks = data;
    this.setState({ urgentTasks });
    this.setUrls();
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

  async componentDidMount() {
    this.getUrgentList();
  }

  deleteAndRefresh = () => {
    this.getUrgentList();
  };

  render() {
    const tasks = this.state.urgentTasks;
    let list = (
      <ReactLoading
        type={"spin"}
        color={"#2d5277"}
        height={"35%"}
        width={"35%"}
      />
    );

    // NEED TO SCRAP THIS WHOLE SETUP, AND CALL FOR URL STORAGE TO STATE IN DIDMOUNT ETC. WILL HAVE TO TRACK THEM TO PROPER ROWS WITH OBJECTS AND ID's

    if (tasks.length !== 0) {
      list = tasks.map(task => {
        const taskSingle = task.task;

        if (taskSingle.status === "Urgent" || taskSingle.status === "Check") {
          const color =
            taskSingle.status === "Urgent" ? "bg-danger" : "bg-warning";

          //build callback to storage for this tasks image

          return (
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className={`input-group-text ${color}`}>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    onClick={() => (
                      this.props.deleteUrgent(task), this.deleteAndRefresh()
                    )}
                  />
                </div>
                <div className={`input-group-text text-light ${color}`}>
                  <b> {taskSingle.room}</b>
                </div>
                <div className={`input-group-text text-light ${color}`}>
                  {taskSingle.desc}
                </div>
                <div className={`input-group-text text-light bg-secondary`}>
                  {taskSingle.date}
                </div>
                {taskSingle.imageId ? (
                  <div className="card" style={{ width: "8rem" }}>
                    <img
                      src={this.state.images[taskSingle.imageId]}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        }
      });
    }

    return <React.Fragment>{list}</React.Fragment>;
  }
}

export default UrgentList;

// use react-bootstrap documentation

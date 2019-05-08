import React, { Component } from "react";
import ReactLoading from "react-loading";
import * as firebase from "firebase/app";
import "./UrgentList.css";
import "firebase/storage";
import axios from "axios";

class UrgentList extends Component {
  //either needs redux, or checklist row nees to be a stateful component with status in state and picture in state.

  componentDidMount() {
    this.props.getUrgentList();
    this.setState({ checked: false });
  }

  setChecked() {
    this.setState({ checked: true });
  }

  enlargedImage = url => {
    window.location.assign(url);
  };

  render() {
    const tasks = this.props.urgentTasks;

    let list = (
      <ReactLoading
        type={"spin"}
        color={"#2d5277"}
        height={"35%"}
        width={"35%"}
      />
    );

    if (tasks.length !== 0) {
      list = tasks.map(task => {
        const taskSingle = task.task;

        if (taskSingle.status === "Urgent" || taskSingle.status === "Check") {
          const color =
            taskSingle.status === "Urgent"
              ? "text-light bg-danger"
              : "bg-warning";

          //build callback to storage for this tasks image

          return (
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className={`input-group-text ${color}`}>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => (
                      this.props.deleteUrgent(task),
                      this.props.deleteAndRefresh()
                    )}
                  >
                    Resolved
                  </button>
                </div>
                <div className={`input-group-text ${color}`}>
                  <b> {taskSingle.room}</b>
                </div>
                <div className={`input-group-text ${color}`}>
                  {taskSingle.desc}
                </div>
                <div className={`input-group-text text-light bg-secondary`}>
                  {taskSingle.date}
                </div>
              </div>
              {taskSingle.imageId ? (
                <div className="card" style={{ width: "8rem" }}>
                  <img
                    src={this.props.images[taskSingle.imageId]}
                    className="card-img-top"
                    onClick={() =>
                      this.enlargedImage(this.props.images[taskSingle.imageId])
                    }
                    alt="..."
                  />
                </div>
              ) : (
                ""
              )}
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

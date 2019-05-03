import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

class UrgentList extends Component {
  //either needs redux, or checklist row nees to be a stateful component with status in state and picture in state.
  state = {
    urgentTasks: this.props.urgentTasks
  };

  getUrgentList = async () => {
    const { data } = await axios.get(`http://localhost:3001/urgent`);
    let urgentTasks = this.state.urgentTasks;
    urgentTasks = data;
    this.setState({ urgentTasks });
  };

  async componentDidMount() {
    this.getUrgentList();
  }

  async componentDidUpdate() {
    this.getUrgentList();
  }

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

    if (tasks.length !== 0) {
      list = tasks.map(task => {
        if (task.status === "Urgent" || task.status === "Check") {
          const color = task.status === "Urgent" ? "bg-danger" : "bg-warning";

          if (task.imageId) {
            //build callback to storage for this tasks image
          }
          return (
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className={`input-group-text ${color}`}>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    onClick={() => this.props.deleteUrgent(task)}
                  />
                </div>
                <div className={`input-group-text text-light ${color}`}>
                  <b> {task.room}</b>
                </div>
                <div className={`input-group-text text-light ${color}`}>
                  {task.desc}
                </div>
                <div className={`input-group-text text-light bg-secondary`}>
                  {task.date}
                </div>
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

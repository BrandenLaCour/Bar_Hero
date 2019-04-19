import React from "react";
import Selects2 from "../DropDowns/Selects2";
import Uploader from "./Uploader";

const UrgentList = props => {
  //either needs redux, or checklist row nees to be a stateful component with status in state and picture in state.
  const tasks = props.urgentTasks;

  const list = tasks.map(task => {
    if (task.status === "Urgent" || task.status === "Check") {
      const color = task.status === "Urgent" ? "bg-danger" : "bg-warning";
      return (
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className={`input-group-text ${color}`}>
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
            <div className={`input-group-text text-light ${color}`}>
              {task.desc}
            </div>
          </div>
        </div>
      );
    }
  });
  return <React.Fragment>{list}</React.Fragment>;
};

export default UrgentList;

// use react-bootstrap documentation

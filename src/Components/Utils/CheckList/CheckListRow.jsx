import React from "react";
import Selects2 from "../DropDowns/Selects2";
import Uploader from "./Uploader";

const CheckList = props => {
  //either needs redux, or checklist row nees to be a stateful component with status in state and picture in state.

  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              onClick={props.urgent}
              aria-label="Checkbox for following text input"
            />
          </div>
          <div className="input-group-text">{props.desc}</div>
          <div className="input-group-text">
            <Selects2 desc={props.desc} />
          </div>
          <div className="input-group-text">
            <Uploader />
          </div>{" "}
        </div>
        <div className="input-group-text col-5">
          <input
            type="text"
            className="form-control "
            aria-label="Text input with checkbox"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckList;

// use react-bootstrap documentation

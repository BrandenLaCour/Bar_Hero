import React from "react";
import Selects from "../DropDowns/Selects";
import Selects2 from '../DropDowns/Selects2';
import Uploader from "./Uploader";
import Button from "react-bootstrap/Button";

const CheckList = () => {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
          <div className="input-group-text">
            Testing words 12 , check this box 34. Checking
          </div>
          <div className="input-group-text">
            <Selects2 />
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

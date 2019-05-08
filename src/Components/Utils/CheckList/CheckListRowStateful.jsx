import React from "react";
import ImageUploader from "react-images-upload";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./UrgentList.css";

const styles = theme => ({});
class ChecklistRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      status: "",
      desc: this.props.desc,
      date: this.props.date,
      room: this.props.roomName
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  handleChange = name => event => {
    this.setState({ status: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text ">
              <input
                type="checkbox"
                onClick={() => this.props.urgent(this.state)}
                aria-label="Checkbox for following text input"
              />
            </div>
            <div className="input-group-text">{this.props.desc}</div>
            <div className="input-group-text">
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                <Select
                  native
                  value={this.state.status}
                  onChange={this.handleChange("age")}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple"
                  }}
                >
                  <option value="" />
                  <option value={"Urgent"}>Urgent</option>
                  <option value={"Check"}>Check</option>
                  <option value={"Okay"}>Okay</option>
                </Select>
              </FormControl>
            </div>
            <div className="input-group-text">
              <ImageUploader
                fileContainerStyle={{
                  height: "14px",
                  width: "100px",
                  all: "inherit"
                }}
                buttonText="Upload"
                onChange={this.onDrop}
                withLabel={false}
                withIcon={false}
              />
            </div>{" "}
          </div>
          <div className="input-group-text col-4">
            <input
              type="text"
              className="form-control "
              aria-label="Text input with checkbox"
            />
          </div>
          {this.state.pictures.length > 0 ? (
            <div className="uploaded col-1">
              <p>Uploaded</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

ChecklistRow.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChecklistRow);

// use react-bootstrap documentation

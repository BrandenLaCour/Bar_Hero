import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({});

class NativeSelects extends React.Component {
  state = {
    status: "",
    desc: this.props.desc
  };

  handleChange = name => event => {
    this.setState({ status: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
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
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NativeSelects);

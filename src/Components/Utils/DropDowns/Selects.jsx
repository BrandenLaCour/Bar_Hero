import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Selects = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Status
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Urgent</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Needs Attention</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Selects;

import React from "react";
import CheckListRowStateful from "./CheckListRowStateful";
// import CheckListRow from "./CheckListRow";1

const CheckList = props => {
  const list = Object.values(props.roomList);

  const listArray = list.map(e => (
    <CheckListRowStateful desc={e} urgent={props.urgent} room />
  ));
};

export default CheckList;

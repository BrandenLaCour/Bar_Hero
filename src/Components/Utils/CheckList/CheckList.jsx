import React from "react";
import CheckListRowStateful from "./CheckListRowStateful";
// import CheckListRow from "./CheckListRow";1

const CheckList = props => {
  const list = Object.values(props.roomList);
  return list.map(e => (
    <CheckListRowStateful desc={e} urgent={props.urgent} date={props.date} />
  ));
};

export default CheckList;

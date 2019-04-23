import React from "react";
import CheckListRowStateful from "./CheckListRowStateful";
// import CheckListRow from "./CheckListRow";

const CheckList = props => {
  const checkLists = props.roomLists[props.roomId].morning;

  const listArray = checkLists.map(e => (
    <CheckListRowStateful desc={e.desc} urgent={props.urgent} room />
  ));

  return <React.Fragment>{listArray}</React.Fragment>;
};

export default CheckList;

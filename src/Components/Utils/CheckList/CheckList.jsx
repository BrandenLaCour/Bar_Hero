import React from "react";
import CheckListRowStateful from "./CheckListRowStateful";
// import CheckListRow from "./CheckListRow";

const CheckList = props => {
  const checkLists = [
    { desc: "Testing words 1 , check this box Checking" },
    { desc: "Testing words 2 , check this box Checking" },
    { desc: "Testing words 3 , check this box Checking" },
    { desc: "Testing words 2 , check this box Checking" },
    { desc: "Testing words 55 , check this box Checking" },
    { desc: "Testing words 2 , check this box Checking" },
    { desc: "Testing words 2 , check this box Checking" },
    { desc: "Testing words 644 , check this box Checking" },
    { desc: "Testing words 23 , check this box Checking" }
  ];
  const listArray = checkLists.map(e => (
    <CheckListRowStateful desc={e.desc} urgent={props.urgent} />
  ));

  return <React.Fragment>{listArray}</React.Fragment>;
};

export default CheckList;

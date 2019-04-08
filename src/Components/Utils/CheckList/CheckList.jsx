import React from "react";

import CheckListRow from "./CheckListRow";

const CheckList = () => {
  const checkLists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listArray = checkLists.map(e => <CheckListRow />);

  return <React.Fragment>{listArray}</React.Fragment>;
};

export default CheckList;

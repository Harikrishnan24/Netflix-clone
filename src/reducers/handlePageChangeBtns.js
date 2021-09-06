import React, { useState } from "react";
const initialstate = 1;
const handlePageBtns = (state = initialstate, action) => {
  switch (action.type) {
    case "HandleNext":
      return state + 1;
    case "HandlePrevious":
      return state - 1;
    default:
      return state;
  }
};

export default handlePageBtns;

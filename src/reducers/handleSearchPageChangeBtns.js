import React, { useState } from "react";
const initialstate = 1;
const handleSearchPageBtns = (state = initialstate, action) => {
  switch (action.type) {
    case "HandleSearchNext":
      return state + 1;
    case "HandleSearchPrevious":
      return state - 1;
    default:
      return state;
  }
};

export default handleSearchPageBtns;

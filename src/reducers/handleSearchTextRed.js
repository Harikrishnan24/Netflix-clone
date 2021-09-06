import React, { useState } from "react";
const initialstate = "";
const handleSearchText = (state = initialstate, action) => {
  switch (action.type) {
    case "HandleSearch":
      return (state = action.payload);

    default:
      return state;
  }
};

export default handleSearchText;

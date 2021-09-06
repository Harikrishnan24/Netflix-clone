export const handleNextButton = () => {
  return {
    type: "HandleNext",
  };
};
export const handlePrevButton = () => {
  return {
    type: "HandlePrevious",
  };
};
export const handleSearchNextButton = () => {
  return {
    type: "HandleSearchNext",
  };
};
export const handleSearchPrevButton = () => {
  return {
    type: "HandleSearchPrevious",
  };
};

export const handleSearchText = (searchText) => {
  return {
    type: "HandleSearch",
    payload: searchText,
  };
};

import handlePageBtns from "./handlePageChangeBtns";
import handleSearchPageBtns from "./handleSearchPageChangeBtns";
import handleSearchText from "./handleSearchTextRed";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  handlePageBtns,
  handleSearchPageBtns,
  handleSearchText,
});

export default rootReducers;
